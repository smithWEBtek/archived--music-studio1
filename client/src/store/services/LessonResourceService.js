const API_URL = process.env.REACT_APP_API_URL || "https://music-studio.herokuapp.com/api"

const LessonResourceService = {
  createLessonResource(lessonResource) {
    const request = {
      method: 'POST',
      body: JSON.stringify({ lessonResource: lessonResource }),
      headers: { 'Content-Type': 'application/json' }
    }
    return fetch(`${API_URL}/lesson_resources`, request)
      .then(response => response.json())
      .catch(error => {
        console.log('[LessonResourceService][createLessonResource] ERROR: ', error)
      })
  },
  fetchLessonResources: () => {
    return fetch(`${API_URL}/lesson_resources`)
      .then(response => response.json())
      .catch(error => {
        console.log('[LessonResourceService][fetchLessonResources] ERROR: ', error)
      })
  },
  updateLessonResource(data) {
    const request = {
      method: 'PATCH',
      body: JSON.stringify({ lessonResource: data }),
      headers: { 'Content-Type': 'application/json' }
    }
    return fetch(`${API_URL}/lesson_resources/${data.id}`, request)
      .then(response => response.json())
      .catch(error => {
        console.log('[LessonResourceService][updateLessonResource] ERROR: ', error)
      })
  },
  deleteLessonResource(id) {
    const request = {
      method: 'DELETE',
      body: JSON.stringify({ id: id }),
      headers: { 'Content-Type': 'application/json' }
    }
    return fetch(`${API_URL}/lesson_resources/${id}`, request)
      .then(response => response.json())
      .catch(error => {
        console.log('[LessonResourceService][deleteLessonResource] ERROR: ', error)
      })
  }
}

export default LessonResourceService;
