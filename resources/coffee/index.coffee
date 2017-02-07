Index =

  vals: []
  section: 'home'
  vis: false
  cache:
    window: window
    stickied: false
    laxin: {}

  i: ->

    if document.location.hostname is 'www.goldpr.com' and document.location.protocol isnt 'https:'
      if document.location.hash isnt ""
        document.location = 'https://www.goldpr.com/' + document.location.hash
      else
        document.location = 'https://www.goldpr.com/'

    if document.location.hostname is 'goldpr.com'
      if document.location.hash isnt ""
        document.location = 'https://www.goldpr.com/' + document.location.hash
      else
        document.location = 'https://www.goldpr.com/'
    

    Index.cache.window = $(window)
    if document.visibilityState isnt undefined
      Index.vis = document.visibilityState
      setInterval Index.visible, 200


    if Index.cache.window.width() > 1000
      setInterval Index.header, 50

    Index.laxcache()
    setInterval Index.check, 100
    setInterval Index.menu, 500

    Index.handlers()
    console.log 'Index.i()'


  visible: ->
    if Index.vis isnt document.visibilityState
      Index.vis = document.visibilityState
      _.off '.blueCircle'
      setTimeout ->
        _.on '.blueCircle'
      , 10

  handlers: ->

    $('
      header > .inner > .menu > a.option, .mobile > .inner > .menu > a.option,
      header > .inner a.logo
    ').click Index.option
    $('.burger').click Index.burger

  burger: ->
    _.swap '.mobile, .burger, .burger > .inner > .menu'

  option: (event) ->

    event.preventDefault()

    hash = $(this).data 'anchor'
    _.off 'header > .inner > .menu > .option, .mobile > .inner > .menu > .option'
    _.off '.mobile, .burger'
    setTimeout ->
      $('html, body').scrollTo "##{hash}",
        duration: 50
        offset: -60
      location.hash = hash
    , 200

  header: ->

    stickySpot = 300

    if Index.cache.window.scrollTop() > stickySpot and Index.cache.stickied is false
      _.on '#sticky'
      Index.cache.stickied = true

    if Index.cache.window.scrollTop() < stickySpot and Index.cache.stickied is true
      _.off '#sticky'
      Index.cache.stickied = off

  menu: ->

    $('.section').each (i, el) ->
      section = $(el).data 'section'
      if Index.inViewport el
        _.off 'header > .inner > .menu > .option, .mobile > .inner > .menu > .option'
        _.on ".option_#{section}"
        return true

  laxcache: ->
    $('.laxin').each (i, el) ->
      Index.cache.laxin[i] = el

  check: ->
    for i, el of Index.cache.laxin

      if Index.inViewport el
        [perc, diff] = Index.viewable el
        jel = $(el)

        thresh = jel.data 'thresh'
        thresh = 50 if thresh is undefined

        if perc > thresh and jel.hasClass 'off'
          _.on jel
        if perc < thresh and jel.hasClass 'on'
          _.off jel

        ###
        if Index.cache.window.width() > 1000
          if jel.hasClass 'laxin_vert'
            val = Math.round(diff)
            #val = Math.round(diff)
            if Index.vals?[i] isnt val*3
              jel.find('.inner:first').css 'transform', "translate3d(0, #{val*3}px, 0px)"
              jel.find('.overlay').css 'transform', "translate3d(0, #{val*2}px, 0px)"
              jel.find('.overlay > .inner').css 'transform', "translate3d(0, #{val/5}px, 0px)"
              Index.vals[i] = val*3
        ###
   
  inViewport: (el) ->

    rect = el.getBoundingClientRect()

    return(
      (rect.top >= 0 || rect.bottom >= 0) &&
      (rect.top <= window.innerHeight || rect.bottom <= window.innerHeight)
    )

  viewable: (el) ->
    rect = el.getBoundingClientRect()
    height = rect.bottom-rect.top

    elMiddle = rect.top + height/2
    winMiddle = window.innerHeight/2
    max = window.innerHeight/2 + height/2
    diff = winMiddle-elMiddle
    perc = 100 - Math.abs(diff)*100/max
    nonabs = Math.abs(diff)*100/max
    nonabs = -nonabs if diff < 0

    return [perc, nonabs]

