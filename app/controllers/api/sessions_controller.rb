class Api::SessionsController < ApplicationController

  def show
    @user = @current_user
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password],
    )

    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ["Invalid Username or Password"], status: 422
    end
  end

  def destroy
    if current_user
      logout(current_user)
      render json: {}
    else
      render json: {}, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end

end
