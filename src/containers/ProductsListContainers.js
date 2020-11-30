import { Component } from "react";
import ProductsList from "../components/ProductsList";

import { productStatuses } from "../constants/Product";

import "./../styles/containers/ProductListContainer.scss";

class ProductsListContainer extends Component {
  constructor(props) {
    super();

    this.state = {
      newProductName: "",
      productsList: JSON.parse(localStorage.getItem("productsList")) || [],
    };
  }

  handleProductInputChange = ({ target }) => {
    const newProductName = target.value;

    this.setState({ newProductName });
  };

  handleAddProduct = () => {
    const { newProductName, productsList } = this.state;

    if (!!newProductName.trim()) {
      const newProduct = {
        id: productsList?.length || 0,
        name: newProductName,
        priority: 2,
        status: productStatuses.STATUS_RAN_OUT,
        lastModifyDate: new Date().toLocaleDateString(),
      };

      productsList.push(newProduct);
      this.setState({ newProductName: "" });

      localStorage.setItem("productsList", JSON.stringify(productsList));
    }
  };

  handleDeleteProduct = (productId) => {
    const { productsList } = this.state;

    productsList.splice(productId, 1);
    this.setState({ productsList });

    localStorage.setItem("productsList", JSON.stringify(productsList));
  };

  render() {
    const { productsList } = this.state;

    return (
      <div className="product-list-container">
        <div className="add-new-product-wrapper">
          <input
            className="input-name-field"
            placeholder="Add new product"
            onChange={this.handleProductInputChange}
          />
          <button onClick={this.handleAddProduct}>Add</button>
        </div>
        <ProductsList
          productsList={productsList}
          handleDeleteProduct={this.handleDeleteProduct}
        />
      </div>
    );
  }
}

export default ProductsListContainer;
