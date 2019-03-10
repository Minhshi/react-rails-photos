class Api::CardsController < ActionController::Base
  def index
    @cards = Card.all
    render json: @cards
  end

  def show
    @card = Card.find(params[:id])
    render json: @card
  end

  def new
    @card = Card.new(card_params)
    @card.save
    render json: @card
  end

  private

  def card_params
    params.require(:card).permit(:title, :photo)
  end
end
