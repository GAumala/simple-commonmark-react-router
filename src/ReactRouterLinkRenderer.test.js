import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { shallow } from 'enzyme';

import  ReactRouterLinkRenderer from './ReactRouterLinkRenderer.ts'
import { renderNodes } from 'simple-commonmark-react'

const options = { customRenderers: { link: ReactRouterLinkRenderer } }
const markdown = 'Here is a [link](/some/path)'
const nodes = renderNodes(markdown, options)

test('should render markdown correctly', () => {
  const component = renderer.create(<Router><div>{ nodes }</div></Router>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('should render markdown with React Router\'s Link', () => {
	const paragraphWrapper = shallow(nodes[0])
  expect(paragraphWrapper.find(Link).length).toEqual(1)
})

