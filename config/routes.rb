Rails.application.routes.draw do
  # namespace :api do
  #   get 'cards/index'
  # end
  root to: "pages#home"
  namespace :api, defaults: { format: :json} do
    resources :cards, only: [:index, :show]
  end
end
