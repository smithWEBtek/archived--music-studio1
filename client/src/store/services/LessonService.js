const API_URL = process.env.REACT_APP_API_URL || "https://music-studio.herokuapp.com/api"

const LessonService = {
  fetchLessons: () => {
    return fetch(`${API_URL}/lessons`)
      .then(response => response.json())
  },
  fetchLesson: (id) => {
    return fetch(`${API_URL}/lessons/${id}`)
      .then(response => response.json())
  },
  createLesson(lesson) {
    const request = {
      method: 'POST',
      body: JSON.stringify({ lesson: lesson }),
      headers: { 'Content-Type': 'application/json' }
    }
    return fetch(`${API_URL}/lessons`, request)
      .then(response => response.json())
  },
  updateLesson(lesson) {
    const request = {
      method: 'PATCH',
      body: JSON.stringify({ lesson: lesson }),
      headers: { 'Content-Type': 'application/json' }
    }
    return fetch(`${API_URL}/lessons/${lesson.id}`, request)
      .then(response => response.json())
  },
  deleteLesson(id) {
    const request = {
      method: 'DELETE',
      body: JSON.stringify({ id: id }),
      headers: { 'Content-Type': 'application/json' }
    }
    return fetch(`${API_URL}/lessons/${id}`, request)
      .then(response => response.json())
  }
}

export default LessonService;
