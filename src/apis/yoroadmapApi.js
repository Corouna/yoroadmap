
const apiHostUrl = 'http://localhost:8080';

const routes = {
  signInUrl: () => `${apiHostUrl}/api/login_check`,
  listRoadmapUrl: () => `${apiHostUrl}/api/roadmaps`,
  createRoadmapUrl: () => `${apiHostUrl}/api/roadmaps`,
  createEventUrl: eventGroupId => `${apiHostUrl}/api/event-groups/${eventGroupId}/events`,
  listEventUrl: roadmapId => `${apiHostUrl}/api/roadmaps/${roadmapId}/events`,
  listEventGroupUrl: roadmapId => `${apiHostUrl}/api/roadmaps/${roadmapId}/event-groups`
};

const defaultHeaders = () => { 
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
};

const authHeader = jwt => {
  return {
    'Authorization': `Bearer ${jwt}`
  }
};

const yoroadmapApi = {
  _jwt: '',

  get jwt() {
    return this._jwt;
  },

  set jwt(token) {
    this._jwt = token;
  },

  signIn(email, password) {
    return fetch(routes.signInUrl(), {
      method: 'POST',
      headers: { ...defaultHeaders() },
      body: JSON.stringify({ email, password })
    });
  },

  fetchRoadmapList() {
    return fetch(routes.listRoadmapUrl(), {
      method: 'GET',
      headers: { ...defaultHeaders(), ...authHeader(this._jwt) }
    });
  },

  createRoadmap(roadmapName) {
    return fetch(routes.createRoadmapUrl(), {
      method: 'POST',
      headers : { ...defaultHeaders(), ...authHeader(this._jwt) },
      body: JSON.stringify({ name: roadmapName })
    });
  },
  
  createEvent(eventGroupId, eventObj) {
    return fetch(routes.createEventUrl(eventGroupId), {
      method: 'POST',
      headers: { ...defaultHeaders(), ...authHeader(this._jwt) },
      body: JSON.stringify(eventObj)
    })
  },

  fetchEventGroupsList(roadmapId) {
    return fetch(routes.listEventGroupUrl(roadmapId), {
      method: 'GET',
      headers: { ...defaultHeaders(), ...authHeader(this._jwt) }
    });
  }
};

export default yoroadmapApi;