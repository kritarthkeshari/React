import ProductCart from "./ProductCart";

export default function ProductList({ product, addToCart }) {
  return (
    <div>
      {product.map((item) => (
        <ProductCart 
        key={item.id}
        product={item}
        addToCart={addToCart}/>
      ))}
    </div>
  );
}