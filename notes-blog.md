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


All of the requirements are met and then some. 
I took this project seriously and have done the best I can given my current skills. 

Concept for the site
  Piano studio crm and teaching tool



==================================================================================
Building Rails API

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

User Experience
  Ability to organize, view, create and assign multiple resources to students via lessons, from a central repository of Resources.
  Resources stored online based on Resource type
    Audio: Soundcloud
    PDF: Cloudinary
    Image: Cloudinary
    Video: YouTube
  Easy access to multiple resources while teaching.
  Add / remove resources to lessons

  Students have real-time list of all assigned resources
  Teachers see all of their Students, Lessons and all available Resources
  Lesson can have multiple Resources, easy add / remove 

  All data is inter-related through Active Record, surfaed by Rails API

  Add forms, are using Modals to enhance User Experience

==================================================================================
Building basic React app

React Container / Component folder structure for the main 4 data groups is consistently named and organized.
Each of the 4 groups has unique requirements for data and inter-relations with the other groups. 
Naming conventions for folders and javascript files follow Rails restful perspective.

User Interface components are in a separate folder for reuse by any of the main component groups.

Styling is minimal, but clean through use of Reactstrap
Beyond Reactstrap there are several customized css files, each paired and named the same as the files they serve.
There are some global css styles in App.css, imported as "appstyles". 
The layout is responsive, although the tables of the main 4 data groups are not stable in terms of  width, which drives me nuts.

==================================================================================
Redux:
All 4 major data groups have idential Redux actions, reducers and naming conventions.
As a result, it was easy to add a 5th major data group "LessonResources" which allowed the convenient feature of adding and removing Resources to a given Lesson. 

Thunk (middleware) is implemented to allow each of the 4 main data groups to have Start, Success, Fail phases for all CRUD operations with the API. 

==================================================================================
Rails API serves all data requirements for Index, Show, Create, Update, Destroy and all possible groupings availabe through ActiveRecord associations. 
Serializers are used extensively to serve API data without any need for manipulation on the client side. 
In fact, one could surf all of the various data groups throught the JSON API available in the browser. 

==================================================================================
The concept of the site is to bring as many varied resources to bear on the student as possible, in all formats.
PDF files showing musical notation and ideas are easily accessible throughe ResourceViewer component which serves up stateless function components based on Audio, Video, PDF formats in the Resources.

Data:
  A custom rake file was used throughout development to allow convenient data replenishing.
  the command is rake db:dcms
  Drop, Create, Migrate, Seed / Start
  This allows for confidence in data integrity while in the throes of development and debugging.
  The seed data is realistic and provides another layer of confidence during development. 

Cloudinary: https://cloudinary.com
  Cloudinary is an excellent platform for storage and retrieval of digital artifacts, delivered to the site quickly like a CDN.
  Their API provides extensive manipulation of files for integration into the site, although for this project it was only used as means of storage and quick retrieval through custom URL's which currently hardcode in the seeds data file. 
  Future versions of this app would allow automatic storage, manipulation and retreival of digital files, as an added convenience for Teachers and Students.

Mockaroo:  https://www.mockaroo.com
  Mockaroo is a site where you can spin up dummy data quickly in formats that make sense with your application, and then available for quick download in many formats. 

Seeds.rb:
  The seeds file for this project is based on a structure in one of the Learn curriculum labs, which I expanded upon to suit the needs for this project. My strong belief is that without seed data, and a solid data model, it is akin to building on sand versus a strong data foundation. 

  Care was also taken in the choosing of names for data, folders and files, adhering to RESTful conventions as much as possible. Data names also are as organic as possible reflecting their day to day usage.

==================================================================================
Future: 
  I would like to explore the use of MIDI information in a 'play along' format for piano students. After nearly 2 years of doing hundreds of programming labs, where tests light up GREEN or RED, I believe it can be done in a similar fashion for piano students. 
  The goal would be to capture the digital markers for a song, to use as a test measure. 
  The student would then play their MIDI based keyboard along with the recorded sample track, while javasript functionality compares the student performance against the recorded sample (of course, alowing for human error, enough to encourage accuracy without ruining the student's spirit). 

==================================================================================
Observations on the Flatiron journey: 

  I believe that much of software programming comes down to conceptualizing what needs to happen and then finding the language and syntax to bring it into physical reality. Debugging a difficult error always follows a pattern of mystery, clues, thought, experimentation and solution. 

  People tend to bring their own personalities into whatever they do. Programming is no different. One has to confront their own emotions, personal inertia and adapt to the requirements of learning new languages. I have found that I work best coding along with superior programmers, followed by my own experimentation and brute force repetition of concepts until I have internalized them. My reading of material has improved greatly as a result of the Flatiron curriculum, because one is forced to think through problems, research / trial & error to solve labs. 

  My own history as a craftsperson pushes me to build projects and refine code instinctively. There is such a satisfaction in seeing code work in the browser especially when it does what you expected it to do!
  I've learned to be more patient with things I don't know, errors I don't understand and more patient with myself when I go completely blank momentarily forgetting basic things. 

  The daily/weekly onslaught of constantly learning new languaes, syntax, configuration and idiosyncracies of every language gradually builds an internal mental toughness to absorb new things through all senses, not just the eyes and brain.

  I plan to use my skills to improve my own life, my family's life and the lives of my clients and employers. 













 
