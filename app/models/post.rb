class Post < ApplicationRecord
    belongs_to :location, optional: true
    belongs_to :rider

    has_many :comments, dependent: :destroy
end
