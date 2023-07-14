import { Link } from "react-router-dom"
import { useDeleteBlogMutation } from "../../../slices/blogApiSlice"
import { BeakerIcon, EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/20/solid";


const BlogCard = ({ data, auth }) => {
    const [destroy, { isLoading }] = useDeleteBlogMutation()
    return (
        <div className="p-6 bg-white border border-gray-200 rounded-2xl ">
            <Link to={`/blog/${data._id}`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{data?.name}</h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data?.description.substring(0, 30) + `...`}</p>
            <div className=" flex w-full">
                <Link to={`/blog/${data._id}`} type="button" className="py-2.5 px-3 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-xl border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 whitespace-nowrap"><EyeIcon className=" w-4 mr-1 inline-block" /> Read More</Link>
                {auth?.access === 2 && (<>
                    <Link to={`/blog/edit/${data._id}`} type="button" className="py-2.5 px-3 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-xl border border-gray-200 hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:ring-4 focus:ring-gray-200 whitespace-nowrap "><PencilIcon className=" w-4 mr-1 inline-block" /> Edit</Link>
                    <button onClick={() => destroy(data._id)} type="button" className="py-2.5 px-3 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-xl border border-gray-200 hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-4 focus:ring-gray-200 whitespace-nowrap "><TrashIcon className=" w-4 mr-1 inline-block" /> Delete {isLoading && 'Loading'}</button>
                </>)}
            </div>
        </div>
    )
}

export default BlogCard