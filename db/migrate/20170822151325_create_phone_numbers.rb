class CreatePhoneNumbers < ActiveRecord::Migration
  def change
    create_table :phone_numbers do |t|
      t.string :number, null: false
      t.string :type, null: false
      t.integer :user_id, null: false
      t.timestamps null: false
    end
  end
end
