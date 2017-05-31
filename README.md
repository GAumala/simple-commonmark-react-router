# Simple CommonMark React Router

[![Build Status](https://travis-ci.org/GAumala/simple-commonmark-react-router.svg?branch=master)](https://travis-ci.org/GAumala/simple-commonmark-react-router)

Easily integrate [React Router](https://reacttraining.com/react-router/) with [simple-commonmark-react](https://github.com/GAumala/simple-commonmark-react)

## Example

```javascript
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import { renderNodes } from 'simple-commonmark-react'
import ReactRouterLinkRenderer from 'simple-commonmark-react-router'

class MarkdownComponent extends React.Component {
  render() {
    const source = this.props.markdownText
    const markdownOptions = {
      className: 'markdown',
      customRenderers: { link: ReactRouterLinkRenderer }
    }

    return (
      <Router>
        //Here you could put your routes
        <div>
          { renderNodes(source, markdownOptions) }  
        </div>
      </Router>
    )
  }  
}
```
