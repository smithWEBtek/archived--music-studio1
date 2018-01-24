// const API_URL = process.env.REACT_APP_API_URL
const API_URL = process.env.HEROKU_APP_API_URL

const StudentService = {
  fetchStudents: () => {
    return fetch(`${API_URL}/students`)
      .then(response => response.json())
  },
  fetchStudent: (id) => {
    return fetch(`${API_URL}/students/${id}`)
      .then(response => response.json())
  },
  createStudent(student) {
    const request = {
      method: 'POST',
      body: JSON.stringify({ student: student }),
      headers: { 'Content-Type': 'application/json' }
    }
    return fetch(`${API_URL}/students`, request)
      .then(response => response.json())
  },
  updateStudent(id, data) {
    const request = {
      method: 'PATCH',
      body: JSON.stringify({ student: data }),
      headers: { 'Content-Type': 'application/json' }
    }
    return fetch(`${API_URL}/students/${id}`, request, { method: 'PATCH' })
      .then(response => {
        console.log('[StudentService][updateStudent]response:', response.json())
      })
  },
  deleteStudent(id) {
    const request = {
      method: 'DELETE',
      body: JSON.stringify({ id: id }),
      headers: { 'Content-Type': 'application/json' }
    }
    return fetch(`${API_URL}/students/${id}`, request, { method: 'DELETE' })
      .then(response => {
        console.log('[StudentService][deleteStudent]response:', response)
      })
  }
}

export default StudentService;
