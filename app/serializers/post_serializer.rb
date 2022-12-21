class PostSerializer < ActiveModel::Serializer
  attributes :id, :thumbnail, :clip, :filmer, :date, :likes
end
