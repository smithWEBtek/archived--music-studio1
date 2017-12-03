class CreateResources < ActiveRecord::Migration[5.1]
  def change
    create_table :resources do |t|
      t.string :title
      t.string :category
      t.string :description
      t.string :format
      t.string :location

      t.timestamps
    end
  end
end
