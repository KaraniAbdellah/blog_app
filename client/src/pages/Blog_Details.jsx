import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Loading from "../components/Loading";
import { Link } from "react-router";
import {
  MessageCircle,
  ThumbsUp,
  ChevronDown,
  Calendar,
  User,
} from "lucide-react";
import toast from "react-hot-toast";
import { UserContext } from "../contexts/userContext";


function Blog_Details() {
  const { id } = useParams();
  const [blogDetails, setBlogDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [comment, setComment] = useState("");
  const [like, setLike] = useState(true);
  const [visibleComments, setVisibleComments] = useState(5);
  const [userInfo] = useContext(UserContext);

  const getBlogDetails = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/blog/getBlogById/${id}`);
      setBlogDetails(res.data);
    } catch (error) {
      console.log("Error In Getting Blog Details: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  const AddLikes = async () => {
    setBlogDetails(prev => ({
      ...prev,
      likesNumber: prev.likesNumber + 1
    }));
    setLike(false);
    try {
      await axios.get(`${import.meta.env.VITE_SERVER_URL}/blog/addLike/${id}`, {
        withCredentials: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const IsThisUserLogin = async () => {
    try {
      await axios.get(`${import.meta.env.VITE_SERVER_URL}/user/profile`, {
        withCredentials: true,
      });
      return true;
    } catch (error) {
      return false;
    }
  };

  const AddComments = async () => {
    const isLoggedIn = await IsThisUserLogin();

    if (!isLoggedIn) {
      toast("Please Login First");
      return;
    }

    if (!comment || comment.trim().length === 0) {
      return;
    }

    setBlogDetails(prev => ({
      ...prev,
      commentsNumber: prev.commentsNumber + 1,
      Commentes: [...prev.Commentes, comment]
    }));
    
    setComment("");

    try {
      await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/blog/addComment/${id}`,
        { comment },
        { withCredentials: true }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const showMoreComments = () => {
    setVisibleComments((prev) =>
      Math.min(prev + 5, blogDetails.Commentes.length)
    );
  };

  useEffect(() => {
    getBlogDetails();
  }, [id]);

  return (
    <div className="container_bg relative z-[100]">
      <div className="flex justify-center items-center w-full py-10">
        {isLoading ? (
          <Loading />
        ) : (
          <div className="w-full max-w-3xl px-4">
            <div className="bg-white opacity-95 shadow-dm overflow-hidden mb-6 border rounded-lg">
              {/* Blog Header */}
              <div className="p-6 border-b border-gray-100 flex flex-col justify-center items-center">
                <h1 className="text-3xl text-center font-bold text-gray-800 mb-2">
                  {blogDetails.blogTitle}
                </h1>
                <p className="text-gray-600 text-lg text-center">
                  {blogDetails.shortDescription}
                </p>

                <div className="flex items-center mt-4 space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="relative">
                      <img
                        className="w-12 h-12 rounded-full object-cover border-2 border-white shadow"
                        src={
                          blogDetails.owner ? blogDetails.owner.userImage : "/default-avatar.png"
                        }
                        alt="Profile"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-sky-600">
                        @{blogDetails.owner ? blogDetails.owner.username : ""}
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(blogDetails.blogDate).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </div>
                {
                  userInfo && blogDetails.owner && userInfo.id === blogDetails.owner._id ? (
                    <Link to={`/edit/${blogDetails._id}`}>
                      <button className="px-8 mt-5 py-2 bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 text-white font-medium rounded-md hover:from-sky-500 hover:to-sky-600 transition duration-200 shadow-sm">
                        Edit Blog
                      </button>
                    </Link>
                  ) : null
                }
              </div>

              {/* Blog Stats */}
              <div className="flex items-center justify-start px-6 py-3 bg-gray-50">
                <div className="flex items-center mr-6">
                  <MessageCircle className="w-5 h-5 text-gray-500 mr-1" />
                  <span className="text-sm font-medium">
                    {blogDetails.commentsNumber} Comments
                  </span>
                </div>
                <button
                  onClick={AddLikes}
                  className="flex items-center transition-colors hover:text-sky-600"
                  disabled={!like}
                >
                  <ThumbsUp
                    className={`w-5 h-5 mr-1 ${
                      !like ? "text-sky-600" : "text-gray-500"
                    }`}
                    style={!like ? { fill: "rgb(2 132 199)" } : {}}
                  />
                  <span className="text-sm font-medium">
                    {blogDetails.likesNumber} Likes
                  </span>
                </button>
              </div>

              {/* Blog Image */}
              {blogDetails.blogImage && (
                <img
                  className="w-full h-auto object-cover max-h-96"
                  src={blogDetails.blogImage}
                  alt="Blog cover"
                />
              )}

              {/* Blog Content */}
              <div className="p-6">
                <div
                  className="prose max-w-none text-gray-800"
                  dangerouslySetInnerHTML={{ __html: blogDetails.contentBlog }}
                />
              </div>
            </div>

            {/* Comments Section */}
            <div className="bg-white overflow-hidden border rounded-lg">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-semibold text-gray-800">
                  Comments ({blogDetails.commentsNumber})
                </h2>
              </div>

              {/* Comment Form */}
              <div className="p-6 border-b border-gray-100">
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Share your thoughts..."
                ></textarea>
                <div className="flex justify-end mt-2">
                  <button
                    onClick={AddComments}
                    disabled={!comment || comment.trim().length === 0}
                    className={`px-4 py-2 rounded-md font-medium text-sm transition-colors ${
                      !comment || comment.trim().length === 0
                        ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                        : "bg-sky-600 text-white hover:bg-sky-700"
                    }`}
                  >
                    Post Comment
                  </button>
                </div>
              </div>

              {/* Comments List */}
              <div className="p-6">
                {blogDetails.Commentes && blogDetails.Commentes.length > 0 ? (
                  <div className="space-y-4">
                    {blogDetails.Commentes.slice(0, visibleComments).map(
                      (comment, index) => (
                        <div key={index} className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex items-center mb-2 text-sm text-gray-600">
                            <User className="w-4 h-4 mr-1" />
                            <span className="font-medium">Guest User</span>
                            <span className="mx-2">•</span>
                            <span className="text-gray-500 text-xs">
                              {new Date().toLocaleDateString()}
                            </span>
                          </div>
                          <p className="text-gray-700">{comment}</p>
                        </div>
                      )
                    )}

                    {blogDetails.Commentes.length > visibleComments && (
                      <button
                        onClick={showMoreComments}
                        className="w-full py-2 mt-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-md flex items-center justify-center transition-colors"
                      >
                        Show More
                        <ChevronDown className="w-4 h-4 ml-1" />
                      </button>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-6 text-gray-500">
                    <p>No comments yet. Be the first to share your thoughts!</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Blog_Details;