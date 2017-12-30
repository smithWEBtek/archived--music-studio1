const API_URL = process.env.REACT_APP_API_URL;

const LessonService = {
  fetchLessons: () => {
    return fetch(`${API_URL}/lessons`).then(response => response.json())
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

  deleteLesson(id) {
    fetch(`${API_URL}/lessons/${id}`, { method: 'delete' });
  }
}

export default LessonService;
