class Resource < ApplicationRecord
  has_many :lesson_resources
  has_many :lessons, through: :lesson_resources
  has_many :students, through: :lessons
  
end
