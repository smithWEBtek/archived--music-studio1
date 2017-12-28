DATA_teachers = {
  :teacher_keys =>
    ["firstname", "lastname", "email"],
  :teachers => [
    ['Not', 'Assigned', 'unassigned@music.com'],
    ['Joe', 'Pepper', 'jpepper@music.com'],
    ['Mila', 'Filatova', 'mfilatova@music.com'],
    ['Barry', 'Gendron', 'bgendron@music.com'],
    ['James', 'Brown', 'jb@getfunky.com']
  ]
}

def make_teachers
  DATA_teachers[:teachers].each do |teacher|
    new_teacher = Teacher.new
    teacher.each_with_index do |attribute, i|
      new_teacher.send(DATA_teachers[:teacher_keys][i]+"=", attribute)
    end
    new_teacher.save
  end
end
 
DATA_students = {
  :student_keys =>
    ["level", "teacher_id", "firstname", "lastname", "email"],
  :students => [
    [1, 1, 'James', 'Smith', 'jsmith@student.com'],
    [2, 5, 'Peter', 'Granger', 'pgranger@student.com'],
    [2, 3, 'Teddy', 'Mullet', 'tmullet@student.com'],
    [2, 2, 'Francis', 'Callucci', 'fcallucci@student.com'],
    [3, 2, 'Brian', 'Nadeau', 'bnadeau@student.com'],
    [1, 3, 'Sue', 'Morrow', 'smorrow@student.com'],
    [1, 3, 'Andrea', 'McPhail', 'amcphail@student.com'],
    [3, 4, 'Orin', 'Keepnews', 'okeepnews@student.com'],
    [1, 4, 'Will', 'Marron', 'wmarron@student.com'],
    [1, 5, 'Penny', 'Clump', 'pclump@student.com'],
    [1, 5, 'Babu', 'Aadou', 'babadoo@student.com']
  ]
}

def make_students
  DATA_students[:students].each do |student|
    new_student = Student.new
    student.each_with_index do |attribute, i|
      new_student.send(DATA_students[:student_keys][i]+"=", attribute)
    end
    new_student.save
  end
end

DATA_lessons = {
  :lesson_keys =>
    ["date", "notes", "teacher_id", "student_id"],
  :lessons => [
    ['2017-10-01', 'initial meet and greet', 1, 1],
    ['2017-10-01', 'initial meet and greet', 1, 2],
    ['2017-10-01', 'initial meet and greet', 1, 3],
    ['2017-10-01', 'initial meet and greet', 2, 4],
    ['2017-10-01', 'initial meet and greet', 2, 5],
    ['2017-10-01', 'initial meet and greet', 2, 6],
    ['2017-10-01', 'initial meet and greet', 3, 7],
    ['2017-10-01', 'initial meet and greet', 3, 8],
    ['2017-10-01', 'initial meet and greet', 3, 9]
  ]
}

def make_lessons
  DATA_lessons[:lessons].each do |lesson|
    new_lesson = Lesson.new
    lesson.each_with_index do |attribute, i|
      new_lesson.send(DATA_lessons[:lesson_keys][i]+"=", attribute)
    end
    new_lesson.save
  end
end

DATA_resources = {
  :resource_keys =>
    ["title", "category", "description", "format", "location"],
  :resources => [
    ['cycle of fifths 1', 'harmony', '12 keys in 12 bars', 'pdf', 'cloud'],
    ['blues in F', 'blues', '12 bar blues', 'pdf', 'cloud'],
    ['II-V-I 4bar', 'improv', '4 bar phrases', 'pdf', 'cloud'],
    ['maj triad', 'chords', 'major triad inversions', 'pdf', 'cloud'],
    ['min triad', 'chords', 'minor triad inversions', 'pdf', 'cloud'],
    ['dom7', 'chords', 'dom7 inversions', 'pdf', 'cloud'],
    ['min7', 'chords', 'min7 inversions', 'pdf', 'cloud'],
    ['min7b5', 'chords', 'min7b5 inversions', 'pdf', 'cloud'],
    ['maj7', 'chords', 'maj7 inversions', 'pdf', 'cloud'],
    ['major scales', 'scales', 'major scales', 'pdf', 'cloud'],
    ['minor scales', 'scales', 'minor scales', 'pdf', 'cloud'],
    ['modal scales', 'scales', 'modal scales', 'pdf', 'cloud'],
    ['alt scales', 'scales', 'alt scales', 'pdf', 'cloud'],
    ['chord tones', 'improv', 'chord tones', 'pdf', 'cloud'],
    ['approach notes', 'improv', 'approach notes', 'pdf', 'cloud'],
    ['bi chords', 'improv', 'bi chords', 'pdf', 'cloud'],
    ['Autumn Leaves', 'tune', 'standard', 'pdf', 'cloud'],
    ['Blue Bossa', 'tune', 'standard', 'pdf', 'cloud'],
    ['All The Things', 'tune', 'standard', 'pdf', 'cloud'],
    ['I Got Rhythm', 'tune', 'standard', 'pdf', 'cloud'],
    ['Bill Evans - Universal Mind', 'documentary', 'philosophy of music', 'video', 'youtube'],
    ['Gary Burton - Improvisation', 'master class', 'philosophy of improv', 'video', 'youtube'],
    ['Kenny Werner - Effortless Mastery', 'master class', 'psychology of playing', 'video', 'youtube'],
    ['Kurt Elling - Role of Band Leader', 'master class', 'leading a gig', 'video', 'youtube']
  ]
}

def make_resources
  DATA_resources[:resources].each do |resource|
    new_resource = Resource.new
    resource.each_with_index do |attribute, i|
      new_resource.send(DATA_resources[:resource_keys][i]+"=", attribute)
    end
    new_resource.save
  end
end

DATA_lesson_resources = {
  :lesson_resource_keys =>
    ["lesson_id", "resource_id"],
  :lesson_resources => [
    [1,1],
    [1,2],
    [1,3],
    [2,1],
    [2,2],
    [2,3],
    [3,4],
    [3,2],
    [3,1]
  ]
}

def make_lesson_resources
  DATA_lesson_resources[:lesson_resources].each do |lesson_resource|
    new_lesson_resource = LessonResource.new
    lesson_resource.each_with_index do |attribute, i|
      new_lesson_resource.send(DATA_lesson_resources[:lesson_resource_keys][i]+"=", attribute)
    end
    new_lesson_resource.save
  end
end
 
def main 
  make_teachers
  make_students
  make_lessons
  make_resources
  make_lesson_resources
end

main