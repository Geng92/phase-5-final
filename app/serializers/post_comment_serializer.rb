class PostCommentSerializer < PostSerializer
  attributes :comments
  # has_one :rider
  # has_one :location
  
  def comments
    self.object.comments
  end
end
