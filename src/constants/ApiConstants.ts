const API_HOSTNAME = '//api.soundcloud.com';
export const CLIENT_ID = 'a281614d7f34dc30b665dfcaa3ed7505';

const constructUrl = (url:string) => `${API_HOSTNAME}${url}${url.indexOf('?') === -1 ? '?': '&'}client_id=${CLIENT_ID}`;

export const SONGS_URL = constructUrl('/tracks?linked_partitioning=1&limit=50&offset=0');