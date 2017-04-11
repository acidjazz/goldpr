Article = 

  i: ->

    name = window.location.hash.replace('#', '')

    $('.basal-entry').attr('basal-name', name)
    $('.basal-entry').attr('basal-structure', 'blog')

    Basal.i config.basal.client, ->
      $('time').each (i, el) =>
        jel = $ el
        jel.html moment(jel.attr('title')).format('MMMM Do YYYY')
        jel.attr 'aria-label', moment(jel.attr('title')).calendar()
