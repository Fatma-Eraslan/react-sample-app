import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import alertify from "alertifyjs";
import { Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";
import CartList from "./CartList";

export default class App extends Component {
  state = { currentCategory: "", products: [], cart: [] }; //cart sepet manasında

  componentDidMount() {
    this.getProducts();
  }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch()
      .then((response) => response.json()) // gelen response u json a döndür.
      .then((data) => this.setState({ products: data }));
  };
  addToCard = (product) => {
    // alert(product.productName);
    let newCart = this.state.cart;
    var addedItem = newCart.find((c) => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart });
    alertify.success(product.productName + "added to cart!", 2);
  };

  render() {
    let productInfo = { title: "Product List", deneme: "la la" };

    return (
      <div>
        <Container>
          <Navi cart={this.state.cart} /> {/*send to cart info*/}
          <Row>
            <Col xs="3">
              <CategoryList title="Category List" />
            </Col>
            <Col xs="9">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <ProductList
                    {...props}
                      products={this.state.products}
                      addToCard={this.addToCard}
                      currentCategory={this.state.currentCategory}
                      // changeCategory={this.changeCategory}
                      info={productInfo}
                    />
                  )}
                />
                <Route exact path="/cart" render={(props) => (
                    <ProductList
                    {...props}
                      cart={this.state.cart}
                      removeFromCart={this.removeFromCart}                     
                    />
                  )} />
                <Route exact path="/" component={NotFound} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
