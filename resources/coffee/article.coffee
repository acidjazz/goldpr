Article = 

  name: false

  i: ->

    @name = window.location.hash.replace('#', '')

    $('.basal-entry').attr('basal-name', @name)
    $('.basal-entry').attr('basal-structure', 'blog')

    Basal.i config.basal.client, ->
      $('time').each (i, el) =>
        jel = $ el
        jel.html moment(jel.attr('title')).format('MMMM Do YYYY')
        jel.attr 'aria-label', moment(jel.attr('title')).calendar()

        for entry in Basal.structures.blog.entries
          if entry.name is Article.name
            title = entry.entities.title.value
            description = entry.entities.description.value
            image = entry.entities.image.value

            url = 'https://www.goldpr.com/article/#' + Article.name

            document.title = title

            $('meta[name=description]').attr 'content', description

            $('head')
              .append($("<meta property='og:url' content='#{url}' />"))
              .append($("<meta property='og:title' content='#{title}' />"))
              .append($("<meta property='og:description' content='#{description}' />"))
              .append($("<meta property='og:image' content='#{image}' />"));

            $('head')
              .append($("<meta name='twitter:title' content='#{title}' />"))
              .append($("<meta name='twitter:description' content='#{description}' />"))
              .append($("<meta name='twitter:image' content='#{image}' />"));
            ###
            $('meta[property="og:url"]').attr 'content', 'https://www.goldpr.com/article/#' + Article.name
            $('meta[property="og:title"]').attr 'content', title
            $('meta[property="og:description"]').attr 'content', description
            $('meta[property="og:image"]').attr 'content', image

            $('meta[name="twitter:title"]').attr 'content', title
            $('meta[name="twitter:description"]').attr 'content', description
            $('meta[name="twitter:image"]').attr 'content', image
            ###
