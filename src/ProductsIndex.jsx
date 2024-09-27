    export function ProductsIndex(props) {
      return (
        <div>
          <h1>All products</h1>
         {props.products.map((product) => (
           <div key={product.id}>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <p>{product.supplier_id}</p>
            {/* <img src={product.images[0] && product.images[0].url} /> */}
            {/* <p>{product.images[0] && product.images[0].url}</p> */}
           </div>
         ))}
        </div>
      );
    }