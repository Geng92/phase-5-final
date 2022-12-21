class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :trick_id, :rider_id
end
