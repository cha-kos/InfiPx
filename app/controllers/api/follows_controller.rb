class Api::FollowsController < ApplicationController

  def create
    @user = User.find(params[:follow][:followee_id])
    @follow = Follow.new(follow_params)
    

    if @follow.save!
      render "api/users/show"
    else
      render json: @follow.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy

    @follow = Follow.find(params[:follow][:id])
    @user = User.find(params[:follow][:followee_id])

    @follow.destroy
    render "api/users/show"
  end

  private

  def follow_params
    params.require(:follow).permit(:follower_id, :followee_id, :id)
  end

end
