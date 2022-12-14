require 'rails_helper'

RSpec.describe "Riders", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/riders/index"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /show" do
    it "returns http success" do
      get "/riders/show"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /create" do
    it "returns http success" do
      get "/riders/create"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /destroy" do
    it "returns http success" do
      get "/riders/destroy"
      expect(response).to have_http_status(:success)
    end
  end

end
