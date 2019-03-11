class Api::CardsController < ActionController::Base
  protect_from_forgery with: :null_session

  def index
    @cards = Card.all
    render json: @cards
  end

  def show
    @card = Card.find(params[:id])
    render json: @card
  end

  def create
    @card = Card.create(card_params)
    @card.save
    render json: @card
  end

  def update
    @card = Card.find(params[:id])
    @card.update(card_params)
    @card.save
    render json: @card
  end

  def destroy
    @card = Card.find(params[:id])
    @card.delete
  end

  private

  def card_params
    params.require(:card).permit(:title, :photo)
  end
end
