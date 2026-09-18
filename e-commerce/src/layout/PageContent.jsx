import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import ContactPage from "../pages/ContactPage";
import TeamPage from "../pages/TeamPage";
import AboutPage from "../pages/AboutPage";
import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";
import ShoppingCartPage from "../pages/ShoppingCartPage";
import CreateOrderPage from "../pages/CreateOrderPage";
import PaymentPage from "../pages/PaymentPage";
import PreviousOrdersPage from "../pages/PreviousOrdersPage";


function PageContent() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path="/shop/:gender/:categoryName/:categoryId"
          component={ShopPage}
        />
        <Route exact path="/shop" component={ShopPage} />
        <Route
          exact
          path="/shop/:gender/:categoryName/:categoryId/:productNameSlug/:id"
          component={ProductDetailPage}
        />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/team" component={TeamPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/cart" component={ShoppingCartPage}/>
        <Route exact path="/create-order" component={CreateOrderPage}/>
        <Route exact path="/create-order/payment" component={PaymentPage}/>
        <Route exact path="/orders" component={PreviousOrdersPage}/>
      </Switch>
    </main>
  );
}

export default PageContent;