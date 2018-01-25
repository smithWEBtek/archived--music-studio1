## Music Studio app

Brad Smith 

brad@smithwebtek.com

www.smithWEBtek.com

### The application was built with Rails 5.0 in API mode.

### The React app at app/client was created with [**create-react-app**](https://github.com/facebook/create-react-app)

You can navigate to the /client folder to interact with the React app on its own.

To see the React app, navigate to /client folder and run:

$ npm install

$ npm start

### Foreman gem
The gem 'foreman' was used to implement the React client app within the same project, using [this blog post](https://www.fullstackreact.com/articles/how-to-get-create-react-app-to-work-with-your-rails-api/) as a guide. 


### Postgresql is the database required
You need Postgresql installed and running on your machine for this work.


## to START
The project loads all in one repo, with the front-end client using React/Redux in the /app/client folder. To start the app:

1. Fork and Clone this repo

2. cd into piano-student/app/client directory

3. run:$   npm install

4. cd into piano-student-api  (root) directory

5. run:$   bundle install     (installs all the gems listed in the gemfile)

6. run:$   rake db:setup      (creates the Postgresql database)

                              (note, you must have Postgres running, or this won't work)   

7. run:$   rake db:dcms        (this will drop, create, migrate, seed database and start the app)

#### Next, to start the Rails API && the client React app together:

run:$  rake start:start




### Troubleshooting 
NOTE there are 4 addresses(with ports), currently specified in:

     app/config/initializers/cors

```ruby
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'localhost:3000', '127.0.0.1:3000', 'localhost:5000', '127.0.0.1:5000' 
  
    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
```

Play around with these if you need to troubleshoot CORS errors, where the Rails API thinks you are an enemy combatant.

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

This API_URL is how the app talks to your API, whether local or on Heroku.

Play around with these too, if you are troubleshooting issues with accessing data. 

Verify that API is serving data on 127.0.0.1:3001

If not, also try localhost:3001 if you don't see JSON data almost immediately. 

NOTE. the Rails  app/config/routes.rb file is configured to default home to  /api/students

So, you will see the students json data by default at http://127.0.0.1:3001/

If Rails seems to be running ok, because you followed the steps above to create, migrate, seed the database, you should see data. 





## SEED DATA and related RAKE tasks
There is a seeds.rb file in app/db/seeds.rb with sample data.
There are 3 rake tasks that incorporate this seed data:

1.  rake db:backup
    creates a "time stamp" named: backup<time as number>.rb
    located in /app/db/data

2.  rake db:dcms
    this will: D DROP database, C CREATE database, M run MIGRATIONS, S load SEED data

NOTE: This assumes you have a Heroku app created. 

To deploy this project to your own Heroku account you must: 

1. Edit this rake task with the name of your Heroku app:

   rake db:hdcms
    this will: H Heroku (pg reset), D DROP database, C CREATE database, M run MIGRATIONS, S load SEED data

2. Edit the API_URL variable above with your Heroku app name ( mine is 'music-studio' so replace that with your Heroku app name )

3. I would first get your Heroku app created, alive and work, following their excellent documentation, for deploying a Rails app. 

  I would first begin with getting this app running locally of course. 

  You also want to connect your github repo to the Heroku app you created, (do this on Heroku dashboard, click 'deployment'), and there you can allow automatic deploys, whenever you push to your repo on Github, it will then update Heroku.  ( [but really read their Rails deployment stuff first, this is out of scope for this README.](https://devcenter.heroku.com/articles/getting-started-with-rails4) )

  Probably it would be best to first deploy some vanilla Rails apps to Heroku so you get the feel of it. 

  Rails locally deployed gives nice errors, but on Heroku things are a little hidden, unless you get in the habit of using command line to open Rails console, or a bash prompt.  

  heroku run rails c --app <your-app-name-if-you-have-more-than-one-app-deployed> 

  heroku run bash --app <your-app-name-if-you-have-more-than-one-app-deployed> 
  
  [heroku rake commands](https://devcenter.heroku.com/articles/rake)



## API and interacting with the Rails app 'back-end'
The backend data (in JSON format) (assuming port 3001) can be seen at :

       127.0.0.1:3001/api/students

       127.0.0.1:3001/api/teachers

       127.0.0.1:3001/api/resources

       127.0.0.1:3001/api/lessons

       127.0.0.1:3001/api/lesson_resources
	

### NOTES: 

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