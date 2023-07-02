import { renderApp } from '../../helpers/render-app'

it('empty cart contains catalog link', () => {
  const { getByTestId } = renderApp('/cart', {})

  const link = getByTestId('cart-to-catalog-link')
  const linkPath = link.getAttribute('href')

  expect(linkPath).toEqual('/catalog')
})
