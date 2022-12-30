class PostSerializer < ActiveModel::Serializer
  attributes :id, :thumbnail, :clip, :filmed_by, :date, :likes 
  has_one :rider
  has_one :location
end
