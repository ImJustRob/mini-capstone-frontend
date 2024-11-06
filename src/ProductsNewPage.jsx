import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export function ProductsNewPage() {
  const navigate = useNavigate();
  
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('handling submit')
    const params = new FormData(event.target)
    axios.post("http://localhost:3000/products.json", params).then(response => {
      console.log(response.data)
      navigate('/');
      
    })
  }

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
       <button className='bg-gray-400 hover:bg-gray-500 py-1 px-1 rounded-lg' type="submit">Create Product</button>
     </form>
   </div>
 );
}