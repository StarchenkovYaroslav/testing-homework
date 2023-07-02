import { renderApp } from '../helpers/render-app'

describe('pages exist', () => {
  it('main', async () => {
    const { findByTestId } = renderApp('/', {})

    const title = await findByTestId('main-title')

    expect(title).toBeTruthy()
  })

  it('catalog', async () => {
    const { findByTestId } = renderApp('/catalog', {})

    const title = await findByTestId('catalog-title')

    expect(title).toBeTruthy()
  })

  it('delivery', async () => {
    const { findByTestId } = renderApp('/delivery', {})

    const title = await findByTestId('delivery-title')

    expect(title).toBeTruthy()
  })

  it('contacts', async () => {
    const { findByTestId } = renderApp('/contacts', {})

    const title = await findByTestId('contacts-title')

    expect(title).toBeTruthy()
  })
})
