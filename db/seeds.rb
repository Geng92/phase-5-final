# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Rider.destroy_all
Location.destroy_all
Post.destroy_all
Comment.destroy_all
puts "rider destroyed"
puts "location destroyed"
puts "post destroyed"
puts "comment destroyed"

Rider.create(
    name: "Admin",
    instagram: Faker::Name.name,
    image: Faker::LoremFlickr.image,
    city: Faker::Address.city,
    frame: Faker::Color.color_name,
    bio: "bmx rider",
    age: Faker::Number.between(from: 12, to: 55),
    professional: Faker::Boolean.boolean,
    username: "ADMIN",
    password: "12345",
    admin: true
)
7.times {
    Rider.create(
        name: Faker::FunnyName.name,
        instagram: Faker::Name.name,
        image: Faker::LoremFlickr.image,
        city: Faker::Address.city,
        frame: Faker::Color.color_name,
        bio: "bmx rider",
        age: Faker::Number.between(from: 12, to: 55),
        professional: Faker::Boolean.boolean,
        username: Faker::Name.name,
        password: "12345",
        admin: false
    )
}
puts "Done Creating Riders"

10.times {
    Location.create(
        name: Faker::FunnyName.name,
        description: "the spot",
        longitude: Faker::Address.longitude,
        latitude: Faker::Address.latitude,
        exists?: Faker::Boolean.boolean
    )
}
puts "Done Creating Locations"

15.times {
    Post.create(
        thumbnail: Faker::LoremFlickr.image,
        clip: Faker::LoremFlickr.image,
        filmed_by: Faker::FunnyName.name,
        date: Faker::Date.forward(days: 365),
        likes: Faker::Number.rand(1..10),
        rider_id: Rider.all.ids.sample,
        location_id: Location.all.ids.sample
    )
}

puts "Done Creating Posts"

50.times {
    Comment.create(
        body: "text here",
        post_id: Post.all.ids.sample,
        rider_id: Rider.all.ids.sample,
        likes: Faker::Number.rand(1..30),
    )
}
puts "Done Creating Comments"
puts "Done Creating!!"