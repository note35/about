import { ResumeItems } from './ResumeItems'
import { Calendar, Tag } from 'lucide-react'
import { Helmet } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import rehypeRaw from 'rehype-raw'

export function Resume() {
  return (
    <div className="space-y-6">
      <Helmet>
        <title>Kir Chou's Resume</title>
        <meta 
          name="description" 
          content="" 
        />
        <meta property="og:title" content="Kir Chou's Resume" />
        <meta property="og:description" content="" />
      </Helmet>

      <div className="text-center mb-8 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Resume</h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          Specializing in backend development, distributed systems, and large-scale data processing. Tackled numerous real world challenges involving map content consumption and creation, backed by extensive end-to-end experience.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-1 px-4">
        {ResumeItems.map((resume, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6 hover:shadow-md transition-shadow">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-300">
                      <Calendar size={16} />
                      <span>{resume.duration}</span>
                    </div>
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full w-fit">
                      {resume.employer}
                    </span>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-300 mb-3">
                    {resume.job_title}
                  </h3>

                  <div className="markdown-content">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      rehypePlugins={[rehypeHighlight, rehypeRaw]}
                    >
                      {resume.job_description}
                    </ReactMarkdown>
                  </div>

                  {resume.languages && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {resume.languages.map((tag: string, tagIndex: number) => (
                        <span
                          key={tagIndex}
                          className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded"
                        >
                          <Tag size={12} />
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
