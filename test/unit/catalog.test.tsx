import React from 'react';

import { RenderResult } from '@testing-library/react'
import events from '@testing-library/user-event'

import { productsMock } from './stubs/example-api-stub'
import { beforeAll } from '@jest/globals'
import { renderApp } from './helpers/render-app'

let renderedApp: RenderResult

beforeAll(() => {
  renderedApp = renderApp()
})

it('catalog contains product from server', async () => {
  const { container } = renderedApp

  const catalogLink = Array.from(container.querySelectorAll('.nav-link'))
    .find(link => link.getAttribute('href') === '/catalog')

  await events.click(catalogLink)

  const products = Array.from(container.querySelectorAll<HTMLElement>('.ProductItem'))

  const productsTestIds = products.map(product => Number(product.dataset.testid))
  const serverDataTestIds = productsMock.map(product => product.id)

  expect(productsTestIds).toEqual(serverDataTestIds)
})
