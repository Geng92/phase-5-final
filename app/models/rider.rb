class Rider < ApplicationRecord
    has_many :posts
    has_many :locations, through: :posts

    has_many :comments
    has_many :posts, through: :comments

    has_secure_password
end
