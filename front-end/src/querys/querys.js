import { client } from '../index';

export const getAllProductsQuery = () => { 
    const query = client.query((root) => {
        root.add('shop', (shop) => {
            shop.add('name');
            shop.addConnection('products', {args: {first: 200}}, (product) => {
                product.add('title');
                product.add('id');
                product.add('description');
                product.add('productType');
                product.add('vendor');
                product.add('tags');
                product.addConnection('images', { args: { first: 250 } }, (images) => {
                    images.add('src');
                    images.add('id');
                    images.add('altText');
                })
                product.addConnection('variants', { args: { first: 250 } }, (variants) => {
                    variants.add('id');
                    variants.add('product');
                    variants.add('title');
                    variants.add('price');
                    variants.add('available');
                    variants.add('image', (image) => {
                        image.add('src');
                        image.add('id');
                        image.add('altText');
                    })
                })
            });
        });
    });
    return query;
}