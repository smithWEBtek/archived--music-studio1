const API_URL = process.env.REACT_APP_API_URL;

const ResourceService = {
  fetchResources: () => {
    return fetch(`${API_URL}/resources`).then(response => response.json())
  },

  fetchResource: (id) => {
    return fetch(`${API_URL}/resources/${id}`).then(response => response.json())
  },

  createResource(resource) {
    const request = {
      method: 'POST',
      body: JSON.stringify({resource: resource}),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    return fetch(`${API_URL}/resources`, request).then(response => response.json())
  }
}

export default ResourceService;
