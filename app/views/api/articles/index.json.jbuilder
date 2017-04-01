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
  end
end
