Index =

  i: ->

    setInterval Index.check, 50

  check: ->

    $('.laxin').each (i, el) ->
      if Index.inViewport el
        perc = Index.viewable el
        thresh = $(el).data 'thresh'
        thresh = 70 if thresh is undefined
        if perc > thresh and $(el).hasClass 'off'
          _.on $(el)
        if perc < thresh and $(el).hasClass 'on'
          _.off $(el)

   
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
    diff = Math.abs(winMiddle-elMiddle)
    perc = Math.round 100 - diff*100/max

    return perc
