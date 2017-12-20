class StudentSerializer < ActiveModel::Serializer
  attributes :id, :firstname, :lastname, :email, :level, :teacher_id
  belongs_to :teacher
end
