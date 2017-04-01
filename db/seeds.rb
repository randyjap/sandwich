user = User.create!(
  username: "user",
  first_name: "john",
  last_name: "doe",
  email: "email@email.com",
  bio: "lorem ipsum",
  password: "password"
)

user = User.create!(
  username: "user2",
  first_name: "john",
  last_name: "doe",
  email: "email@email.com",
  bio: "lorem ipsum",
  password: "password"
)

20.times do
  Article.create!(
    author: User.find(rand(1..2)),
    title: Faker::Book.title,
    article: Faker::Company.catch_phrase,
    date: Time.now,
    category: "LA",
    lat: Faker::Address.latitude,
    lng: Faker::Address.longitude,
    views: rand(50..100)
  )
  Article.create!(
    author: User.find(rand(1..2)),
    title: Faker::Book.title,
    article: Faker::Company.catch_phrase,
    date: Time.now,
    category: "San Francisco",
    lat: Faker::Address.latitude,
    lng: Faker::Address.longitude,
    views: rand(50..100)
  )
  Article.create!(
    author: User.find(rand(1..2)),
    title: Faker::Book.title,
    article: Faker::Company.catch_phrase,
    date: Time.now,
    category: "Taipei",
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
    category: ["LA", "San Francisco", "Taipei"].sample,
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
