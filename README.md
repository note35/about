# Personal Website

A modern, responsive personal website built with React, TypeScript, and Tailwind CSS.

## Features

- **About**: Personal information and bio
- **Talks**: Conference presentations and speaking engagements
- **Toys**: Personal projects and open source contributions
- **Blog**: Technical articles and insights

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite (replacing Create React App)
- **Styling**: Tailwind CSS (replacing Material-UI)
- **Icons**: Lucide React
- **Routing**: React Router v6
- **Deployment**: GitHub Pages

## Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Setup

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Deploy to GitHub Pages:
```bash
npm run deploy
```

## Project Structure

```
src/
├── About.tsx          # About page component
├── AboutItems.tsx     # About page data
├── Talks.tsx          # Talks page component
├── TalkItems.tsx      # Talks data
├── Toys.tsx           # Projects page component
├── ToyItems.tsx       # Projects data
├── Blog.tsx           # Blog page component (NEW!)
├── Navigator.tsx      # Navigation component
├── App.tsx            # Main app component
├── main.tsx           # Entry point
└── index.css          # Global styles with Tailwind
```

## Blog System

The new blog system supports:
- Markdown-like content
- Tags and categories
- Reading time estimates
- Responsive design
- SEO-friendly URLs

## Migration Notes

[2025-Aug] This project has been completely rewritten from the old Material-UI + Create React App setup to:
- Remove deprecated dependencies
- Improve performance with Vite
- Modernize the UI with Tailwind CSS
- Add blog functionality
- Maintain all existing content and functionality

## License

MIT License
