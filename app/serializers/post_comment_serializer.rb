class PostCommentSerializer < CommentSerializer
  has_many :comments
end
