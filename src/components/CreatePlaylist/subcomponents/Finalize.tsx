import * as React from 'react';
import { History } from 'history';
import SpotifyWebApi from 'spotify-web-api-node';

export interface IFinalizeProps {
  api: SpotifyWebApi;
  history: History;
  results: SpotifyApi.RecommendationsFromSeedsResponse;
}

export interface IFinalizeState {}

class Finalize extends React.Component<IFinalizeProps, IFinalizeState> {
  public render(): JSX.Element {
    return (
      <div>
        {this.props.results.tracks.map((track: SpotifyApi.TrackObjectSimplified) => {
          return (
            <div key={track.id}>
              <p>{track.name}</p>
              <p>{track.artists[0].name}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export { Finalize };
