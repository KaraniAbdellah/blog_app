import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Loading from "../components/Loading";
import { MessageCircle, ThumbsUp } from "lucide-react";

function Blog_Details() {
  const params = useParams();
  const [blogDetails, setBlogDetails] = useState();
  const [IsLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState(["This is Comment"]);

  const getBlogDetails = async () => {
    try {
      await axios
        .get(`http://127.0.0.1:3000/blog/getBlogById/${params.id}`, {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res.data);
          setBlogDetails(res.data);
        })
        .finally(() => setIsLoading(false));
    } catch (error) {
      console.log("Error In Getting Blog Details: ", error);
    }
  };

  const AddLikes = async () => {
    try {
      await axios.post(`http:/127.0.0.1/3000/blog/addLike/${params.id}`).then((res) => {
        console.log(res.data);
      })
    } catch (error) {
      console.log(error);
    }
  }
  const AddComments = async () => {
    try {
      await axios.post(`http:/127.0.0.1/3000/blog/addComment/${params.id}`).then((res) => {
        console.log(res.data);
      })
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getBlogDetails();
  }, []);

  return (
    <div className="flex justify-center items-center w-[90%] mx-auto py-10">
      {IsLoading ? (
        <Loading />
      ) : (
        <div>
          <div className="w-full max-w-3xl bg-white shadow rounded-md p-6 space-y-6">
            <div className="blog_info space-y-2">
              <h1 className="text-3xl font-semibold text-gray-800">
                {blogDetails.blogTitle}
              </h1>
              <h2 className="text-gray-500">{blogDetails.shortDescription}</h2>
            </div>

            <div className="user_info flex items-center gap-4">
              <img
                className="w-12 h-12 rounded-full object-cover"
                src={blogDetails.owner.userImage}
                alt="Profile"
              />
              <div className="text-sm text-gray-600">
                <p>{new Date(blogDetails.blogDate).toLocaleDateString()}</p>
                <p className="text-blue-600 font-medium">
                  @{blogDetails.owner.username}
                </p>
              </div>
            </div>

            <hr className="border-gray-300" />
            <div className="actions flex gap-6 text-gray-700 text-sm">
              <div className="flex items-center gap-1">
                <MessageCircle className="w-5 h-5" />
                <p>{blogDetails.commentsNumber}</p>
              </div>
              <div onClick={() => AddLikes()} className="cursor-pointer flex items-center gap-1">
                <ThumbsUp className="w-5 h-5" />
                <p>{blogDetails.likesNumber}</p>
              </div>
            </div>
            <hr className="border-gray-300" />

            <img
              className="w-full h-auto rounded-md"
              src={blogDetails.blogImage}
              alt="Blog"
            />

            <div
              className="prose max-w-none text-gray-800"
              dangerouslySetInnerHTML={{ __html: blogDetails.contentBlog }}
            />
          </div>

          <div className="commentes mt-6 w-full max-w-3xl bg-white shadow py-2 px-6 rounded-md space-y-6">
            <h1 className="font-medium text-lg">Comments: </h1>
            <div style={{margin: 0}} className="bg-white p-2">
              <textarea
                rows={4}
                className="border-none bg-gray-50 rounded-md p-2 w-full h-[80%] outline-none mt-0"
                placeholder="what are you thoughts?"
                type="text"
              ></textarea>
              <div className="btns text-end">
                <button className="bg-gray-300 text-zinc-700 font-medium text-sm px-2 py-1 rounded-tl-sm rounded-bl-sm">
                  Cancel
                </button>
                <button className="bg-sky-500 text-zinc-700 font-medium text-sm px-2 py-1 rounded-tr-sm rounded-br-sm">
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Blog_Details;
