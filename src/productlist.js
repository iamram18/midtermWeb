import React, { Component } from 'react';

import '../styles/ProductList.css';

import Product from './Product.js'

class ProductList extends Component {

  constructor (props) {
    super (props);

    this.state = {
      list: [
          {
              name: "Milk",
              price: 300,
          },
          {
              name: "Bread",
              price: 100,
          },
          {
              name: "Ice-Cream",
              price: 200,
          },
          {
              name: "Candy",
              price: 200,
          },
      ],
      sum: 0,
    }
  }

  handleCalc = (cnt) => {
    let num = this.state.sum + cnt;
    this.setState({sum: num});
  }

  render() {
    const listAPI = this.state.list.map((cur, index) => {
      return(
        <div key={index}>
          <Product product={cur} onCalc={this.handleCalc}/>
        </div>
      );
    });

    return (
      <div className="product-list-component">
        <h1>Products</h1>
        <ul className="product-list">
          {listAPI}
        </ul>
        <h1>Total: {this.state.sum}</h1>
      </div>

    );
  }
}

export default ProductList;