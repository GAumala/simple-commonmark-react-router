const ReactRouterLinkRenderer = require('./ReactRouterLinkRenderer.js').default
const renderNodes = require('simple-commonmark-react').renderNodes

test('should render links with React Router\'s Link', () => {
  const options = { customRenderers: { link: ReactRouterLinkRenderer } }
  const markdown = 'Here is a [link](/some/path)'

  const nodes = renderNodes(markdown, options)
  expect(nodes.length).toEqual(1)

  const paragraph = nodes[0]
  expect(paragraph.props.children.length).toEqual(2)

  const link = paragraph.props.children[1]
  expect(link.props.to).toEqual('/some/path')
  expect(link.props.children).toEqual(['link'])
})
