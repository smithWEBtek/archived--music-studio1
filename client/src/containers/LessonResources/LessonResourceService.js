// const API_URL = process.env.REACT_APP_API_URL;
const API_URL = "https://music-studio.herokuapp.com/api/"

const LessonResourceService = {
  fetchLessonResources: () => {
    return fetch(`${API_URL}/lesson_resources`)
      .then(response => response.json())
  },
  fetchLessonResource: (id) => {
    return fetch(`${API_URL}/lesson_resources/${id}`)
      .then(response => response.json())
  },
  createLessonResource(data) {
    const request = {
      method: 'POST',
      body: JSON.stringify({ lesson_resource: data }),
      headers: { 'Content-Type': 'application/json' }
    }
    return fetch(`${API_URL}/lesson_resources`, request)
      .then(response => response.json())
  },
  updateLessonResource(id, data) {
    const request = {
      method: 'PATCH',
      body: JSON.stringify({ lesson_resource: data }),
      headers: { 'Content-Type': 'application/json' }
    }
    return fetch(`${API_URL}/lesson_resources/${id}`, request, { method: 'PATCH' })
      .then(response => {
        console.log('[LessonResourceService][updateLessonResource]response:', response.json())
      })
  },
  deleteLessonResource(id) {
    const request = {
      method: 'DELETE',
      body: JSON.stringify({ id: id }),
      headers: { 'Content-Type': 'application/json' }
    }
    return fetch(`${API_URL}/lesson_resources/${id}`, request, { method: 'DELETE' })
      .then(response => {
        console.log('[LessonResourceService][deleteLessonResource]response:', response)
      })
  }
}

export default LessonResourceService;
