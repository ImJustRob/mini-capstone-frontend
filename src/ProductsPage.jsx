import { ProductsIndex } from './ProductsIndex'
import { ProductsEdit } from './ProductsEdit'
import { ProductsNew } from './ProductsNew'
import { CartedProductsNew } from './CartedProductsNew'
import { Modal } from './Modal'
import { useState } from 'react'
import axios from 'axios'
import { useLoaderData } from "react-router-dom";

export function ProductsPage() {
  const data = useLoaderData();
  
  // Ensure data is not undefined
  const products = data ? data.products : [];
  const suppliers = data ? data.suppliers : [];
  // const handleCreateProduct = (event) => {
  //   event.preventDefault()
  //   console.log('handling submit')
  //   const params = new FormData(event.target)
  //   axios.post("http://localhost:3000/products.json", params).then(response => {
  //     console.log(response.data)
  //     navigate('/');
      
  //   })
  

  console.log(suppliers);
  console.log(data);

  const [isProductsShowVisible, setIsProductsShowVisible] = useState(false);
  const [isCartedProductsNewVisible, setIsCartedProductsNewVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

  const handleShow = (product) => {
    console.log("handleShow", product);
    setIsProductsShowVisible(true);
    setCurrentProduct(product);
  };

  const handleShowAddToCart = (product) => {
    console.log("handleShow", product);
    setIsCartedProductsNewVisible(true);
    setCurrentProduct(product);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsProductsShowVisible(false);
  };

  const handleCloseCPN = () => {
    console.log("handleClose");
    setIsCartedProductsNewVisible(false);
  };

  const handleUpdateProduct = (params, id) => {
    console.log('handling update product');
    axios.patch(`http://localhost:3000/products/${id}.json`, params).then(response => {
      console.log(response.data);
      setProducts(products.map(product => {
        if (product.id !== id) {
          return product;
        } else {
          return response.data;
        }
      }));
      handleClose();
    });
  };

  return (
    <main>
      <h1>Welcome to React!</h1>
      {/* <ProductsNew onCreate={handleCreateProduct}/> */}
      <ProductsIndex products={products} onShow={handleShow} onShowAddToCart={handleShowAddToCart} />
      <Modal show={isProductsShowVisible} onClose={handleClose}>
        <ProductsEdit product={currentProduct} onUpdateProduct={handleUpdateProduct} />
      </Modal>
      <Modal show={isCartedProductsNewVisible} onClose={handleCloseCPN}>
        <CartedProductsNew product={currentProduct} />
      </Modal>
    </main>
  );
}
