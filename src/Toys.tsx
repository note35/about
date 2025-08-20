import { ToyItems } from './ToyItems'
import { ExternalLink, Calendar, Tag, Github } from 'lucide-react'
import { Helmet } from 'react-helmet-async';

export function Toys() {
  return (
    <div className="space-y-6">
      <Helmet>
        <title>Kir Chou's Toys</title>
        <meta 
          name="description" 
          content="A list of Kir Chou's toy projects in the past."
        />
        <meta property="og:title" content="Kir Chou's Toys" />
        <meta property="og:description" content="" />
      </Helmet>

      <div className="text-center mb-8 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Toys</h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          Personal projects, experiments, and contributions to the open source community.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 px-4">
        {ToyItems.map((toy, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 hover:shadow-md transition-shadow">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-300">
                      <Calendar size={16} />
                      <span>{toy.year}</span>
                    </div>
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full w-fit">
                      {toy.reason}
                    </span>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-300 mb-3">
                    {toy.title}
                  </h3>

                  {toy.tags && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {toy.tags.map((tag: string, tagIndex: number) => (
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

                <div className="flex flex-wrap gap-2 sm:flex-col sm:items-end">
                  {toy.links?.map((link: any, linkIndex: number) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-primary-50 text-primary-700 hover:bg-primary-100 rounded-lg transition-colors text-sm font-medium w-auto sm:w-auto justify-center sm:justify-start"
                    >
                      {link.source === 'Github' ? <Github size={16} /> : null}
                      {link.source}
                      <ExternalLink size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
