Index =

  i: ->

    console.log 'Index.i()'

    $('.lax').each (i, el) ->
      console.log Index.inViewport el


  inViewport: (el) ->

    rect = el.getBoundingClientRect()

    return (
      rect.top >= 0 && rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
