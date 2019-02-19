import {normalize} from 'normalizr';
import {songSchema} from 'constants/Schemas';
import {callApi} from 'utils/ApiUtils';
import * as constants from 'constants/ActionTypes';
// import * as types from 'types/index';
import { getPlaylists } from 'selectors/CommonSelectors';

export interface IFetchSongsRequest{
  type: constants.FETCH_SONGS_REQUEST;
  playlist: string; // lots of streams
}

export interface IFetchSongsSuccess {
  type: constants.FETCH_SONGS_SUCCESS;
  entities: any;
  futureUrl?: string,
  items: any[];
  playlist: any;
  nextUrl?: string;
}

export type playlistAction = IFetchSongsRequest | IFetchSongsSuccess;


export const fetchSongsRequest = (playlist:string):IFetchSongsRequest => ({
  type: constants.FETCH_SONGS_REQUEST,
  playlist,
})  

export const fetchSongsSuccess = (playlist: string, items:any[], entities:any, nextUrl:string, futureUrl:string ):IFetchSongsSuccess => ({
  type: constants.FETCH_SONGS_SUCCESS,
  entities,
  futureUrl,
  items,
  playlist,
  nextUrl,
})

export const fetchSongs = (playlist:string, url:string) => async (dispatch:any) => {
  dispatch(fetchSongsRequest(playlist));
  const {json} = await callApi(url);
  const collection = json.collection || json;
  const songs =collection
    .map((song:any) => song.origin || song )
    .filter((song:any) => song.kind === 'track' && song.streamable);
  const nextUrl = json.nextUrl || null;
  const futureUrl = json.futureUrl || null;

  const {result, entities} = normalize(songs, [songSchema]);
  dispatch(fetchSongsSuccess(playlist, result, entities, nextUrl, futureUrl));

}

export const fetchSongsIfNeeded = (playlist:string, playlistUrl:string) => (dispatch:any, getState:any) => {
  const state = getState();
  const playlists = getPlaylists(state);
  const playlistExisits = playlist in playlists;
  const playlistIsFetching = playlistExisits ? playlists[playlist].isFetching : false;
  const playlistHasItems = playlistExisits ? Boolean(playlists[playlist].items.length) : false;

  // url 先有， 存不存在 playlist， 不存在成立，或者 存在，它的items为空而且 没用在fetching；
  const shouldFetchSongs = playlistUrl && (!playlistExisits || (!playlistHasItems && !playlistIsFetching));
  if(shouldFetchSongs){
    dispatch(fetchSongs(playlist, playlistUrl));
  }
}