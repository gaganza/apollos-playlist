import { Dispatch, AnyAction, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";

export interface IAction<Data> {
  type: string;
  data: Data;
}
