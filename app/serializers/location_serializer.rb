class LocationSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :latitude, :longitude, :exists?
end
