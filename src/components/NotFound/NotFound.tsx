import * as React from "react";

export interface INotFoundProps {}

export default class NotFound extends React.PureComponent<INotFoundProps> {
  public render(): JSX.Element {
    return <div>Not Found</div>;
  }
}
