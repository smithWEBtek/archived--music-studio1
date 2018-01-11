const API_URL = process.env.REACT_APP_API_URL;

const TeacherService = {
  fetchTeachers: () => {
    return fetch(`${API_URL}/teachers`)
      .then(response => response.json())
  },

  // fetchTeacher: (id) => {
  //   return fetch(`${API_URL}/teachers/${id}`)
  //     .then(response => response.json())
  // },
  // not used currently; getting invidual teacher from local state after //loading 'onfetchTeachers()'

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
  },

  updateTeacher(id, data) {
    const request = {
      method: 'PATCH',
      body: JSON.stringify({ teacher: data }),
      headers: { 'Content-Type': 'application/json' }
    }
    return fetch(`${API_URL}/teachers/${id}`, request, { method: 'PATCH' })
      .then(response => {
        console.log('[TeacherService][updateTeacher]response:', response)
      })
  },

  deleteTeacher(id) {
    const request = {
      method: 'DELETE',
      body: JSON.stringify({ id: id }),
      headers: { 'Content-Type': 'application/json' }
    }
    return fetch(`${API_URL}/teachers/${id}`, request, { method: 'DELETE' })
      .then(response => {
        console.log('[TeacherService][deleteTeacher]response:', response)
      })
  }
}

export default TeacherService;
