import React from 'react';

import { RenderResult, screen } from '@testing-library/react'

import { beforeAll, expect } from '@jest/globals'
import { renderApp } from './helpers/render-app'

let renderedApp: RenderResult

beforeAll(() => {
  renderedApp = renderApp()
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
