import * as React from 'react';

import { TNotFoundProps } from './interfaces';

class NotFound extends React.PureComponent<TNotFoundProps> {
  public render = (): JSX.Element => {
    return <div>Not Found</div>;
  };
}

export default NotFound;
