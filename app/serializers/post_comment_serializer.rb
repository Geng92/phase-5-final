class PostCommentSerializer < PostSerializer
  attributes :comments
 
  
  def comments
    self.object.comments.order(:created_at).reverse
  end
end
