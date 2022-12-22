class RiderPostSerializer < RiderSerializer
  has_many :posts, serializer: PostCommentSerializer
  has_many :comments
end
