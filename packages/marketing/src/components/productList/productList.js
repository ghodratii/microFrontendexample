import React from "react";
import { connect } from "react-redux";
import Product from "../product/product";
import { fetchProducts } from "../../redux/productList/productList.actions";
import "./productList.style.scss";

class ProductList extends React.Component {
  componentDidMount() {
    const { fetchProducts } = this.props;

    fetchProducts();
  }

  render() {
    const { productList } = this.props;

    return (
      <div id="home-articles" className="py-2">
        <div className="container">
          <div className="articles-container">
            {productList
              ? productList.map((item) => <Product key={item.id} item={item} />)
              : ""}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { producList } = state;

  const productList = producList.productList;

  return { productList };
};
const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
