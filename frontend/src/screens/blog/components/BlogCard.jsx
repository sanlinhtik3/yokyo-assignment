import { Link } from "react-router-dom"
import { useDeleteBlogMutation } from "../../../slices/blogApiSlice"

const BlogCard = ({ data, }) => {
    const [destroy, { isLoading }] = useDeleteBlogMutation()
    return (
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow ">
            <Link to={`/blog/${data._id}`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{data?.name}</h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data?.description}</p>
            <Link to={`/blog/${data._id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                Read more
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </Link>
            <Link to={`/blog/edit/${data._id}`} type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 ">Edit</Link>
            <button onClick={() => destroy(data._id)} type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 ">Delete {isLoading && 'Loading'}</button>
        </div>
    )
}

export default BlogCard