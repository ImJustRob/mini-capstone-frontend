import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export function ProductsNewPage({ onCreate }) {
  const navigate = useNavigate();
  
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('handling submit')
    const params = new FormData(event.target)
    axios.post("http://localhost:3000/recipes.json", params).then(response => {
      console.log(response.data)
      // window.location.href = "/"
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
         Supplier id: <input name="supplier id" type="text" />
       </div>
       <button type="submit">Create Product</button>
     </form>
   </div>
 );
}