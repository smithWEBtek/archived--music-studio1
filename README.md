## README The final version of this readme will be available by Wednesday, Jan 24 10:00PM EST.

Brad Smith 

brad@smithwebtek.com

www.smithWEBtek.com

The application was built with Rails 5.0 in API mode.

The React app at app/client was created with [**create-react-app**](https://github.com/facebook/create-react-app)

The project loads all in one repo, with the front-end client using React/Redux in the /app/client folder.

You can navigate to the /client folder to interact with the React app on its own.

To see the React app, navigate to /client folder and run:

$ npm install

$ npm start


The gem 'foreman' was used to implement the React client app within the same project, using [this blog post](https://www.fullstackreact.com/articles/how-to-get-create-react-app-to-work-with-your-rails-api/) as a guide. 

There are 2 'procfile's at the root of the Rails app, where you can control how the app starts on Heroku, or how it starts locally, for development. 

Also, within the app/client/src/store/services folder, there are 5 files that are the point of interaction between the React app and the API, whether on Heroku or local.

```bash
    └── services
        ├── LessonResourceService.js
        ├── LessonService.js
        ├── ResourceService.js
        ├── StudentService.js
        └── TeacherService.js
```

At the top of each of these files is the following variable for accessing API data either locally or on Heroku:

```javascript
const API_URL = process.env.REACT_APP_API_URL || "https://music-studio.herokuapp.com/api"
```
 

## SEED DATA and related RAKE tasks
There is a seeds.rb file in app/db/seeds.rb with sample data.
There are 3 rake tasks that incorporate this seed data:

1.  rake db:backup
    creates a "time stamp" named: backup<time as number>.rb
    located in /app/db/data

2.  rake db:dcms
    this will: D DROP database, C CREATE database, M run MIGRATIONS, S load SEED data

3.  rake db:hdcms
    this will: H Heroku (pg reset), D DROP database, C CREATE database, M run MIGRATIONS, S load SEED data

## API and interacting with the Rails app 'back-end'
The backend data (in JSON format) (assuming port 3001) can be seen at :

       127.0.0.1:3001/api/students

       127.0.0.1:3001/api/teachers

       127.0.0.1:3001/api/resources

       127.0.0.1:3001/api/lessons

       127.0.0.1:3001/api/lesson_resources
	

NOTES: 

1.  Deleting a Teacher or Student, does not delete them from the database.
    It updates the record to {active: false}, which appears as green/red active/inactive at:
      /students
      /teachers
2.  You can add a new Resource to the database, without adding a URL
    By default, Resources without URL's will have a greyed out show button 'empty' on the Resources list at:
      /resources
      also when viewing a Lesson, there is a section showing all resources (for adding quickly to a Lesson):
      This resources list is the same React component, simply returning JSX for a passed in list of Resources
3.  All of the 4 major data groups (Students, Teachers, Resources, Lessons) are in one folder for each respectively. It was easier to navigate the varous files, by having them grouped this way. 
The project requires a numer of containers and a number of stateless functional presentational components. 

This image shows the folder structure with green highlighting the "container" components, and yellow highlight the 'stateless' components:

![](http://res.cloudinary.com/smithwebtek/image/upload/v1516839958/music-studio/container-component-list.png)