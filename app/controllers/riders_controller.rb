class RidersController < ApplicationController
  before_action :select_rider, only: [:show, :update]
  
  def index
      render json: Rider.all
  end

  def rider_posts 
      render json: Rider.all, serializer: RiderPostSerializer
  end

  def rider_comments 
      render json: Rider.all, serializer: RiderCommentSerializer
  end

  def show
      render json: @rider, serializer: RiderPostSerializer
  end

  def create
      rider = Rider.create!(rider_params)
      session[:user_id] = rider.id
      render json: rider, status: :created
  end

  def destroy
      rider = select_rider
      rider.destroy
      head :no_content
  end

  private

  def select_rider 
      @rider = Rider.find(params[:id])
  end

  def rider_params 
      params.permit( 
        :name, 
        :instagram, 
        :image, 
        :city, 
        :frame, 
        :bio, 
        :age, 
        :professional,
        :username,
        :password,
        :admin
      )
  end
end
