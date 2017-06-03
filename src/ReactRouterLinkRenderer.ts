import { ReactElement, createElement } from 'react'
import { Link } from 'react-router-dom'
import LinkRenderer from 'simple-commonmark-react/src/renderers/LinkRenderer'

export default class ReactRouterLinkRender extends LinkRenderer {

  renderNodeWithProps(props: any): ReactElement<any> {
    //Link puts the url in 'to' rather than 'href', let's swap them
    const url = props.href
    delete props.href
    props.to = url
    return createElement(Link, props, [])
  }
}
