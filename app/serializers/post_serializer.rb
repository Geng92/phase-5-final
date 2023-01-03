class PostSerializer < ActiveModel::Serializer
  attributes :id, :thumbnail, :clip, :filmed_by, :date, :likes, :rider_id 
  has_one :rider
  has_one :location
  has_many :comments

  def rider_id 
    self.object.rider.name
  end
end
