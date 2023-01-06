class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.string :thumbnail
      t.string :clip
      t.string :filmed_by
      # t.integer :rider_id
      # t.integer :location_id
      t.belongs_to :rider, null: false, foreign_key: true
      t.belongs_to :location, null: true, foreign_key: true
      t.date :date
      t.integer :likes

      t.timestamps
    end
  end
end
