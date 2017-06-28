class Api::CommentsController < ApplicationController

  def create

    @photo = Photo.find(params[:comment][:photo_id])
    @comment = Comment.new(comment_params)

    if @comment.save!
      render "api/photos/show"
    else
      render json: @like.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @photo = Photo.find(params[:photo_id])
    @comment = Comment.find(params[:id])
    if @comment.destroy!
      render "api/photos/show"
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :user_id, :photo_id, :username)
  end

end
