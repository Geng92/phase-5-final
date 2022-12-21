class CreateRiders < ActiveRecord::Migration[6.1]
  def change
    create_table :riders do |t|
      t.string :name
      t.string :instagram
      t.string :image
      t.string :city
      t.string :frame
      t.string :bio
      t.integer :age
      t.boolean :professional
      t.string :username
      t.string :password_digest
      t.boolean :admin

      t.timestamps
    end
  end
end
