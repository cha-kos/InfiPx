class UnrequireCaptionOnPhotos < ActiveRecord::Migration
  def change
    change_column :photos, :caption, :string, :null => true
  end
end
