 export function ProductsNew({ onCreate }) {

       const handleSubmit = (event) => {
         event.preventDefault();
         const params = new FormData(event.target);
         onCreate(params, () => event.target.reset());
       };

    return (
      <div>
        <h1>New Product</h1>
        <form onSubmit={handleSubmit}>
          <div>
            Name: <input name="name" type="text" />
          </div>
          {/* <div>
            Image: <input name="image" type="text" />
          </div> */}
          <div>
            description: <input name="description" type="text" />
          </div>
          <div>
            price: <input name="price" type="text" />
          </div>
          <div>
            Supplier id: <input name="supplier_id" type="text" />
          </div>
          <button type="submit">Create Product</button>
        </form>
      </div>
    );
  }