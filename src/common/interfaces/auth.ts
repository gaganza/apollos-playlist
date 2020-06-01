export interface IAuthorizationResponse {
  accessToken: string;
  expiresIn: string;
  tokenType: string;
}

export interface IAuthorizationErrorResponse {
  name: string;
  message: string;
}
