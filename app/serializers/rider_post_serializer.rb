class RiderPostSerializer < RiderSerializer
  has_many :posts, serializer: PostCommentSerializer
  has_many :comments

  def posts 
    object.posts.order(:date).reverse
  end
end
