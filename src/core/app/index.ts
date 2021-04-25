import { RouteComponentProps, withRouter } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import App from './App';
import { fetchUser, closeSnackbar, openSnackbar } from 'common/actions';
import { IRootState } from 'common/interfaces';

const mapStateToProps = (state: IRootState) => {
  return {
    spotifyWebApi: state.spotifyWebApi,
    user: state.user,
    snackbar: state.snackbar,
  }
}

const mapDispatchToProps = {
  fetchUser,
  openSnackbar,
  closeSnackbar
}

const connector = connect(mapStateToProps, mapDispatchToProps);

export type TAppProps = ConnectedProps<typeof connector> & RouteComponentProps;

export default connector(withRouter(App));
