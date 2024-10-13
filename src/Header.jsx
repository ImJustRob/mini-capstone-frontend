import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";


export function Header() {
  let authenticationLinks;
  if (localStorage.jwt === undefined) {   
    authenticationLinks = (
      <div>
        <a href="/login">Login</a> | 
        <a href="/signup">Signup</a>
      </div>
    )
  }  else {  
    authenticationLinks = (
      <LogoutLink />
    )
  }
    return (
      <header>
        <nav>
        <Link to="/">Home</Link> | 
        <Link to="/products/new">New Product</Link> | 
        <Link to="/products"> Products</Link> | 
        <Link to="/cart"> Cart</Link>
        </nav>
        {authenticationLinks}
      </header>
    )
  }