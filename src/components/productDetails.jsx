import React, { Component } from "react";

class ProductDetails extends Component {
  handleSave = () => {
    // Disable going back when clicking the back button
    // Often use with login that way when user clicks back button it doesn't go back to login page
    this.props.history.replace("/products");
  };

  render() {
    return (
      <div>
        <h1>Product Details - {this.props.match.params.id}</h1>
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

export default ProductDetails;
