json.extract! @article,
              :title,
              :article,
              :thumbnail_url,
              :image_url

author = @article.author.username
json.set! :author, author
