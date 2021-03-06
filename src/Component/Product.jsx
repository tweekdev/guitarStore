import React, { Component } from 'react'
import {Link} from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import {ProductConsumer} from "../Component/Context";

export default class Product extends Component {
 render() {
  const {id, title, img, price, inCart} = this.props.products
  return (
   <ProductWrapper className = "col-9 mx-auto col-md-6 col-lg-3 my-3">
      <div className="card">
        <ProductConsumer>
            {
              value => (
                 <div className="img-container p-5"
                    onClick = {() => value.handleDetail(id)}>
                  <Link to="/details">
                     <img src={img} alt="Product Pic" className="card-img-top"/>
                  </Link>
                  <button
                    className = "cart-btn" 
                      disabled={inCart ? true : false}
                      onClick ={() => {
                        value.openModel(id);
                        value.addToCart(id);}
                      }
                      >
                    {
                      inCart 
                      ? (<p className = "text-capitalize mb-0" disabled>{" "}in cart</  p>)
                      : (<i className="fas fa-cart-plus"/>)
                    }
                  </button>
                </div>                                                                     
              )
            } 
            </ProductConsumer>
            {/* cart footer */}
            <div className="card-footer d-flex justify-content-between">
              <p className="align-self-center mb-0">{title}</p>
                <h6 className="text-blue mb-0">{" "}
                  <span className="mr-1">Rs</span>
                   {price}
                </h6>
         </div> 
      </div>
   </ProductWrapper>
  )
 }
}

Product.propTypes = {
  products: PropTypes.shape({
    title: PropTypes.string,
    img: PropTypes.string, 
    price: PropTypes.number, 
    inCart: PropTypes.bool,
    id: PropTypes.number
 }).isRequired
}

const ProductWrapper = styled.section`
  .card{
    border-color: transparent;
    transition: all 0.5s linear;
  }

  .card-footer{
   background: transparent;
   border-top: transparent;
   transition: all 0.5s linear;
  }
  &:hover{
   .card{
    border: 0.04em solid black(0,0,0,0.2);
    box-shadow: 2px 2px 5px 0 (0,0,0,0.2);
   }
  }
   .card-footer{
    background: rgba(247,247,247);
   }
   .img-container{
    position: relative;
    overflow: hidden;
   }
   .card-img-top{
    transition: all 0.5s ease-in-out;
   }
   .img-container:hover .card-img-top{
     transform: scale(1.2)
   }
   .cart-btn{
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2em 0.4em;
    background: var(--mainBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4em;
    border-radius: 0.5em 0 0 0;
    transform: translate(100%, 100%);
    transition: all 0.5s ease-in-out;
  }

  .img-container:hover .cart-btn{
   transform: translate(0,0)
  }

  .cart-btn:hover{
   color: var(--lightBlue);
   transition: all 0.5s ease-in-out;
  }
`;