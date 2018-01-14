const STUDENTS = [
  { id: 1, level: 1, teacher_id: 1, firstname: 'James', lastname: 'Smith', email: 'jsmith@student.com' },
  { id: 2, level: 2, teacher_id: 5, firstname: 'Peter', lastname: 'Granger', email: 'pgranger@student.com' },
  { id: 3, level: 2, teacher_id: 3, firstname: 'Teddy', lastname: 'Mullet', email: 'tmullet@student.com' },
  { id: 4, level: 2, teacher_id: 2, firstname: 'Francis', lastname: 'Callucci', email: 'fcallucci@student.com' },
  { id: 5, level: 3, teacher_id: 2, firstname: 'Brian', lastname: 'Nadeau', email: 'bnadeau@student.com' },
  { id: 6, level: 1, teacher_id: 3, firstname: 'Sue', lastname: 'Morrow', email: 'smorrow@student.com' },
  { id: 7, level: 1, teacher_id: 3, firstname: 'Andrea', lastname: 'McPhail', email: 'amcphail@student.com' },
  { id: 8, level: 3, teacher_id: 4, firstname: 'Orin', lastname: 'Keepnews', email: 'okeepnews@student.com' },
  { id: 9, level: 1, teacher_id: 4, firstname: 'Will', lastname: 'Marron', email: 'wmarron@student.com' },
  { id: 10, level: 1, teacher_id: 5, firstname: 'Penny', lastname: 'Clump', email: 'pclump@student.com' },
  { id: 11, level: 1, teacher_id: 5, firstname: 'Babu', lastname: 'Aadou', email: 'baba3doo@student.com' }
]


const LESSONS = [
  { id: 1, date: '2017-10-01', notes: 'initial meet and greet', teacher_id: 1, student_id: 1 },
  { id: 2, date: '2017-10-01', notes: 'initial meet and greet', teacher_id: 1, student_id: 2 },
  { id: 3, date: '2017-10-01', notes: 'initial meet and greet', teacher_id: 1, student_id: 3 },
  { id: 4, date: '2017-10-01', notes: 'initial meet and greet', teacher_id: 2, student_id: 4 },
  { id: 5, date: '2017-10-01', notes: 'initial meet and greet', teacher_id: 2, student_id: 5 },
  { id: 6, date: '2017-10-01', notes: 'initial meet and greet', teacher_id: 2, student_id: 6 },
  { id: 7, date: '2017-10-01', notes: 'initial meet and greet', teacher_id: 3, student_id: 7 },
  { id: 8, date: '2017-10-01', notes: 'initial meet and greet', teacher_id: 3, student_id: 8 },
  { id: 9, date: '2017-10-01', notes: 'initial meet or greet', teacher_id: 3, student_id: 9 }
]


const RESOURCES = [
  { id: 1, title: 'cycle of fifths 1', category: 'harmony', description: '12 keys in 12 bars', format: 'doc', location: 'cloud' },
  { id: 2, title: 'blues in F', category: 'blues', description: '12 bar blues', format: 'pdf', location: 'cloud' },
  { id: 3, title: 'II-V-I 4bar', category: 'improv', description: '4 bar phrases', format: 'aud', location: 'cloud' },
  { id: 4, title: 'maj triad', category: 'chords', description: 'major triad inversions', format: 'pdf', location: 'cloud' },
  { id: 5, title: 'min triad', category: 'chords', description: 'minor triad inversions', format: 'vid', location: 'cloud' },
  { id: 6, title: 'dom7', category: 'chords', description: 'dom7 inversions', format: 'pdf', location: 'cloud' },
  { id: 7, title: 'min7', category: 'chords', description: 'min7 inversions', format: 'doc', location: 'cloud' },
  { id: 8, title: 'min7b5', category: 'chords', description: 'min7b5 inversions', format: 'pdf', location: 'cloud' },
  { id: 9, title: 'maj7', category: 'chords', description: 'maj7 inversions', format: 'pdf', location: 'cloud' },
  { id: 10, title: 'major scales', category: 'scales', description: 'major scales', format: 'aud', location: 'cloud' }
]

const TEACHERS = [
  { id: 1, firstname: 'Not', lastname: 'Assigned', email: 'unassigned@music.com' },
  { id: 2, firstname: 'Joe', lastname: 'Pepper', email: 'jpepper@music.com' },
  { id: 3, firstname: 'Mila', lastname: 'Filatova', email: 'mfilatova@music.com' },
  { id: 4, firstname: 'Barry', lastname: 'Gendron', email: 'bgendron@music.com' },
  { id: 5, firstname: 'James', lastname: 'Brown', email: 'jb@getfunky1.com' }
]



#<Resource id: 13, title: "II-V-I 4bar", category: "improv", description: "4 bar phrases", format: "aud", location: "cloud", url: "no_url_given", created_at: "2018-01-14 18:05:25", updated_at: "2018-01-14 18:05:25" >,

#<Resource id: 16, title: "major scales", category: "scales", description: "major scales", format: "aud", location: "cloud", url: "no_url_given", created_at: "2018-01-14 18:05:25", updated_at: "2018-01-14 18:05:25" >,

#<Resource id: 35, title: "Vereno audio", category: "salsa", description: "exercise salsa montuno", format: "aud", location: "cloud", url: "383625701", created_at: "2018-01-14 20:00:34", updated_at: "2018-01-14 22:14:25" >,

#<Resource id: 36, title: "Misty-salsa", category: "latin jazz", description: "latin jazz trio", format: "aud", location: "soundcloud", url: "253001471", created_at: "2018-01-14 22:33:02", updated_at: "2018-01-14 22:33:02" >] >
  2.3.0 : 003 > 