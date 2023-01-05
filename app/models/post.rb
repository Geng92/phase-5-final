class Post < ApplicationRecord
    belongs_to :location, optional: true
    # accepts_nested_attributes_for :location
    belongs_to :rider

    has_many :comments, dependent: :destroy
    # has_many :riders, through: :comments
end
