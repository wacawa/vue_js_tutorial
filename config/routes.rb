Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'home#index'

  resources :books, only: :index

  namespace :api do
    resources :books, only: :show
  end
end
