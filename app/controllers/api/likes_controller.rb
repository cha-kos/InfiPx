class Api::LikesController < ApplicationController

    def create
      @photo = Photo.find(params[:like][:photo_id])
      @like = Like.new(like_params)

      @like.user_id = current_user.id

      if @like.save!
        render "api/photos/show"
      else
        render json: @like.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy

      @like = Like.find(params[:id])
      @photo = Photo.find(params[:like][:photo_id])

      @like.destroy
      render "api/photos/show"
    end

    private

    def like_params
      params.require(:like).permit(:photo_id)
    end
end
