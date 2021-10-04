import React from "react";
import { connect } from "react-redux";
import Product from "../product/product";
import { fetchProducts } from "../../redux/productList/productList.actions";
import "./productList.style.scss";

class ProductList extends React.Component {
  componentDidMount() {
    const { fetchProducts, selectItems } = this.props;
    if (selectItems.length === 0)

      fetchProducts();
  }
  

  render() {
    const { productList, selectItems } = this.props;
    // const showProduct = productList?.filter((item, key) => {
    //   if (key < 12) return item;
    // })

    return (
      <div id="home-articles" className="py-2">
        <div className="container">
          <div className="articles-container">
            {productList &&
              productList.map((item) => {
                const checkPro = selectItems.some(
                  value => { return value.id == item.id });
                if (checkPro)
                  return <Product key={item.id} item={item} compare={false} />
                else return <Product key={item.id} item={item} compare={true} />

              })

              //  selectItems.includes(item)?
              // <Product key={item.id} item={item} compare={false}/>
              // :<Product key={item.id} item={item} compare={true}/>)
            }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { producList, selectedProducts } = state;

  const productList = producList.productList;
  const selectItems = selectedProducts.selectItems;

  return { productList, selectItems };
};


const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
