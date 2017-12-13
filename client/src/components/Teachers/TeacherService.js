const API_URL = process.env.REACT_APP_API_URL;

const TeacherService = {
  fetchTeachers: () => {
    return fetch(`${API_URL}/teachers`)
      .then(response => response.json())
  },

  fetchTeacher: (id) => {
    return fetch(`${API_URL}/teachers/${id}`)
      .then(response => response.json())
  },

  createTeacher(teacher) {
    const request = {
      method: 'POST',
      body: JSON.stringify({
        teacher: teacher
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    return fetch(`${API_URL}/teachers`, request)
    .then(response => response.json())
  }
}
  
export default TeacherService;
