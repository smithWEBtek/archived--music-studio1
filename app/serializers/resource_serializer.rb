class ResourceSerializer < ActiveModel::Serializer
  attributes :id, :title, :category, :description, :format, :location, :url, :students, :teachers
  has_many :lesson_resources
  has_many :lessons, through: :lesson_resources
end