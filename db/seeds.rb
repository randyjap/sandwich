user = User.create!(
  username: "user",
  first_name: "john",
  last_name: "doe",
  email: "email@email.com",
  bio: "lorem ipsum",
  password: "password"
)

20.times do
  Article.create!(
    author: user,
    title: Faker::Book.title,
    article: Faker::Company.catch_phrase,
    date: Time.now,
    category: "LA",
    lat: Faker::Address.latitude,
    lng: Faker::Address.longitude,
    views: rand(50..100)
  )
end

3.times do
  Article.create!(
    author: user,
    title: Faker::Book.title,
    article: Faker::Company.catch_phrase,
    date: Time.now,
    category: "LA",
    featured: true,
    lat: Faker::Address.latitude,
    lng: Faker::Address.longitude
  )
end


Article.all.each do |article|
  2.times do
    Media.create!(
      article: article,
      url: "v1489010716/example_pqoqsl.jpg"
    )
  end
end
