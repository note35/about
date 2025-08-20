import { useParams, Link } from 'react-router-dom'
import { format } from 'date-fns'
import { ArrowLeft, Calendar, Tag, User } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import rehypeRaw from 'rehype-raw'
import { useState, useEffect } from 'react'
import { getAllBlogPosts, getBlogPostBySlug, BlogPost } from './utils/blogUtils'
import Giscus from '@giscus/react';
import 'highlight.js/styles/github.css'

export function Blog() {
  const { slug } = useParams()
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [currentPost, setCurrentPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadPosts() {
      try {
        setLoading(true)
        const allPosts = await getAllBlogPosts()
        setPosts(allPosts)
        
        if (slug) {
          const post = await getBlogPostBySlug(slug)
          setCurrentPost(post)
        }
      } catch (err) {
        setError('Failed to load blog posts')
        console.error('Error loading posts:', err)
      } finally {
        setLoading(false)
      }
    }
    
    loadPosts()
  }, [slug])

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Error</h1>
        <p className="text-gray-600 mb-6">{error}</p>
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Blog
        </Link>
      </div>
    )
  }
  
  if (slug) {
    if (!currentPost) {
      return (
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
        </div>
      )
    }

    return (
      <article className="max-w-4xl mx-auto">
        <Helmet>
          <title>{currentPost.title}</title>
          <meta 
            name="description" 
            content={currentPost.excerpt}
          />
          <meta property="og:title" content={currentPost.title} />
          <meta property="og:description" content={currentPost.excerpt} />
        </Helmet>

        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-6 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Blog
        </Link>
        
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-200 mb-4">{currentPost.title}</h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400 mb-6">
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>{currentPost.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{format(new Date(currentPost.date), 'MMMM d, yyyy')}</span>
            </div>
            <span>{currentPost.readTime}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {currentPost.tags.map((tag: string, index: number) => (
              <span
                key={index}
                className="inline-flex items-center gap-1 px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full"
              >
                <Tag size={14} />
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="markdown-content">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight, rehypeRaw]}
          >
            {currentPost.content}
          </ReactMarkdown>
        </div>
        <div className="giscus-container">
          <Giscus
            repo="note35/about"
            repoId="MDEwOlJlcG9zaXRvcnkyOTU0NjY0NDQ="
            category="General"
            categoryId="DIC_kwDOEZx1zM4CueN3"
            mapping="pathname"
            
            // Optional props
            id="comments"
            strict="0"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="bottom"
            theme="preferred_color_scheme"
            lang="en"
            loading="lazy"
          />
        </div>
      </article>
    )
  }

  return (
    <div className="space-y-8">
      <Helmet>
        <title>Kir Chou's Blog</title>
        <meta 
          name="description" 
          content="Kir Chou's Blog."
        />
        <meta property="og:title" content="Kir Chou's Blog" />
        <meta property="og:description" content="" />
      </Helmet>

      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Blogs</h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          Thoughts, tutorials, and insights about Python, software engineering, and technology.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 px-4">
        {posts.map((post) => (
          <article key={post.slug} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-300 mb-3">
                <Calendar size={16} />
                <span>{format(new Date(post.date), 'MMM d, yyyy')}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-300 mb-3">
                <Link 
                  to={`/blog/${post.slug}`}
                  className="hover:text-primary-600 transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded"
                  >
                    <Tag size={12} />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
