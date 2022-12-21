class RiderSerializer < ActiveModel::Serializer
  attributes :id, :name, :instagram, :image, :city, :frame, :bio, :age, :professional
end
