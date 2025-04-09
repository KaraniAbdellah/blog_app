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
        .get(`http://127.0.0.1:3000/blog/getBlogById/${id}`)
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
