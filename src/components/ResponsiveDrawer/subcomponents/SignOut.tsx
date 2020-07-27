import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Button, ThemeProvider, Typography } from '@material-ui/core';
import SpotifyWebApi from 'spotify-web-api-node';

import { IRootState } from 'common/interfaces';

import { buttonTheme } from 'common/themes';

export interface ISignOutProps {}

export interface IStateProps {
  spotifyWebApi: SpotifyWebApi;
}

export type TSignOutProps = ISignOutProps & IStateProps & RouteComponentProps;

class SignOut extends React.PureComponent<TSignOutProps> {
  public onClickHandler = (_: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    let { spotifyWebApi, history } = this.props;

    spotifyWebApi.resetAccessToken();

    history.push('/');
  };

  public render(): JSX.Element {
    return (
      <div>
        <ThemeProvider theme={buttonTheme}>
          <Button onClick={this.onClickHandler}>
            <Typography style={{ color: 'white', textTransform: 'none' }}>Sign out</Typography>
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

export default withRouter(connect(mapStateToProps)(SignOut));
