import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CreatePlaylist from './CreatePlaylist';
import { IRootState } from 'common/interfaces';
import { IStateProps } from './interfaces';

const mapStateToProps = (state: IRootState): IStateProps => {
  return {
    spotifyWebApi: state.spotifyWebApi,
    tracksAttributes: state.tracksAttributes,
  };
};

export default withRouter(connect(mapStateToProps)(CreatePlaylist));
