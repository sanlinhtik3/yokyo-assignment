import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useGetSingleBlogQuery, useUpdateBlogMutation } from "../../slices/blogApiSlice";
import TextInput from "../../components/TextInput";
import TextAreaInput from "../../components/TextAreaInput";
import { Button } from "../../components/Button";
import MarkDown from "../../components/MarkDown";

export const EditCreate = () => {
    const { id } = useParams();

    const { data, isLoading: blog_loading } = useGetSingleBlogQuery(id);

    const [updateBlog, { isLoading }] = useUpdateBlogMutation()
    const navigate = useNavigate()

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const res = await updateBlog({ id, dd: inputs }).unwrap();
            toast.success(`Create Successfyl ${res.name}`);
            setInputs({})
        } catch (err) {
            toast.error(err?.data?.message || err.error);
        }
    };
    return (
        <>
            <section className=" dark:bg-gray-900 max-w-screen-xl mx-auto">
                <div className="py-8 px-4 lg:py-16">
                    <h2 className="mb-4 text-xl font-bold text-gray-900 font-poppins">Add a new blog</h2>

                    <div className="grid gap-5 md:grid-cols-2">
                        <form onSubmit={handleSubmit} className="space-y-5 bg-white p-5 rounded-2xl">
                            <TextInput
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Aa"
                                onChange={handleChange}
                                defaultValue={data?.name || ""}
                                labelName="Name"
                                required
                            />

                            <TextAreaInput
                                id="description"
                                rows="3"
                                type="text"
                                name="description"
                                defaultValue={data?.description || ""}
                                onChange={handleChange}
                            />

                            <Button isLoading={isLoading}>Add Post</Button>
                        </form>
                        <div className=" bg-white p-5 rounded-2xl">
                            <h2 className="mb-4 text-xl font-bold text-gray-900 font-poppins">Preview</h2>
                            <MarkDown markdown={`${inputs?.description ? inputs?.description : data?.description}`} />
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
