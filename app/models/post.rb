class Post < ApplicationRecord
    belongs_to :location
    belongs_to :rider

    has_many :comments, dependant: :destroy
    has_many :riders, through: :comments
end
