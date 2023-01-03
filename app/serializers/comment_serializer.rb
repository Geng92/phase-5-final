class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :likes, :post_id, :rider_id
  has_one :rider
  has_one :post

  def rider_id 
    self.object.rider.name
  end
end
