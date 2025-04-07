import { useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

function Blog_Details() {
  const params = useParams();
  const getBlogDetails = async () => {
      try {
        await axios
          .get(`http://127.0.0.1:3000/blog/getBlogById/${params.id}`, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
          });
      } catch (error) {
        console.log("Error In Getting Blog Details: ", error);
      }
  }
  useEffect(() => {
    getBlogDetails();

  }, []);
  return <div>Blog_Details of:{params.id}</div>;
}

export default Blog_Details;
