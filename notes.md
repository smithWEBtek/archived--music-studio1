
### This is a summary of the refactoring I have done since our last meeting.
Then I have 2 questions about how I am re-fetching the Redux state, using routing and componentDidMount as my means for rerendering updated lists after an individual object update. 


### Refactoring: 
1.  Incorporated the 'like' feature using a stateless component 'StudentRow', AND database / API persistence
2.  Refactored the 'store' actions, reducers and service files for Students, Teachers, Resources and Lessons as follows:
    - removed redundant code from actions, an action is now declared and then used by reference,
    or it is declared as it it being used ( see studentActions, fetchStudents for an example )
    - refactored Reducers to update state for an object individually
    - refactored Reducers to use Object.assign() instead of utility function, for better readability
    - added .catch error handling to all actions for (students, teachers, resources, lessons)
3.  Added drop down functionality for all create and edit modals, where Teacher or Student select is used
4.  Added TeacherRow as a stateless component (child component to TeachersList), like StudentRow and StudentList
5.  Removed the show and hide of main lists which depended on local state
    - It was causing issues with components appearing as expected
    - Lists now render from the Main Nav buttons
    - Individual Student, Teacher, Resource or Lesson now render from links within the main lists


### Question: Am I using best practice for fetching data from Redux state?
For each of my main data <Objects> ( ie....Students, Teachers, Resources, Lessons), my current pattern is to call fetch<Objects>() (in componentDidMount), (in each file applicable, Students.js, Teachers.js, Resources.js, Lessons.js). 
Redux state then provides data for each <Objects>List table, and then their child components, if any.

I experimented with only fetching Redux state in a higher component like App.js, and I found that I still needed to fetch current state for my objects in their 'index components' (ie. Students.js, Teachers.js, Resources.js, Lessons.js), otherwise my components would not render with data.

Is there anything wrong with this setup, is there some reason against fetching state for these objects in componentDidMount for each one respectively, instead of doing it all in App.js ?


### Question: Am I using best practice for routing after updating?
I am using 'history.push(), and successfully passing in history to these actions in my actions files.
In each case, I can only get back to the page I want (refreshed index list page for each resource), by pushing 2 routes, (for example, see StudentActions.js line 71) like this: 

After an update to a Student, I want to be back on the StudentsList page (showing the updated list of all students, including the update I just made), 

and the only way I found to do this was to navigate away from that page and then navigate back to it. 
(This works because each of the data groups (Students, Teachers, Resources, Lessons) have 'componentDidMount' where I am fetching their current state.)

```javascript
    export const updateStudent = (data, history) => {
  return dispatch => {
    dispatch(updateStudentStart())
    StudentService.updateStudent(data)
      .then(response => {
        dispatch({ type: actionTypes.UPDATE_STUDENT, updatedStudentData: response })
        history.push(`/`) // navigating 'away' from current page...
        history.push(`/students`)   // having 'navigated away', this causes componentDidMount to re-fetch Redux state
        dispatch(updateStudentSuccess())
      })
      .catch(error => {
        dispatch(updateStudentFail(error))
      })
  }
  ```


#### Is this an anti-pattern to be navigating away from /students, then back to it, just to force a re-fetching of Redux's state.students or is there another way that I am not aware of ? 

#### Since I am NOT re-fetching using the API, but only re-fetching updated Redux state, is there any harm in this approach?



Hey Logan! Chuffed to hear you’re trying this out with react-router on Heroku. It will take a little bit more finessing.

You’ll need add a fallback_index_html to your ApplicationController:

class ApplicationController < ActionController::Base
  def fallback_index_html
    render :file => 'public/index.html'
  end
end
And at the bottom of your routes.rb:

get '*path', to: "application#fallback_index_html", constraints: ->(request) do
  !request.xhr? && request.format.html?
end
That way Rails will pass anything it doesn’t match to your index.html so that react-router can take over.

Hope that helps, and thanks for taking the time to check out the walkthrough.
