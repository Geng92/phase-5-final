class CreateLocations < ActiveRecord::Migration[6.1]
  def change
    create_table :locations do |t|
      t.string :name
      t.string :description
      t.boolean :exists?
      t.decimal :longitude
      t.decimal :latitude

      t.timestamps
    end
  end
end
