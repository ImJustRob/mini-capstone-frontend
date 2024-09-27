import { Header } from "./Header";
import { ProductsPage } from "./ProductsPage";
import { Footer } from "./Footer";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { LogoutLink } from "./LogoutLink";

function App() {
  return (
    <div>
      <Header />
      <LogoutLink />
      <LoginPage />
      <SignupPage />
      <ProductsPage />
      <Footer />
    </div>
  )
}

export default App;