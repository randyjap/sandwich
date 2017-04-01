class Article < ApplicationRecord
  belongs_to :author, class_name: "User"
  has_many :medias

  def self.popular
    Article.order(views: :desc).limit(3)
  end
end
