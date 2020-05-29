import * as React from "react";

export interface IHomePageProps {}

export default class HomePage extends React.PureComponent<IHomePageProps> {
  public render(): JSX.Element {
    return <div>Hello World</div>;
  }
}
