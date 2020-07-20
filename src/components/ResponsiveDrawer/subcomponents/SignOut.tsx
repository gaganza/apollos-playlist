import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Button, ThemeProvider, Typography } from '@material-ui/core';
import cookie from 'react-cookies';
import SpotifyWebApi from 'spotify-web-api-node';

import { setGlobalSpotifyClient } from 'common/actions';
import { IAction, IRootState } from 'common/interfaces';

import { buttonTheme } from 'common/themes';

export interface ISignOutProps {}

export interface IDispatchProps {
  setGlobalSpotifyClient: (token: string) => IAction<string>;
}

export interface IStateProps {
  spotifyWebApi: SpotifyWebApi;
}

export type TSignOutProps = ISignOutProps & IStateProps & IDispatchProps & RouteComponentProps;

class SignOut extends React.PureComponent<TSignOutProps> {
  public onClickHandler = (_: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    let { setGlobalSpotifyClient, history } = this.props;
    cookie.remove('spotify-bearer', { path: '/' });

    setGlobalSpotifyClient(cookie.load('spotify-bearer'));
    history.push('/');
  };

  public render(): JSX.Element {
    return (
      <div>
        <ThemeProvider theme={buttonTheme}>
          <Button onClick={this.onClickHandler}>
            <Typography style={{ color: 'white' }}>Sign out</Typography>
          </Button>
        </ThemeProvider>
      </div>
    );
  }
}
const mapStateToProps = (state: IRootState): IStateProps => {
  return {
    spotifyWebApi: state.spotifyWebApi,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<IAction<string>>): IDispatchProps => {
  return {
    setGlobalSpotifyClient: (token: string) => dispatch(setGlobalSpotifyClient(token)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignOut));
