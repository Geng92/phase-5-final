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

7.times {
    Rider.create (
        name: Faker::Name.name,
        instagram: Faker::Name.name,
        image: Faker::LoremFlickr.image,
        city: Faker::Address.city,
        frame: Faker::Color.color_name,
        bio: "bmx rider",
        age: Faker::Number.between(from: 12, to: 55),
        professional: Faker::Boolean.boolean
    )
}

10.times {
    Location.create (
        name: Faker::Name.name,
        description: "the spot",
        longitude: Faker::Number.between(from: 12, to: 55),
        latitude: Faker::Number.between(from: 10, to: 50)
    )
}

15.times {
    Location.create (
        thumbnail: Faker::LoremFlickr.image,
        clip: Faker::LoremFlickr.image,
        filmer: Faker::Name.name,
        date: Faker::Date.foward,
        likes: Faker::Number.rand(1..10),
        rider_id: Rider.all.ids.sample,
        location_id: Location.all.ids.sample
    )
}