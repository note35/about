import { AboutItems, AboutLinkItems } from './AboutItems'
import { Github, Linkedin, Link, ExternalLink } from 'lucide-react'
import { Helmet } from 'react-helmet-async';
import MyImage from './images/me.png';

const iconMap = {
  'Github': Github,
  'Discord': Link,
  'Linkedin': Linkedin,
  'X': () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  ),
}

export function About() {
  return (
    <div className="space-y-8">
      <Helmet>
        <title>Kir Chou</title>
        <meta 
          name="description" 
          content="About Kir Chou."
        />
        <meta property="og:title" content="Kir Chou" />
        <meta property="og:description" content="" />
      </Helmet>

      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About</h1>
        <img className="w-32 h-32 rounded-full mx-auto my-6 object-cover" src={MyImage} alt="Selfie Photo"></img>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          Connect with me on Discord @kirchou1337. I only accept LinkedIn connections from colleagues and in-person acquaintances.
        </p>
      </div>

      {/* Links */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 px-4">
        {AboutLinkItems.map((item) => {
          const IconComponent = iconMap[item.name as keyof typeof iconMap]
          return (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center sm:justify-start gap-3 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors p-4 sm:p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-600 hover:border-primary-200 dark:hover:border-primary-500 min-h-[60px] sm:min-h-0"
            >
              {IconComponent && <IconComponent size={24} className="flex-shrink-0" />}
              <span className="font-medium text-base">{item.name}</span>
              <ExternalLink size={18} className="flex-shrink-0 ml-auto sm:ml-2" />
            </a>
          )
        })}
      </div>

      {/* Sections */}
      <div className="grid gap-6 md:grid-cols-2 px-4">
        {AboutItems.map((item, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{item.name}</h3>
            <div 
              className="text-gray-700 dark:text-gray-300 leading-relaxed prose prose-sm max-w-none prose-a:text-primary-600 dark:prose-a:text-primary-400 prose-a:underline hover:prose-a:text-primary-700 dark:hover:prose-a:text-primary-300"
              dangerouslySetInnerHTML={{ __html: item.description }}
            />
          </div>
        ))}
      </div>

    </div>
  )
}
