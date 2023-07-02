import { productsMock } from '../../mocks/products.mock'
import { renderApp } from '../helpers/render-app'

interface IProductInfo {
  title: string,
  price: number,
  link: string,
}

describe('catalog renders', () => {
  let products: HTMLElement[]

  beforeAll(async () => {
    const { findByTestId } = renderApp('/catalog')

    const catalog = await findByTestId('catalog')

    products = Array.from(catalog.querySelectorAll<HTMLElement>('.ProductItem'))
  })

  it('all products', () => {
    const productsTestIds = products.map(product => Number(product.dataset.testid))
    const serverDataTestIds = productsMock.map(product => product.id)

      expect(productsTestIds).toEqual(serverDataTestIds)
    })

  it('with all info', () => {
    const productsInfo: IProductInfo[] = products.map(product => {
      const title = product.querySelector('.ProductItem-Name').textContent
      const price = Number(product.querySelector('.ProductItem-Price').textContent.slice(1))
      const link = product.querySelector('.ProductItem-DetailsLink').getAttribute('href')

      return { title, price, link }
    })

    const serverDataInfo: IProductInfo[] = productsMock.map(({ id, name, price}) => {
      return { title: name, price, link: `/catalog/${id}`}
    })

    expect(productsInfo).toEqual(serverDataInfo)
  })
})
