import React from 'react';

import { render, RenderResult } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Application } from '../../src/client/Application'
import { CartApi, ExampleApi } from '../../src/client/api'
import { initStore } from '../../src/client/store'
import { beforeAll, expect } from '@jest/globals'

let renderedApp: RenderResult

beforeAll(() => {
  const basename = '/'
  const api = new ExampleApi(basename)
  const cart = new CartApi()
  const store = initStore(api, cart)

  const application = (
    <BrowserRouter>
      <Provider store={store}>
        <Application />
      </Provider>
    </BrowserRouter>
  );

  renderedApp = render(application)
})

describe('header contains link', () => {
  let linksPaths: String[] = []

  beforeAll(() => {
    const { container } = renderedApp

    const header = container.querySelector('.navbar')
    const headerLinks = header.querySelectorAll('.nav-link')
    linksPaths = Array.from(headerLinks).map(link => link.getAttribute('href'))
  })

  it('to catalog', () => {
    expect(linksPaths).toContain('/catalog')
  })

  it('to delivery', () => {
    expect(linksPaths).toContain('/delivery')
  })

  it('to contacts', () => {
    expect(linksPaths).toContain('/contacts')
  })

  it('to cart', () => {
    expect(linksPaths).toContain('/cart')
  })
})

it('header brand title is link to the main page', () => {
  const { container } = renderedApp

  const brandTitle = container.querySelector('.navbar-brand')
  const brandTitleLinkPath = brandTitle.getAttribute('href')

  expect(brandTitleLinkPath).toEqual('/')
})
