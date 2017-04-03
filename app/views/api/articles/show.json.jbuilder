json.extract! @article,
  :id,
  :title,
  :article,
  :date,
  :views,
  :category,
  :featured,
  :lat,
  :lng
json.set! :author do
  json.extract! @article.author,
  :first_name,
  :last_name
end
json.set! :media do
  json.array!(@article.medias) do |media|
    json.url media.url
    json.article_id media.article_id
  end
end
