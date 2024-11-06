import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";


export function Header() {
  let authenticationLinks;
  if (localStorage.jwt === undefined) {   
    authenticationLinks = (
      <div className="bg-blue-500 py-2 text-center ">
        <a className="hover:bg-gray-400 py-2 px-2 rounded-lg" href="/login">Login</a> | 
        <a className="hover:bg-gray-400 py-2 px-2 rounded-lg"  href="/signup">Signup</a>
      </div>
    )
  }  else {  
    authenticationLinks = (
      <LogoutLink />
    )
  }
    return (
      <header>
        <nav className="bg-blue-500 py-2 text-center">
        <Link className="hover:bg-gray-400 py-2 px-2 rounded-lg"  to="/">Home</Link> | 
        <Link className="hover:bg-gray-400 py-2 px-2 rounded-lg"  to="/products/new">New Product</Link> | 
        <Link className="hover:bg-gray-400 py-2 px-2 rounded-lg"  to="/products"> Products</Link> | 
        <Link className="hover:bg-gray-400 py-2 px-2 rounded-lg"  to="/cart"> Cart</Link> | 
        <Link className="hover:bg-gray-400 py-2 px-2 rounded-lg"  to="/contact"> Contact </Link>
        </nav>
        {authenticationLinks}
      </header>
    )
  }