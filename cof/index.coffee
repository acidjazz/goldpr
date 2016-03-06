Index =

  cache:
    window: window
    stickied: false

  i: ->

    Index.cache.window = $(window)

    Index.handlers()

    if $(window).width() > 1000
      setInterval Index.header, 20

    setInterval Index.check, 20

    if location.hash isnt ''
      _.on ".option_#{location.hash.replace('#','')}"


  handlers: ->

    $('header > .inner > .menu > .option').click Index.option


  option:(e) ->
    hash = $(this).html()
    _.off 'header > .inner > .menu > .option'
    _.on ".option_#{hash}"
    e.preventDefault()
    location.hash = hash
    $('html, body').scrollTo "##{hash}",
      offset: -60

  header: ->

    stickySpot = 200

    if Index.cache.window.scrollTop() > stickySpot and Index.cache.stickied is false
      _.on '#sticky'
      Index.cache.stickied = true

    if Index.cache.window.scrollTop() < stickySpot and Index.cache.stickied is true
      _.off '#sticky'
      Index.cache.stickied = off

  check: ->

    $('.laxin').each (i, el) ->

      if Index.inViewport el
        [perc, diff] = Index.viewable el
        jel = $(el)

        thresh = jel.data 'thresh'
        thresh = 50 if thresh is undefined

        if perc > thresh and jel.hasClass 'off'
          _.on jel
        if perc < thresh and jel.hasClass 'on'
          _.off jel

        if jel.hasClass 'laxin_vert'
          jel.find('.inner:first').css 'transform', "translate(0, #{diff*3}px)"
          jel.find('.overlay').css 'transform', "translate(0, #{diff}px)"
          jel.find('.overlay > .inner').css 'transform', "translate(0, #{diff/3}px)"




   
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
