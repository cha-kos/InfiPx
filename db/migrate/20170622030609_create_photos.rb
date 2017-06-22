class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.integer :user_id, null: false
      t.string :caption, null: false
      t.timestamps null: false
    end
  end
end
