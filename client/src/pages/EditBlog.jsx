import React, { useEffect, useState } from "react";
import CreateBlog from "./createBlog";
import { useParams } from "react-router";
import axios from "axios";
import Loading from "../components/Loading";

export default function EditBlog() {
  const { id } = useParams();
  const [EditedBlog, setEditedBlog] = useState();
  const [loading, setLoading] = useState(false);
  const GetTheEditedBlog = async () => {
    try {
      await axios
        .get(`${import.meta.env.VITE_SERVER_URL}/blog/getBlogById/${id}`, {
          withCredentials: true,
        })
        .then((res) => {
          setEditedBlog(res.data);
        })
        .finally(() => setLoading(true));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    GetTheEditedBlog();
  }, []);
  return (
    <div>
      {!loading ? (
        <Loading></Loading>
      ) : (
        <CreateBlog EditedBlog={EditedBlog}></CreateBlog>
      )}
    </div>
  );
}
