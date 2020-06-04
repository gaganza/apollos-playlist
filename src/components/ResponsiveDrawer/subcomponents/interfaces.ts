import { RouteComponentProps } from "react-router-dom";

import { ICurrentProfile } from "../../../common/interfaces";

export interface IProfileProps {}

export interface IStateProps {
  user: ICurrentProfile;
}

export type TProfileProps = IProfileProps & IStateProps & RouteComponentProps;
