export async function OrderProducts() {
    const response = await fetch('/products.json');
    const products = await response.json();
    return products;
}
export async function OrderProduct() {
    const response = await fetch('/product.json');
    const product = await response.json();
    return product;
}
export async function CreateProduct() {
    const response = await fetch('/product.json');
    const productCreated = await response.json();
    console.log('Producto creado!', productCreated)
    return productCreated;
}
export async function UpdateProduct() {
    const response = await fetch('/product.json');
    const updatedProduct = await response.json();
    console.log('Producto actualizado!', updatedProduct)
    return updatedProduct;
}
export async function DeleteProduct() {
    const response = await fetch('/product.json');
    console.log('Producto borrada!', response.id)
    return response.id;
}