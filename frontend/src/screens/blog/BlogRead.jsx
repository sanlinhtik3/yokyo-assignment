import { Link, useNavigate, useParams } from "react-router-dom";
import { useDeleteBlogMutation, useGetSingleBlogQuery } from "../../slices/blogApiSlice";
import MarkDown from "../../components/MarkDown";
import { PencilIcon, TrashIcon } from "@heroicons/react/20/solid";
import { useSelector } from "react-redux";
import { useGetManageUserQuery } from "../../slices/usersManageApiSlice";
import Loader from "../../components/Loader";

const BlogRead = () => {
  // Get currently user
  const { userInfo } = useSelector((state) => state.auth);
  const { data: u, isLoading: l } = useGetManageUserQuery(userInfo._id);

  const { id } = useParams();
  const navigate = useNavigate()

  const { data, isLoading: blog_loading } = useGetSingleBlogQuery(id);
  const [destroy, { isLoading }] = useDeleteBlogMutation()

  if (blog_loading || l) {
    return <>
    <>
      <div className="h-screen w-full flex justify-center items-center">
      <Loader/>
      <h1>Loading...</h1>
      </div>
    </>
    </>
  }


  if (id !== data?._id || l) {
    return <div className="">
      404
      <Link to={`/blog`} className=" bg-pink-600 text-white p-3">Back</Link>
    </div>
  }

  return (
    <>
      <div className="max-w-3xl mx-auto my-10 space-y-5">
        {/* <h1 className=" mb-2">{data?.name}</h1> */}
        <MarkDown markdown={`${data?.description}`} />

        {u?.access === 2 && (<>
          <Link to={`/blog/edit/${data._id}`} type="button" className="py-2.5 px-3 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-xl border border-gray-200 hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:ring-4 focus:ring-gray-200 whitespace-nowrap "><PencilIcon className=" w-4 mr-1 inline-block" /> Edit</Link>
          <button onClick={() => destroy(data._id)} type="button" className="py-2.5 px-3 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-xl border border-gray-200 hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-4 focus:ring-gray-200 whitespace-nowrap "><TrashIcon className=" w-4 mr-1 inline-block" /> Delete {isLoading && 'Loading'}</button>
        </>)}
      </div>
    </>
  )
}

export default BlogRead