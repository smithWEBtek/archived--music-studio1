class ResourceSerializer < ActiveModel::Serializer
  attributes :id, :title, :category, :format, :location
  has_many :lessons
  has_many :students, through: :lessons
  has_many :teachers, through: :lessons
end
