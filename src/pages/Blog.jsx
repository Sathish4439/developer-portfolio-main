import { useEffect, useState } from 'react'
import { personalData } from '@/utils/data/personal-data'
import { Helmet } from 'react-helmet-async'
import BlogCard from '../components/homepage/blog/blog-card'

function BlogPage() {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getBlogs() {
      try {
        const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`)

        if (!res.ok) {
          throw new Error('Failed to fetch data')
        }

        const data = await res.json()
        setBlogs(data)
      } catch (error) {
        console.error('Error fetching blogs:', error)
        setBlogs([])
      } finally {
        setLoading(false)
      }
    }

    getBlogs()
  }, [])

  if (loading) {
    return (
      <div className="py-8 flex justify-center items-center min-h-screen">
        <p className="text-white">Loading blogs...</p>
      </div>
    )
  }

  return (
    <div className="py-8">
      <Helmet>
        <title>Technical Blogs | Sathish G | Full Stack & Flutter Engineering Insights</title>
        <meta name="description" content="Read developer articles and guides on Flutter development, React web applications, AWS hosting, and backend Node.js APIs by Sathish G." />
        <link rel="canonical" href="https://sathish.qzz.io/blog" />
        <meta property="og:title" content="Technical Blogs | Sathish G | Full Stack & Flutter Engineering Insights" />
        <meta property="og:description" content="Read developer articles and guides on Flutter development, React web applications, AWS hosting, and backend Node.js APIs by Sathish G." />
        <meta property="og:url" content="https://sathish.qzz.io/blog" />
        <meta name="twitter:title" content="Technical Blogs | Sathish G | Full Stack & Flutter Engineering Insights" />
        <meta name="twitter:description" content="Read developer articles and guides on Flutter development, React web applications, AWS hosting, and backend Node.js APIs by Sathish G." />
      </Helmet>
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <h1 className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
            All Blog
          </h1>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {blogs.map((blog, i) => (
          blog?.cover_image && (
            <BlogCard blog={blog} key={i} />
          )
        ))}
      </div>
    </div>
  )
}

export default BlogPage

