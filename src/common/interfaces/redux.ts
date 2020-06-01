import { Dispatch, AnyAction, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";

export interface IAction<Data> {
  type: string;
  data: Data;
}

export type TDispatch = (
  dispatch: Dispatch<any>
) => Promise<ThunkAction<any, any, any, AnyAction>>;

export type TThunkAction = ActionCreator<
  ThunkAction<Promise<any>, any, null, AnyAction>
>;
