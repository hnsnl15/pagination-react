export interface IPostState {
  posts?: any[];
  loading: boolean;
}
export interface IPostAction {
  type: string;
  payload: any[];
}
