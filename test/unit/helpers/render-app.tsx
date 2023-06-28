import React from 'react';

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { render, RenderResult } from '@testing-library/react'

import { Application } from '../../../src/client/Application'
import { CartApi } from '../../../src/client/api'
import { ExampleApiStub } from '../stubs/example-api-stub'
import { initStore } from '../../../src/client/store'

export const renderApp = (): RenderResult => {
  const basename = '/'
  const api = new ExampleApiStub(basename)
  const cart = new CartApi()
  const store = initStore(api, cart)

  const application = (
    <BrowserRouter>
      <Provider store={store}>
        <Application />
      </Provider>
    </BrowserRouter>
  );

  return render(application)
}
