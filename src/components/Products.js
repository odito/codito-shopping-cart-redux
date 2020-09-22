import React,{useState,useEffect} from 'react';
import Product from './Product';
// import {Data} from '../components/Data';
import './Products.css';
import {connect} from 'react-redux';
import {getItems,AddToCart, bannerClose} from '../actions/itemAction';




 function Products(props) {

useEffect(()=>{

props.getItems();

},[])



const AddToCart=(id)=>{

props.AddToCart(id);
setTimeout(()=>{
  props.bannerClose();
},2000)



}
   const {items}=props.item;
    // const [state,setState]=useState(Data)
    console.log(props.item.items.isInCart);

    return (

        <div className="products">
            <div className="inside-container">
            <h3>Products</h3>
            <div className="products-center">
            {items.map(product=><Product key={product._id} data={product} AddToCart={()=>AddToCart(product._id)} isInCart={product.isInCart} />)}
            </div>
            </div>
         
        </div>
    )
}

const mapStateToProps=(state)=>({
    item:state.item
})

export default  connect(mapStateToProps,{getItems,AddToCart,bannerClose})(Products);