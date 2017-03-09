@articles.each do |article|
  json.set! article.id do
    author = article.author.username
    json.set! :author, author
    json.extract! article,
                  :title,
                  :article,
                  :thumbnail_url,
                  :image_url
  end
end
