class Photo < ActiveRecord::Base

  belongs_to :user
  has_many :likes
  has_many :comments
end
