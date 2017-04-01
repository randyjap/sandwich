class Api::ArticlesController < ApplicationController
  def index
    category = params[:category]
    featured = params[:featured]
    popular = params[:popular]
    if popular
      @articles = Article.popular
    else
      @articles = Article.where("category = :category and featured = :featured",
                                category: category, featured: featured)
    end
  end

  def show
    @article = Article.find(params[:id])
  end
end
