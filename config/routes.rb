Rails.application.routes.draw do
  # namespace :api do
  #   get 'cards/index'
  # end
  root to: "pages#home"
  get "/cards/new", to: "pages#home"
  get "/cards/edit/:id", to: "pages#home"
  get "/cards/delete/:id", to: "pages#home"
  get "/cards/:id", to: "pages#home"

  namespace :api, defaults: { format: :json} do
    resources :cards, only: [:index, :show, :create, :update, :destroy]
  end
end
