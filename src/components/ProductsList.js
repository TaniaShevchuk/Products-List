import { Component } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import Product from "./Product";
import "./../styles/components/Product.scss";

const onDragEnd = () => {};

class ProductsList extends Component {
  constructor(props) {
    super();

    this.state = {};
  }

  render() {
    const { productsList, handleDeleteProduct } = this.props;

    return (
      <DragDropContext onDragEnd={onDragEnd}>
        {productsList?.map((product) => (
          <div className="product-wrapper">
            <Droppable droppableId={"products"}>
              {(provided) => (
                <Product
                  key={product.id}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  product={product}
                />
              )}
            </Droppable>
            <button style={{ color: "red" }} onClick={handleDeleteProduct}>
              DELETE
            </button>
          </div>
        ))}
      </DragDropContext>
    );
  }
}

export default ProductsList;
