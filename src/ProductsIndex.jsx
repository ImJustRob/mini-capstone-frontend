    export function ProductsIndex(props) {
      console.log(props.products)
      return (
        <div>
          <h1>All products</h1>
         {props.products.map((product) => (
           <div key={product.id}>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <button onClick={() => props.onShow(product)}>Edit this product</button>          
            <button onClick={() => props.onShowAddToCart(product)}>Add to cart</button>  
           </div>
         ))}
        </div>
      );
    }