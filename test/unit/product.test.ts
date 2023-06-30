import { beforeAll, expect } from '@jest/globals'
import { renderApp } from './helpers/render-app'
import { productsMock } from './stubs/example-api-stub'

const productMock = productsMock[0]

describe('product page contains', () => {
  let product: HTMLElement

  beforeAll(async () => {
    const { findByTestId } = renderApp(`/catalog/${productMock.id}`)

    product = await findByTestId('product')
  })

  it('title', () => {
    const title = product.querySelector('.ProductDetails-Name').textContent
    expect(title).toEqual(productMock.name)
  })

  it('description', () => {
    const description = product.querySelector('.ProductDetails-Description').textContent
    expect(description).toEqual(productMock.description)
  })

  it('price', () => {
    const price = Number(product.querySelector('.ProductDetails-Price').textContent.slice(1))
    expect(price).toEqual(productMock.price)
  })

  it('color', () => {
    const color = product.querySelector('.ProductDetails-Color').textContent
    expect(color).toEqual(productMock.color)
  })

  it('material', () => {
    const material = product.querySelector('.ProductDetails-Material').textContent
    expect(material).toEqual(productMock.material)
  })

  it('add to cart button', () => {
    const button = product.querySelector<HTMLButtonElement>('.ProductDetails-AddToCart')
    expect(button).toBeTruthy()
  })
})
