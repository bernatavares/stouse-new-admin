import { client } from '../index';

export const getAllProductsQuery = () => { 
    const query = client.query((root) => {
        root.add('shop', (shop) => {
        shop.add('name');
        shop.addConnection('products', {args: {first: 10}}, (product) => {
            product.add('title');
        });
        });
    });
    return query;
}