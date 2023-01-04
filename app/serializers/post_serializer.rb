class PostSerializer < ActiveModel::Serializer
  attributes :id, :thumbnail, :clip, :filmed_by, :date, :likes, :rider_id, :location_id 
  has_one :rider
  has_one :location
  has_many :comments

  # def thumbnail 
  #   if object.photo.attached?
  #     rails_blob_url(object.photo, only_path: true)
  #   end
  # end
  # def rider_id 
  #   self.object.rider.name
  # end
end
