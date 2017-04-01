class Api::ArticlesController < ApplicationController
  def index
    category = params[:category]
    featured = params[:featured]
    popular = params[:popular]
    if popular
      @articles = Article.popular
                         .order(date: :desc)
                         .includes(:author)
                         .includes(:medias)
    elsif featured && category.nil?
      @articles = Article.where(featured: true)
                         .order(date: :desc)
                         .includes(:author)
                         .includes(:medias)
    elsif category && featured.nil?
      @articles = Article.where(category: category)
                         .order(date: :desc)
                         .includes(:author)
                         .includes(:medias)
    elsif featured && category
      @articles = Article.where(featured: featured)
                         .where(category: category)
                         .order(date: :desc)
                         .includes(:author)
                         .includes(:medias)
    else
      @articles = Article.order(date: :desc)
                         .includes(:author)
                         .includes(:medias)
    end
  end

  def show
    @article = Article.find(params[:id])
  end
end
