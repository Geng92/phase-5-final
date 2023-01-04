class PostsController < ApplicationController
  before_action :select_post, only: [:show, :update]
  
  def index
      render json: Post.all.order(:date).reverse
  end

  def show 
      render json: @post, serializer: PostCommentSerializer, include: [ 'comments', 'comments.rider', 'riders' ]
  end

  def create
      post = Post.create(post_params)
      render json: post, status: :created
  end

  def destroy
      post = select_post
      post.destroy
      head :no_content
  end

  def update
    if @post
        @post.update(post_params)
        render json: @post
    else
        render_not_found_response 
    end
  end

  private

  def select_post 
      @post = Post.find(params[:id])
  end

  def post_params 
      params.permit(:rider_id, :thumbnail, :clip, 
        :filmed_by, :date, :likes, 
        :location => [:name, :description, :longitude, :latitude, :exists?])
  end
end
