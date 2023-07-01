import axios from 'axios';
import { CartState, CheckoutFormData, CheckoutResponse, Product, ProductShortInfo } from '../common/types';
import { cartMock } from '../../test/hermione/mocks/cart.mock'

export interface IExampleApi {
    getProducts: () => Promise<{ data: ProductShortInfo[] }>
    getProductById: (id: number) => Promise<{ data: Product }>
    checkout: (form: CheckoutFormData, cart: CartState) => Promise<{ data: CheckoutResponse }>
}

export interface ICartApi {
    getState: () => CartState
    setState: (cart: CartState) => void
}

export class ExampleApi implements IExampleApi {
    constructor(private readonly basename: string) {

    }

    async getProducts() {
        return await axios.get<ProductShortInfo[]>(`${this.basename}/api/products`);
    }

    async getProductById(id: number) {
        return await axios.get<Product>(`${this.basename}/api/products/${id}`);
    }

    async checkout(form: CheckoutFormData, cart: CartState) {
        return await axios.post<CheckoutResponse>(`${this.basename}/api/checkout`, { form, cart });
    }
}

export const LOCAL_STORAGE_CART_KEY = 'example-store-cart';

export class CartApi implements ICartApi {
    getState(): CartState {
        if (process.env.TEST === 'hermione') {
            return cartMock
        }

        try {
            const json = localStorage.getItem(LOCAL_STORAGE_CART_KEY);
            return JSON.parse(json) as CartState || {};
        } catch {
            return {};
        }
    }

    setState(cart: CartState) {
        localStorage.setItem(LOCAL_STORAGE_CART_KEY, JSON.stringify(cart));
    }
}
