class MessagesController < ApplicationController
  def random_greeting
    @random_greeting = Message.order('RANDOM()').first
    render json: { content: @random_greeting.content }
  end
end
  