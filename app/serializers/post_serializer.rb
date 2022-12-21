class PostSerializer < ActiveModel::Serializer
  attributes :id, :thumbnail, :clip, :filmed_by, :date, :likes
end
