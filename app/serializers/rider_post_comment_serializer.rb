class RiderPostCommentSerializer < RiderPostSerializer
  attributes :comments

  def comments
    self.object.comments
  end
end
