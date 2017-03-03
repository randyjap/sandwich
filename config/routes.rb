Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :admin do
    resources :articles, only: [:new, :create, :destroy, :show]
  end

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:new, :create, :destroy]
  end
end
