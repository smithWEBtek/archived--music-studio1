class Resource < ApplicationRecord
  has_many :lesson_resources
  has_many :lessons, through: :lesson_resources
  has_many :students, through: :lessons
  has_many :teachers, through: :lessons
  
  
  def self.db_backup
    exec 'rake db:backup'
  end

  def self.db_reset
    exec 'rake db:dcms'
  end

  def self.heroku_db_reset
    exec 'rake db:hdcms'
  end
end
