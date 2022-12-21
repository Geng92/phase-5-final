class LocationsController < ApplicationController
  before_action :select_location, only: [:show]

  def index
      render json: Location.all
  end

  def show
      render json: @location, serializer: LocationSerializer
  end

  def create
      location = Location.create(post_params)
      render json: location, status: :created
  end

  def destroy
      location = select_location
      location.destroy
      head :no_content
  end

  private

  def select_location 
    @location = Location.find(params[:id])
  end

  def location_params 
    params.permit(:name, :description, :longitude, :latitude, :exists?)
  end
end
