class Like < ActiveRecord::Base
  validates :user, :photo, presence: true
  validates :user, uniqueness: { scope: :photo }
  
  belongs_to :user
  belongs_to :photo
end
