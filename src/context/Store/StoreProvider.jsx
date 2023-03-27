import axios from "axios";
import React, { useReducer } from "react";
import { StoreContext } from "./StoreContext";

const API_URL = "http://localhost:8000";

const initialState = {
  posts: [],
};

// const action = {
//     type: 'GET',
//     payload: []
// }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_POSTS": {
      return {
        ...state,
        posts: action.payload,
      };
    }
    case "CREATE_POST": {
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    }

    case 'DELETE_POST': {
      return {
        ...state,
        posts: state.posts.filter(post => post.id != action.payload)
      }
    }
  }
};

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getPosts = async (search = '') => {
    const { data } = await axios(`${API_URL}/posts?q=${search}`);

    const getPostsAction = {
      type: "GET_POSTS",
      payload: data,
    };

    dispatch(getPostsAction);
  };

  const createPost = async (newPost) => {
    const { data } = await axios.post(`${API_URL}/posts`, newPost);

    const createPostAction = {
      type: "CREATE_POST",
      payload: data,
    };

    dispatch(createPostAction);
  };

  const deletePost = async (id) => {
    const { data } = await axios.delete(`${API_URL}/posts/${id}`);

    const deleteAction = {
      type: 'DELETE_POST',
      payload: id
    }

    dispatch(deleteAction)
  }

  const defaultValue = {
    getPosts,
    createPost,
    deletePost,
    posts: state.posts,
  };

  return (
    <StoreContext.Provider value={defaultValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
