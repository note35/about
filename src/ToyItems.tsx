export interface ToyItem {
  year: string,
  reason: string,
  title: string,
  links: Array<{
    source: string,
    url: string
  }>,
  tags?: Array<string>
}

export const ToyItems: Array<ToyItem> = [
  {
    "year": "2024",
    "reason": "🤓 PEP 729",
    "title": "Python type systems comparison + A mini type checker",
    "links": [{
      "source": "Github",
      "url": "https://github.com/note35/TypeSystem-Learning"
    }],
    "tags": [
      "python", "cpython", "pep729",
    ]
  }, {
    "year": "2022",
    "reason": "🤓 CPython",
    "title": "Type Erasure",
    "links": [{
      "source": "Github",
      "url": "https://github.com/note35/TypeErasure-Learning"
    }],
    "tags": [
      "cpython",
    ]
  }, {
    "year": "2021",
    "reason": "🤓 PEP 617",
    "title": "Parser for Basic Calculator II",
    "links": [{
      "source": "Github",
      "url": "https://github.com/note35/Parser-Learning"
    }],
    "tags": [
      "python", "pep617", "leetcode"
    ]
  }, {
    "year": "2020",
    "reason": "🤓 Data Analysis",
    "title": "GCJ 2020 Anaylsis",
    "links": [{
      "source": "Github",
      "url": "https://github.com/note35/GCJ2020-analysis"
    }],
    "tags": [
      "jupyter", "pandas", "matplotlib", "crawler", "pipenv"
    ]
  }, {
    "year": "2020",
    "reason": "💎 Docker",
    "title": "GRPC + Redis",
    "links": [{
      "source": "Github",
      "url": "https://github.com/note35/grpc-redis"
    }],
    "tags": [
      "docker", "python", "grpc", "redis",
    ]
  }, {
    "year": "2020",
    "reason": "💎 Docker",
    "title": "Celery + Flask + Nginx",
    "links": [{
      "source": "Github",
      "url": "https://github.com/note35/celery-rds-sqs-flask-uwsgi-nginx"
    }],
    "tags": [
      "docker", "python", "sqs", "rds", "dynamodb", "flask", "ngix", "uwsgi"
    ]
  }, {
    "year": "2020",
    "reason": "🤓 Deep Learning",
    "title": "Snake Deep Learning",
    "links": [{
      "source": "Github",
      "url": "https://github.com/note35/Snake-DeepLearning"
    }],
    "tags": [
      "python", "pygame", "numpy", "keras", "tensorflow", "poetry"
    ]
  }, {
    "year": "2019",
    "reason": "👨🏽‍💻 AngelHack 🇯🇵",
    "title": "Libra Shell Wrapper",
    "links": [{
      "source": "Github",
      "url": "https://github.com/note35/angelhack/tree/master/ah2019_endpoint"
    }],
    "tags": [
      "python", "libra",
    ]
  }, {
    "year": "2018",
    "reason": "💎 Web Development",
    "title": "Flact (Flask + React)",
    "links": [{
      "source": "Github",
      "url": "https://github.com/note35/flact"
    }],
    "tags": [
      "python", "flask", "javascript", "react"
    ]
  }, {
    "year": "2018",
    "reason": "🤓 Type Hints",
    "title": "Osu Map Parser",
    "links": [{
      "source": "Github",
      "url": "https://github.com/note35/osu_map_parser",
    }],
    "tags": [
      "python", "mypy", "osu"
    ]
  }, {
    "year": "2017",
    "reason": "👨🏽‍💻 IETF 🇸🇬",
    "title": "Starbucks Captive Portal Checker",
    "links": [{
      "source": "Github",
      "url": "https://github.com/note35/starbucks_captive_portal_checker",
    }, {
      "source": "Slide",
      "url": "https://github.com/capport-wg/wg-materials/blob/master/ietf100/hackathon_capport-quick-checker.pdf",
    }],
    "tags": [
      "python", "scapy",
    ]
  }, {
    "year": "2017",
    "reason": "🤓 React",
    "title": "Osu Map Viewer",
    "links": [{
      "source": "Github",
      "url": "https://github.com/note35/osu-map-viewer"
    }],
    "tags": [
      "python", "crawler", "javascript", "react", "chartjs", "docker", "osu"
    ]
  }, {
    "year": "2017",
    "reason": "🎮",
    "title": "Osu Bonus Performance Point Calculator",
    "links": [{
      "source": "Github",
      "url": "https://github.com/note35/osu-pp-bonus"
    }],
    "tags": [
      "python", "osu"
    ]
  }, {
    "year": "2017",
    "reason": "🤓 Async",
    "title": "Echo Server based on talk by David Beazley in Python Brasil 2015",
    "links": [{
      "source": "Github",
      "url": "https://github.com/note35/echo_server"
    }],
    "tags": [
      "python", "asyncio"
    ]
  }, {
    "year": "2017",
    "reason": "👨🏽‍💻 Booking.com 🇹🇼",
    "title": "City Color Analyzer",
    "links": [{
      "source": "Github",
      "url": "https://github.com/note35/booking_taipeihacks"
    }],
    "tags": [
      "python", "crawler", "javascript", "react",
    ]
  }, {
    "year": "2016",
    "reason": "🤓 Open Source",
    "title": "Sinon Py",
    "links": [{
      "source": "Github",
      "url": "https://github.com/note35/sinon"
    }],
    "tags": [
      "python", "pypi", "mock", "sinonjs"
    ]
  }, {
    "year": "2015",
    "reason": "Security Research",
    "title": "Demo of paper: Software fault localization using DStar (D*)",
    "links": [{
      "source": "Slide",
      "url": "https://people.cs.nctu.edu.tw/~wschou/d3js/dataset/loadjson.html"
    }],
    "tags": [
      "javascript", "d3js", "code coverage"
    ]
  }
]
