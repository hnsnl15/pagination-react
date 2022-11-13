import React, { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { IPostAction, IPostState } from "../types/post.type";

const PostContext = createContext<IPostState | undefined>(undefined);

export default function PostProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const initState = {
    posts: [],
    loading: true,
  };
  const reducer = (state: IPostState, action: IPostAction) => {
    switch (action.type) {
      case "fetched":
        return {
          posts: [...action.payload],
          loading: false,
        };
      default:
        throw Error("Action not defined.");
    }
  };
  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      dispatch({ type: "fetched", payload: res.data });
    };

    fetchPosts();
  }, []);

  return <PostContext.Provider value={state}>{children}</PostContext.Provider>;
}

export const usePostCtx = () => useContext(PostContext);
