import React from 'react';

import { createMemoryHistory, MemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import { render, RenderResult } from '@testing-library/react'

import { Application } from '../../../src/client/Application'
import { initStore } from '../../../src/client/store'

import { ExampleApiStub } from '../stubs/example-api-stub'
import { CartApiStub } from '../stubs/cart-api-stub'

interface renderedApp extends RenderResult {
  history: MemoryHistory,
}

export const renderApp = (initialPath: string = '/'): renderedApp => {
  const basename = '/'
  const api = new ExampleApiStub(basename)
  const cart = new CartApiStub()
  const store = initStore(api, cart)

  const history = createMemoryHistory({ initialEntries: [initialPath] })

  const application = (
    <Router history={history}>
      <Provider store={store}>
        <Application />
      </Provider>
    </Router>
  )

  return {
    ...render(application),
    history,
  }
}
