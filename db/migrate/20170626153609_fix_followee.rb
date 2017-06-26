class FixFollowee < ActiveRecord::Migration
  def change
    rename_column :follows, :folowee_id, :followee_id
  end
end
