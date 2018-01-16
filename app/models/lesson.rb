class Lesson < ApplicationRecord
  belongs_to :teacher
  belongs_to :student
  has_many :lesson_resources
  has_many :resources, through: :lesson_resources
  accepts_nested_attributes_for :resources
end
