import React from "react"

import Link from "@material-ui/core/Link"

interface UrlType {
  url: string,
  text: string
}

function isUrlType(obj: any): obj is UrlType {
  return (
    obj &&
    typeof obj === "object" &&
    typeof obj["url"] === "string" &&
    typeof obj["text"] === "string"
  )
}

function convert(markdown: string): Array<string|UrlType> {
  const html = []
  let currentPattern = ""
  let pos = 0
  while(pos < markdown.length) {
    if(markdown[pos] === "[") {
      html.push(currentPattern)
      currentPattern = ""

      const urlObj: UrlType = {
        "url": "",
        "text": ""
      }

      pos += 1  // skip "["
      while(markdown[pos] !== "]") {
        currentPattern += markdown[pos]
        pos += 1
      }

      pos += 1  // skip "]"

      if(markdown[pos] === "(") {
        pos += 1  // skip "("
      } else {
        // incomplete pattern
        // skip, since I assume the input is always correct
      }

      urlObj["text"] = currentPattern
      currentPattern = ""
      while(markdown[pos] !== ")") {
        currentPattern += markdown[pos]
        pos += 1
      }

      urlObj["url"] = currentPattern
      currentPattern = ""

      html.push(urlObj)
    } else {
      currentPattern += markdown[pos]
    }
    pos += 1
  }

  // handle leftover
  if(currentPattern.length > 0) {
    html.push(currentPattern)
  }

  return html
}

export function MD2Html(text: string) {
  return (
    convert(text).map(item => {
      if(isUrlType(item)) {
        return <Link target="_blank" href={item.url}>{item.text}</Link>
      } else {
        return item
      }
    })
  )
}
