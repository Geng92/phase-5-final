require 'rails_helper'

RSpec.describe "Locations", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/locations/index"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /show" do
    it "returns http success" do
      get "/locations/show"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /create" do
    it "returns http success" do
      get "/locations/create"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /destroy" do
    it "returns http success" do
      get "/locations/destroy"
      expect(response).to have_http_status(:success)
    end
  end

end
