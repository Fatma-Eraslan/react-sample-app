import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";

export default class App extends Component {
  state = { currentCategory: "" , products:[]};

  componentDidMount(){
    this.getProducts();
  }

  changeCategory = category => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id)
  };

  getProducts = categoryId => {
    let url="http://localhost:3000/products";
    if(categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch()
      .then(response => response.json()) // gelen response u json a döndür.
      .then(data=> this.setState({ products: data }));
  };

  render() {
    let productInfo = { title: "Product List", deneme: "la la" };

    return (
      <div>
        <Container>
          <Row>
            <Navi />
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList title="Category List" />
            </Col>
            <Col xs="9">
              <ProductList
              products={this.state.products}
                currentCategory={this.state.currentCategory}
                // changeCategory={this.changeCategory}
                info={productInfo}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
