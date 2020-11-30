import { Component } from "react";
import { Draggable } from "react-beautiful-dnd";

class Product extends Component {
  constructor(props) {
    super();

    this.state = {};
  }

  render() {
    const { product } = this.props;

    return (
      <Draggable draggableId={"product"} index={product.id}>
        {(provided) => {
          return (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <div>{product.lastModifyDate}</div>
              <div>{product.name}</div>
              <div>{product.status}</div>
              <div>{product.priority}</div>
            </div>
          );
        }}
      </Draggable>
    );
  }
}

export default Product;
