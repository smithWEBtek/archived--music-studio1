class CreateStudents < ActiveRecord::Migration[5.1]
  def change
    create_table :students do |t|
      t.string :firstname
      t.string :lastname
      t.string :email
      t.integer :level
      t.integer :teacher_id
      t.boolean :active, default: true

      t.timestamps
    end
  end
end
