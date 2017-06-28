class Api::UsersController < ApplicationController

  def show
    @user = User.includes(:photos).find(params[:id])
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update

    @user = User.find(params[:user][:id])

    if @user.update_attributes(user_params)
      login(@user)
      render "api/sessions/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :full_name, :bio)
  end


end
