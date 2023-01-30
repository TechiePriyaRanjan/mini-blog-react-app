import React from 'react';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const IndividualPost = () => {
  const posts = useSelector(state => state.allPosts.posts);
  // console.log("POSTS", posts)

  return (
    <>
      {posts?.map((post) => (
        <div key={post.id} className="my-4 mx-2 max-w-md bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <Link to={`/post/${post.id}`} >
            <div className="md:flex">
              <div className="md:shrink-0">
                <img className="h-24 w-full object-cover md:h-full md:w-36" src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png" alt="Modern building architecture" />
              </div>
              <div className="p-4">
                <Link to={`/user/${post.userId}`} >
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{post.id}</div>
                </Link>
                <p className="block mt-1 text-lg leading-tight font-medium text-black ">{post.title}</p>
                <p className="mt-2 text-slate-500">{post.body}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  )
}

export default IndividualPost;