import camelize from 'camelize';

export const callApi = (url:string, options?:object):any => 
  fetch(url, options)
    .then(
      response => (response.ok ? response.json(): Promise.reject(response.text())),
      error => Promise.reject(error)
    )
    .then(
      (json) => ({ json: camelize(json) }),
      error => ({ error }))
    .catch(error => ({error}));
