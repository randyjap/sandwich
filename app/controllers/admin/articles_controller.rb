class Admin::ArticlesController < ApplicationController
  def show
    @article = Article.find(params[:id])
  end

  def create
    @article = Article.new(article_params)
    @article.author = User.first
    if @article.save
      redirect_to action: "show", id: @article.id
    end
  end

  private

  def article_params
    params.require(:article).permit(:title, :article, :thumbnail_url, :image_url)
  end
end
