import * as React from 'react';

import audio, {IChangeCurrentTime} from 'components/player/audio';

export interface IPlayer{
  changeCurentTime: IChangeCurrentTime;
}

const Player = ({

}) => {
  return (<div>11</div>);
}

export default audio(Player);