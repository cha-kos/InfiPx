class AddFullNameAndBioToUser < ActiveRecord::Migration
  def change
    add_column :users, :full_name, :string
    add_column :users, :bio, :string
  end
end
