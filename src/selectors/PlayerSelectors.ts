import { createSelector } from 'reselect';
import { getEntities, getPlayingSongId } from 'selectors/CommonSelectors';
import { denormalize } from 'normalizr';
import { songSchema } from 'constants/Schemas';
import { CLIENT_ID } from 'constants/ApiConstants';

export const getSong = createSelector(
  getEntities,
  getPlayingSongId,
  (entities, playingSongId) => (playingSongId !== null ? denormalize(playingSongId, songSchema, entities): null),
);

export const getAudioUrl = createSelector(
  getSong,
  song => (song ? `${song.streamUrl}?client_id=${CLIENT_ID}` : ''),
);