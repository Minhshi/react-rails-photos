Rails.application.routes.draw do
  get 'cards/index'
  root to: "cards#index"
  namespace :api, defaults: { format: :json} do
    resources :cards, only: [:index]
  end
end
