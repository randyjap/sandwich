class Api::ArticlesController < ApplicationController
  def index
    debugger
    category = params[:category]
    @articles = Article.all
  end

  def show
    @article = Article.find(params[:id])
  end
end
