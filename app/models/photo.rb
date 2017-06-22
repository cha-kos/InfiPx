class Photo < ActiveRecord::Base

  belongs_to :user
  has_many :likes
  has_many :comments

  has_attached_file :image, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
end
