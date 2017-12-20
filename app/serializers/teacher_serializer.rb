class TeacherSerializer < ActiveModel::Serializer
  attributes :id, :firstname, :lastname, :email
  has_many :students
end
