class Api::PhotosController < ApplicationController

  def index
    @photos = Photo.all
  end

  def show
    @photo = Photo.find_by(params[:id])
  end

  def new
    @photo = Photo.new(photo_params)
  end


  private
  def photo_params
    params.require(:photo).permit(:user_id, :caption)

end
