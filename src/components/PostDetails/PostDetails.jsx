import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedPost, userDetails } from "../../redux/actions";
import store from "../../redux/store";

const PostDetails = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const post = useSelector(state => state.selectedPost.selectedPost)
  const { title, id, body } = post;

  const fetchPostDetails = async () => {
    const response = await axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .catch((err) => console.log("Error", err));
    dispatch(selectedPost(response.data));
    // console.log("val", response.data)
    // console.log("store", store.getState());
  };
  // const fetchCommentsByPost = async () => {
  //   const response = await axios
  //     .get(`https://jsonplaceholder.typicode.com/comments/${postId}`)
  //     .catch((err) => console.log("Error", err));
  //   dispatch(selectedPost(response.data));
  //   // console.log("val", response.data)
  //   // console.log("store", store.getState());
  // };
  useEffect(() => {
    fetchPostDetails();
    // fetchCommentsByPost();
  }, []);
  return (
    <>
      <div className="mx-2 py-8">
        <Link to={'/'} > Back to all Posts </Link>
      </div>

      <div className="my-8 py-8 px-8 max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">
              {id}          </p>
            <p className="text-slate-700 font-medium">
              {title}
            </p>
            <p className="text-slate-500 font-medium">
              {body}
            </p>
          </div>
          <div className="space-y-0.5">
            <h2 className="text-lg text-black font-semibold">Comments</h2>
            <p className="text-slate-700 font-medium">
              {title}
            </p>
            <p className="text-slate-500 font-medium">
              {body}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetails;
