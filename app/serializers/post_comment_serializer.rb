class PostCommentSerializer < PostSerializer
  has_many :comments
end
