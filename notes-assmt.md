Cernan Bernardo [11:54 AM]
meetme.so/reactlearnassessment

[11:54 AM]
1. Get the like feature working for each student with no persistence
[11:54 AM]
2. Get the like feature working with persistence and redux connection...remove local state (different branch) (edited)
[11:56 AM]
3. Study up on js array methods and async js - promises

4. Bring list of Cernan questions, send in Slack before the meeting


likes = []

componentDidMount(){

  populate the likes array with:

  {id: 0}

  one for each student in this.props.students


  the values of cells in the table will be set to: 
  
  this.state.likes

  when you click on 'LIKE'
    the id of the student button you clicked is passed back via the

    likeStudent(id) function which was sent as a prop, linked to the onClick event of the button










}