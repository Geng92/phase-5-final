class SessionsController < ApplicationController
    def create 
        rider = Rider.find_by(username: params[:username])
        if rider&.authenticate(params[:password])
            session[:rider_id] = rider.id 
            render json: rider, status: :created
        else 
            render json: { errors: "Invalid Password or User" }, status: :unauthorized
        end
    end

    def show 
        rider = Rider.find_by(id: session[:rider_id])
        if rider 
            render json: rider 
        else
            render json: { error: "Not Authorized" }, status: :unauthorized 
        end
    end

    def destroy 
        session.delete :rider_id 
        head :no_content
    end

end
