const API_URL = process.env.REACT_APP_API_URL;

const StudentService = {
  fetchStudents: () => {
    return fetch(`${API_URL}/students`)
      .then(response => response.json())
  },

  createStudent(student) {
    const request = {
      method: 'POST',
      body: JSON.stringify({
        student: student
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    return fetch(`${API_URL}/students`, request)
    .then(response => response.json())
  }
}
  
export default StudentService;
