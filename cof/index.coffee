Index =

  vals: []
  cache:
    window: false
    home: false
    stickied: false
    laxin: {}

  i: ->

    Index.cache.window = $(window)
    Index.cache.home = $('#home')


    if Index.cache.window.width() > 1000
      setInterval Index.header, 50

    Index.laxcache()
    setInterval Index.check, 50

    if location.hash isnt ''
      _.on ".option_#{location.hash.replace('#','')}"

    Index.handlers()

  handlers: ->

    $('
      header > .inner > .menu > a.option, .mobile > .inner > .menu > a.option,
      header > .inner a.logo
    ').click Index.option
    $('.burger').click Index.burger

  burger: ->
    _.swap '.mobile, .burger, .menu'

  option:(event) ->

    event.preventDefault()

    hash = $(this).data 'anchor'
    _.off 'header > .inner > .menu > .option, .mobile > .inner > .menu > .option'
    _.off '.mobile, .burger'
    _.on ".option_#{hash}"
    setTimeout ->
      $('html, body').scrollTo "##{hash}",
        duration: 50
        offset: -60
      location.hash = hash
      _.off '.mobile > .inner > .menu > .option'
    , 200

  header: ->

    stickySpot = -200

    if Index.cache.home.offset().top < stickySpot and Index.cache.stickied is false
      _.on '#sticky'
      Index.cache.stickied = true

    if Index.cache.home.offset().top > stickySpot and Index.cache.stickied is true
      _.off '#sticky'
      Index.cache.stickied = off

  laxcache: ->
    $('.laxin').each (i, el) ->
      Index.cache.laxin[i] = el

  check: ->

    #$('.laxin').each (i, el) ->
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
            if Index.vals?[i] isnt val*6
              jel.find('.inner:first').css 'transform', "translate3d(0, #{val*6}px, 0px)"
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
