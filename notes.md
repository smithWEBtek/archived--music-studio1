==================================================================================
REQUIREMENTS
[X] The code should be written in ES6 as much as possible
[X] Use create-react-app generator to start your project.
[X] Follow the instructions on this repo to setup the generator: create-react-app
[X] Your app should have one HTML page to render your react-redux application
[X] There should be 2 container components
    CONTAINERS: Layout, Lesson, AddLesson, Students, Teachers, Resources
[X] There should be 5 stateless components
    STATELESS FUNCTIONAL: Student, Teacher, Resource, StudentService, TeacherService, ResourceService, LessonService
[X] There should be 3 routes
[X] use react-router and proper RESTful routing
[X] use async actions to send data to and receive data from a server
[X] Rails API should handle the data persistence. 
[X] You should be using fetch() within your actions to GET and []  POST data from your API
[X] Do not use jQuery methods.
[X] client-side application should handle the display of data with minimal data manipulation
[X] app should have some minimal styling: feel free to stick to a framework (like react-bootstrap), 
[X] write (additional) CSS yourself if you wish
[X]  use Redux middleware to respond to and modify state change
==================================================================================
TODO
[]  practice reactstrap and build an empty, styled framework first
[]  Teacher CRUD (index, show, new/create, edit/update, delete), add links for: MyLessons, MyStudents, AllResources
[]  Student CRUD (index, show, new/create, edit/update, delete), add for: MyLessons, MyTeacher, MyResources, PracticeLog
[]  Resource CRUD (index, show, new/create, edit/update, delete), add modal via hover, for the 4 types of viewer (PDF, DOC, AUD, VID))
[]  Lesson  Resource CRUD (index, show, new/create, edit/update, delete)
[]  LessonInProgress: add TeachLesson function ( live editing of notes and adding of resources in a new or existing Lesson)
[]  button in index, to "ADD TO CURRENT LESSON", to add multiple resources to new or existing lesson
[]  validation: lesson MUST have teacher and student to be valid lesson
 
[] StudentsList table, Lastname does not redirect to ShowStudent url   /students/:id

[]  show lesson:
[]  ResourcesList view based on resources assigned to this Lesson (slimmed down version of <Resources /> component w/o CRUD)

[]  user authentication
[]  constrain views for admin, teacher, student
[]  needs more style (steal css from udemy-react-blog)
[]  refactor some stateful components to stateless with props only (if poss?)


NICE TO HAVES------------------------------------------------------
[]  show student
  [x]  should have complete list of lessons and resources assigned
  []  should have a chart showing practice progress on assigned resources
  []  practicing via MIDI keyboard, could track how many times a student has played a piece and how accurate they did it
  []  should have a way to submit new notes back to the teacher, favorite tunes, PracticeLog object will hold this

[]  show resource
  [X]  should be more elaborate view of resource
  []  should take advantage of serialization data, to show "Students Assigned To This Resource"
  []  should have a chart showing students practice frequency for this resource
  []  if pdf: view the pdf in a small window
  []  if video: show YouTube small video window
  []  should have feedback mechanism for students to comment on progress, difficulty, improvements, etc.
  
TODO DONE------------------------------------------------------
[X]  show teacher shows all students assigned
[X] move teachers, students, resources and lessons code out of layout, leaving just ComponentName
[X] buttons to toggle Students, Teachers, Resources, Lessons
[X] connect toolbar links to show indexes for students, teachers, resources and lessons
 
[X]  plan the redux parts
[X] plan the application 
[X]  -plan the data model
[X] build the database 
[X] seed the database 
[X] create the api data, all models, index and create 
[X]  plan the views required 
[X]  plan the react app

==================================================================================
DATA MODEL, migrations, active record relationships and sample data
==================================================================================
TEACHER
has_many :students
has_many :lessons
rails g resource Teacher username email
Ex: {username: "Tom Hopkins", email: "thopkins@music.com"}
Ex: {username: "Brenda Shafer", email: "bshafer@music.com"}
Ex: {username: "Ted Moon", email: "tmoon@music.com"}

==================================================================================
STUDENT
belongs_to :teacher
has_many :lessons
has_many :resources, through: :lessons
rails g resource Student username email level
Ex: {username: "Jane Burda", email: "jburda@abc.com", level: '1'}
Ex: {username: "Kay Mossa", email: "kmossa@abc.com", level: '2'}
Ex: {username: "Warren Brody", email: "wbrody@abc.com", level: '4'}

==================================================================================
LESSON
belongs_to :teacher
belongs_to :student
has_many :lesson_resources
has_many :resources, through: :lesson_resources

rails g resource Lesson date notes
Ex: { teacher_id: 1, student_id: 1, resources: [1], date: '2017-11-3' }
Ex: { teacher_id: 2, student_id: 2, resources: [1,2,3], date: '2017-11-3' }
Ex: { teacher_id: 3, student_id: 3, resources: [5,6,7,8], date: '2017-11-3' }

==================================================================================
LESSON_RESOURCE
belongs_to :lesson
belongs_to :resource

==================================================================================
RESOURCE
rails g resource Resource title genre level description format location
Ex: pdf, doc, sib, xml, jpg, mp3, mp4
Ex: {name: 'blues in F', genre: 'jazz blues', level: '1', description: 'basic blues exercise', format: 'pdf', location: '#'}
Ex: {name: 'blues in F', genre: 'jazz blues', level: '1', description: 'basic blues audio 1', format: 'mp3', location: '#'}
Ex: {name: '12 keys', genre: 'jazz blues', level: '1', description: 'cycle of 5ths', format: 'pdf', location: '#'}
Ex: {name: 'Autumn Leaves', genre: 'jazz standard', level: '1', description: 'jazz standard', format: 'mp3', location: '#'}
Ex: {name: 'Blue Bossa', genre: 'bossa nova', level: '1', description: 'jazz standard', format: 'youTubeLink', location: '#'}
all physical resources will be located on Cloudinary, except for YouTube links
use Pundit to control dropdown list for genre, level and format

==================================================================================
[]  -plan the teacher experience 
  teacher signs up and logs in
  admin assigns new students to teacher
  home screen navbar: 
  Home | My Account | My Students | Resources
    'my account'
      username, email
    'my students' 
      table:  Name | Level | Last Lesson
        Name: links to: student show page
        LastLesson: links to: lesson show page 
    'resources'
      table:  Title | Genre | Level | Description | Format | Location/Link
      all resources, default sorted by title, Location/Link opens resource in viewer window
      filter buttons for sorting by title, genre, level 
      Teacher has 'read' access to all resources
      Teacher can submit new resource for approval by admin (admin maintains naming conventions and categorization)

==================================================================================
[]  -plan the student experience 
  student signs up and logs in
  admin assigns students to teacher
  home screen navbar: 
  Home | My Account | My Lessons | Resources
    'my account'
      username, email, teacher show page
    'my lessons' 
      table:  Date | LessonLink
        LessonLink: links to: lesson show page 
    'resources'
      table:  Title | Genre | Level | Description | Format | Location/Link
      all assigned resources, default sorted by title, Location/Link opens resource in viewer window
      filter buttons for sorting by title, genre, level 

==================================================================================
[]  -plan the admin experience 
  student signs up and logs in
  admin assigns students to teacher
  home screen navbar:
  Home | My Account | Teachers | Students | Lessons | Resources
    'my account'
      username, email
    'teachers'
      table: Name |_ Students |_Lessons (see Diet-Planner CSV table format for depicting breakdown)

    'lessons'
      table: Date | Teacher | Student | Lesson
        Lesson  links to Lesson show page
        Student links to Student show page
        Teacher links to Teacher show page

    'resources'
      table:  Title | Genre | Level | Description | Format | Location/Link
      all assigned resources, default sorted by title, Location/Link opens resource in viewer window
      filter buttons for sorting by title, genre, level 
      Admin has 'full control' access to all resources
      Admin approves, edits & categorizes resources submitted by Teacher 

==================================================================================
[]  - The LESSON experience
    1: will happen in v1    2: might happen in v1     3: dream
    [1] Student home page is main viewer
    [1] Student or Teacher can select Resource to show or play
    [1] Teacher can assign Research items, docs, links to Student
    [1] Teacher can assign Resource to Student, with lesson notes
    [2] App has a built in metronome
    [2] Lesson is audio recorded and midi recorded both Teacher and Student playing examples
    [2] Student can use the app on laptop, tablet or phone to record daily practice drafts of assigned pieces
    [3] Teacher can draw on the screen to mark up the lesson page, which auto saves
    [3] App has built in drum pattern styles to play along with, using headphones
    [3] App has an AudioOnly mode, where nothing is visual based, only audio
    [3] App has a Visual mode, where notation responds to player, reinforcing notation note/rhythm recognition
    [3] Teacher can quantize record notated and audible playing samples for student during lesson
    [3] App has Sketchup 3D hands, demonstrating instrument technique from player's view perspective

    []  As the teacher adds resources to the student during a lesson, the app tallies the resoures along various measures, such as: 
      technique
      harmony
      rhythm
      licks
      all keys
      notation skills
      melodic memory
      ear training
      genres
      play alongs
      time required
  
    the time required tallies according to calculation of the resource assigned and the students age, current ability and current practice agreement
    Difference between a Resource and a Research:  
      Resource is in the Libary, approved/categorized by Admin
      Research might be a one time recommendation for this particular student, context and time (could also be submitted as a Resource by the Teacher, but not by default)
    All is saved to Student's resource area, available on Student show page
==================================================================================
after: 
-updating the repo including api and client
-creating a branch to test build
-running 'npm run build'

here is what you see: 

[19:25:04] (build-test) client
// ♥ npm run build

> piano-student-client@0.1.0 build /Users/BradSmith/dev/_final/piano-student/client
> node scripts/build.js

Creating an optimized production build...
Compiled successfully.

File sizes after gzip:

  62.87 KB  build/static/js/main.0c4e68b5.js
  445 B     build/static/css/main.28ebad44.css

The project was built assuming it is hosted at the server root.
To override this, specify the homepage in your package.json.
For example, add this to build it for GitHub Pages:

  "homepage" : "http://myname.github.io/myapp",

The build folder is ready to be deployed.
You may serve it with a static server:

  npm install -g serve
  serve -s build
==================================================================================

