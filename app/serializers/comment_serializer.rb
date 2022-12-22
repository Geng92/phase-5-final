class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :post_id, :rider_id
  has_one :rider
  has_one :post
end
