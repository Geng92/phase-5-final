class PostsController < ApplicationController
  before_action :select_post, only: [:show]
  
  def index
      render json: Post.all
  end

  def show 
      render json: @post, serializer: PostCommentSerializer
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

  private

  def select_post 
      @post = Post.find(params[:id])
  end

  def post_params 
      params.permit(:rider_id, :location_id, :thumbnail, :clip, :date, :likes)
  end
end
