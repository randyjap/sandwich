@articles.each do |article|
  json.set! article.id do
    json.extract! article,
    :title,
    :article,
    :date,
    :views,
    :category,
    :featured,
    :lat,
    :lng
    json.set! :author do
      json.extract! article.author,
      :first_name,
      :last_name
    end
    json.set! :media do
      json.array!(article.medias) do |media|
        json.url media.url
        json.article_id media.article_id
      end
    end
  end
end
