import React, { Component } from 'react';
import Title from "../Title";
import CartComponent from "./CartComponent";
import EmptyCart from "./EmptyCart";
import {ProductConsumer} from "../Context";
import CartList from "./CartList";
import CartTotal from "./CartTotal";

export default class Cart extends Component {
 render() {
  return (
   <section>
    <ProductConsumer>
       {value => {
        const {cart} = value;
        if(cart.length > 0){
         return (<>
            <Title name = "Your" title="Cart"/>
            <CartComponent/>
            <CartList value={value}/>
            <CartTotal value = {value} history={this.props.history}/>
         </>)}else{
          return <EmptyCart/>
         }
       }}
    </ProductConsumer>
   </section>
  )
 }s
}
