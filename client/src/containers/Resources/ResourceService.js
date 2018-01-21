// const API_URL = process.env.REACT_APP_API_URL;
const API_URL = "https://music-studio.herokuapp.com/api/"

const ResourceService = {
  fetchResources: () => {
    return fetch(`${API_URL}/resources`)
      .then(response => response.json())
  },
  fetchResource: (id) => {
    return fetch(`${API_URL}/resources/${id}`)
      .then(response => response.json())
  },
  createResource(resource) {
    const request = {
      method: 'POST',
      body: JSON.stringify({ resource: resource }),
      headers: { 'Content-Type': 'application/json' }
    }
    return fetch(`${API_URL}/resources`, request)
      .then(response => response.json())
  },
  updateResource(id, data) {
    const request = {
      method: 'PATCH',
      body: JSON.stringify({ resource: data }),
      headers: { 'Content-Type': 'application/json' }
    }
    return fetch(`${API_URL}/resources/${id}`, request, { method: 'PATCH' })
      .then(response => {
        console.log('[ResourceService][updateResource]response:', response.json())
      })
  },
  deleteResource(id) {
    const request = {
      method: 'DELETE',
      body: JSON.stringify({ id: id }),
      headers: { 'Content-Type': 'application/json' }
    }
    return fetch(`${API_URL}/resources/${id}`, request, { method: 'DELETE' })
      .then(response => {
        console.log('[ResourceService][deleteResource]response:', response)
      })
  }
}

export default ResourceService;
