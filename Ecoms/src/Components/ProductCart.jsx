export default function ProductCart({product,addToCart}){
    return(
        <>
        <img src={product.image} alt={product.name}/>
        <h4>{product.Name}</h4>
        <p>{product.Price}</p>
        <button onClick={()=>addToCart(product)}>Add To Cart</button>
        </>
        )
    }
