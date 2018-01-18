class Lesson < ApplicationRecord
  belongs_to :teacher, dependent: :destroy
  belongs_to :student, dependent: :destroy
  has_many :lesson_resources
  has_many :resources, through: :lesson_resources
end
