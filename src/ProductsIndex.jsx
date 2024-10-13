import { useState } from "react";
    export function ProductsIndex(props) {
      const [searchFilter, setSearchFilter] = useState("");
      console.log(props.products)
      return (
        <div>
          <h1>All products</h1>
          Search filter: <input type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} />
          {props.products.filter((product) => product.name.toLowerCase().includes(searchFilter.toLowerCase())).map(product => (
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