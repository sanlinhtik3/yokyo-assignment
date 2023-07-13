import React from 'react'
import MarkDown from '../../components/MarkDown';
import { useDeleteBlogMutation, useGetBlogsQuery } from '../../slices/blogApiSlice';
import { Link, useNavigate } from 'react-router-dom';
import BlogCard from './components/BlogCard';
import { Button } from '../../components/Button'
import { PlusCircleIcon } from '@heroicons/react/20/solid';
import EmptyIcon from '../../assets/icons/EmptyIcon';
import { useSelector } from 'react-redux';
import { useGetManageUserQuery } from '../../slices/usersManageApiSlice';

const markdown = `# A demo of \`react-markdown\`
\`react-markdown\` is a markdown component for React.
👉 Changes are re-rendered as you type.
👈 Try writing some markdown on the left.

မြန်မာလိုဖြစ်ပါတယ်။

## Overview
* Follows [CommonMark](https://commonmark.org)
* Optionally follows [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual React elements instead of using \`dangerouslySetInnerHTML\`
* Lets you define your own components (to render \`MyHeading\` instead of \`h1\`)
* Has a lot of plugins
## Table of contents
Here is an example of a plugin in action
([\`remark-toc\`](https://github.com/remarkjs/remark-toc)).
This section is replaced by an actual table of contents.
## Syntax highlighting
Here is an example of a plugin to highlight code:
[\`rehype-highlight\`](https://github.com/rehypejs/rehype-highlight).
\`\`\`js
import React from 'react'
import ReactDOM from 'react-dom'
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
ReactDOM.render(
  <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{'# Your markdown here'}</ReactMarkdown>,
  document.querySelector('#content')
)
\`\`\`
Pretty neat, eh?
## GitHub flavored markdown (GFM)
For GFM, you can *also* use a plugin:
[\`remark-gfm\`](https://github.com/remarkjs/react-markdown#use).
It adds support for GitHub-specific extensions to the language:
tables, strikethrough, tasklists, and literal URLs.
These features **do not work by default**.
👆 Use the toggle above to add the plugin.
| Feature    | Support              |
| ---------: | :------------------- |
| CommonMark | 100%                 |
| GFM        | 100% w/ \`remark-gfm\` |
~~strikethrough~~
* [ ] task list
* [x] checked item
https://example.com

## HTML in markdown
⚠️ HTML in markdown is quite unsafe, but if you want to support it, you can
use [\`rehype-raw\`](https://github.com/rehypejs/rehype-raw).
You should probably combine it with
[\`rehype-sanitize\`](https://github.com/rehypejs/rehype-sanitize).

## Components
You can pass components to change things:
\`\`\`js
import React from 'react'
import ReactDOM from 'react-dom'
import ReactMarkdown from 'react-markdown'
import MyFancyRule from './components/my-fancy-rule.js'
ReactDOM.render(
  <ReactMarkdown
    components={{
      // Use h2s instead of h1s
      h1: 'h2',
      // Use a component instead of hrs
      hr: ({node, ...props}) => <MyFancyRule {...props} />
    }}
  >
    # Your markdown here
  </ReactMarkdown>,
  document.querySelector('#content')
)
\`\`\`
## More info?
Much more info is available in the
[readme on GitHub](https://github.com/remarkjs/react-markdown)!
***
A component by [Espen Hovlandsdal](https://espen.codes/)`;


const Blog = () => {
  // Fetch data for all blog
  const { userInfo } = useSelector((state) => state.auth);
  const { data: u, isLoading: l } = useGetManageUserQuery(userInfo._id);

  const { data, isLoading } = useGetBlogsQuery()
  const navigate = useNavigate()

  // Delete data from blog post

  return (
    <div className='max-w-screen-xl mx-auto p-4 space-y-10'>
      <h1 class="flex items-center text-5xl font-bold dark:text-white font-poppins">Blog<span class="bg-blue-100 text-blue-800 text-2xl font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">PRO</span></h1>
      {u?.access === 2 && (
        <button
          onClick={() => navigate(`/blog/create`)}
          className="flex items-center py-2.5 px-3 mr-2 mb-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-xl border border-gray-100 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 "
        >
          <PlusCircleIcon className=" w-4 mr-2" />
          Create Blog
        </button>
      )}

      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {data?.map(d => (
          <div key={d._id}>
            <BlogCard data={d} />
          </div>
        ))}
      </div>

      {data?.length === 0 && (
        <div className=" text-center space-y-5">
          <EmptyIcon className='w-60 mx-auto' />
          <h1 class="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-5xl lg:text-6xl font-poppins"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Oops!</span> Empty blog</h1>
        </div>
      )}

    </div>
  );
}

export default Blog