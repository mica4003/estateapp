import { defer } from "react-router-dom"
import apiRequest from "../lib/apiRequest.js"

export const singlePageLoader = async ({request, params}) =>{
  const res = await apiRequest.get(`/posts/${params.id}`)
  return res.data
}

export const listPageLoader = async ({ request, params }) => {
  const query = request.url.split("?")[1];
  const postPromise = await apiRequest.get(`/posts?${query}`);
  return defer({
    postResponse: postPromise,
  });
};

export const profilePageLoader = async () => {
  const postPromise = await apiRequest.get("/users/profilePosts");
  const chatPromise = await apiRequest.get("/chats")
  return defer({
    postResponse: postPromise,
    chatResponse: chatPromise
  });
};