class Article < ApplicationRecord
  belongs_to :author, class_name: "User"

  def self.popular
    Article.order(views: :desc).limit(3)
  end
end
