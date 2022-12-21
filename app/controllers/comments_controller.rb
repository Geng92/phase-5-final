class CommentsController < ApplicationController
  def index
      render json: Comment.all
  end

  def show
      render json: @comment, serializer: CommentSerializer
  end

  def create
    comment = Comment.create(comment_params)
  end

  def destroy
    comment = select_comment
    comment.destroy
    head :no_content
  end

  private

  def select_comment 
    @comment = Comment.find(params[:id])
  end
  
  def comment_params 
    params.permit(:rider_id, :post_id, :body, :likes)
  end
end
