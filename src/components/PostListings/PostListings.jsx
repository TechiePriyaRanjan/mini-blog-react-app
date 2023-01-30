import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import IndividualPost from "../IndividualPost";
import { setPosts, userDetails } from '../../redux/actions'
import store from "../../redux/store";

const PostListings = () => {
  const posts = useSelector(state => state.allPosts.posts);
  const [userId, ...remainingItems] = posts
  const dispatch = useDispatch();

  const fetchPosts = async () => {
    const response = await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .catch((err) => console.log("Error", err));
    dispatch(setPosts(response.data))
  };

  const fetchUserDetails = async () => {
    const response = await axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .catch((err) => console.log("Error", err));
    dispatch(userDetails(response.data));
    console.log(store.getState())
    console.log("remainingItems", remainingItems)
  };

  useEffect(() => {
    fetchPosts();
    fetchUserDetails();
    // console.log("Posts", posts)
  }, [])

  return (
    <main className="grid grid-cols-3 gap-2">
      <IndividualPost />
    </main>
  );
};

export default PostListings;
