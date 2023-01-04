class Post < ApplicationRecord
    belongs_to :location, optional: true
    belongs_to :rider
    

    has_many :comments, dependent: :destroy
    # has_many :riders, through: :comments
end
