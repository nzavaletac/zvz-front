import axios from "axios";
import React, { useEffect, useState } from "react";
import { BlogPage } from "../components/blog-page/BlogPage";
import { URL_BACKEND } from "../environments/environments";

export const Blog = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      baseURL: `${URL_BACKEND}`,
      url: "/post",
    }).then(({ data }) => setPost(data.posts));
  }, []);

  return (
    <>
      <BlogPage post={post} />
    </>
  );
};
