import { getDummyProducts } from './api/product';

class Mocks {
    static register = (url, method = 'GET', callback = () => {}) => {
        window.fetch.api[url + '--' + method.toUpperCase()] = callback;
    }

    static setup = () => {
        window.fetch = (url, { method = 'GET', body = {} } = {}) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    try {
                        const response = window.fetch.api[url + '--' + method.toUpperCase()](body);
                        resolve(response);
                    } catch(e) {
                        reject({
                            status: 404,
                            message: '[Mocks Server]: 404 (' + url + ')' 
                        });
                    }
                }, 200);
            })
        }

        window.fetch.api = {};

        // Product Endpoints
        this.register('/api/products', 'GET', getDummyProducts);
    }
}

export default Mocks;