class PostCommentSerializer < PostSerializer
  attributes :comments
  # has_many :comments
  
  def comments
    self.object.comments
  end
end
