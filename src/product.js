import React, { Component } from 'react';

import '../styles/Product.css';

class Product extends Component {

  constructor (props) {
    super (props);

    this.state = {
      style: "product"
    }
  }

  handleClick = () => {
    if (this.state.style == "product") {
      this.setState ({style: "product-active"});
      this.props.onCalc(this.props.product.price);
    }
    else  {
      this.setState ({style: "product"});
      this.props.onCalc(0 - this.props.product.price);
    }
  }

  render() {
    return (
      <div className="container">
        <div className={this.state.style} onClick={this.handleClick}>
          <p>Name: {this.props.product.name}</p>
          <h4>Price: {this.props.product.price}</h4>
        </div>
      </div>

    );
  }
}

export default Product;