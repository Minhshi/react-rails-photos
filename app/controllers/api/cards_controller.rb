class Api::CardsController < ActionController::Base
  def index
    @cards = Card.all
    render json: @cards
  end
end
