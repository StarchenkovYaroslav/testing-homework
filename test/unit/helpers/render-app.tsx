import React from 'react';

import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { render, RenderResult } from '@testing-library/react'

import { Application } from '../../../src/client/Application'
import { initStore } from '../../../src/client/store'

import { ExampleApiStub } from '../stubs/example-api-stub'
import { CartApiStub } from '../stubs/cart-api-stub'

export const renderApp = (initialPath: string = '/'): RenderResult => {
  const basename = '/'
  const api = new ExampleApiStub(basename)
  const cart = new CartApiStub()
  const store = initStore(api, cart)

  const application = (
    <MemoryRouter initialEntries={[initialPath]}>
      <Provider store={store}>
        <Application />
      </Provider>
    </MemoryRouter>
  );

  return render(application)
}
