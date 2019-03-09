Rails.application.routes.draw do
  root to: "pages#home"
  namespace :api, defaults: { format: :json} do
    resources :cards, only: [:index]
  end
end
