class LessonSerializer < ActiveModel::Serializer
  attributes :id, :date, :notes, :teacher_id, :student_id
  belongs_to :student
  belongs_to :teacher
  has_many :resources
end
