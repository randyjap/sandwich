class Api::ArticlesController < ApplicationController
  def index
    @articles = Article.all
  end
end
