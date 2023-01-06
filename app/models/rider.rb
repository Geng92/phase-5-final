class Rider < ApplicationRecord
    has_many :posts
    has_many :locations, through: :posts

    has_many :comments
    has_many :posts, through: :comments

    has_secure_password
    
    validates_presence_of :name, :instagram, :image, :city, :frame, :bio, :age, :username
    validates :age, inclusion: 3..120
end
