class Resource < ApplicationRecord

  has_many :lesson_resources
  has_many :lessons, through: :lesson_resources
  has_many :students, through: :lessons
  has_many :teachers, through: :lessons
 
  def self.resetdb
    # Resource.destroy_all
    # Student.destroy_all
    # Teacher.destroy_all
    # Lesson.destroy_all
    # ActiveRecord::Base.connection.execute("DELETE from sqlite_sequence where name = 'resources'")
    # ActiveRecord::Base.connection.execute("DELETE from sqlite_sequence where name = 'students'")
    # ActiveRecord::Base.connection.execute("DELETE from sqlite_sequence where name = 'teachers'")
    # ActiveRecord::Base.connection.execute("DELETE from sqlite_sequence where name = 'lessons'")
    exec 'rake db:dcms'
  end
end
