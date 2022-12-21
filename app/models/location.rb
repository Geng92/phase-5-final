class Location < ApplicationRecord
    has_many :posts
    has_many :riders, through: :posts
end
