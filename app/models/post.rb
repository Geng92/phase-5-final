class Post < ApplicationRecord
    belongs_to :location
    belongs_to :rider

    has_many :comments
    has_many :riders, through: :comments

end
