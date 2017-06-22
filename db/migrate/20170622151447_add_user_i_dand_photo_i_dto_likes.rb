class AddUserIDandPhotoIDtoLikes < ActiveRecord::Migration
  def change
    add_column :likes, :user_id, :integer, null: false
    add_column :likes, :photo_id, :integer, null: false
  end
end
