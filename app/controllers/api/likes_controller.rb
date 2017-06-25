class Api::LikesController < ApplicationController
    # before_action :require_signed_in!
    # before_action :require_like_owner!, only: [:destroy]

    def create
      @like = current_user.likes.new(like_params)
      if @like.save
        render json: @like
      else
        render json: @like.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @like = current_like
      @like.destroy
      render json: @like
    end

    private
      def current_like
        @current_like ||= Like.find(params[:id])
      end

      def like_params
        params.require(:like).permit(:photo_id)
      end

      def require_like_owner!
        unless current_like.user_id == current_user.id
          render json: ["You must be the Like's owner to do that"], status: :unauthorized
        end
      end
    # end private
  end
end
