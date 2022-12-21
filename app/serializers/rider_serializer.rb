class RiderSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :instagram, :image, :city, :frame, :bio, :age, :professional, :admin
end
