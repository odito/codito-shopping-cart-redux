import React,{useEffect} from 'react';
import './Details.css';
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import {getItems, AddToCart} from '../actions/itemAction';
import {Link} from 'react-router-dom';


 function Details(props) {
const {id}=useParams();


useEffect(()=>{
    props.getItems();
},[])

let detProducts = props.item.items.find((item)=>item._id===parseInt(id));

// console.log(useParams());

console.log(props.item.items);

    return (
        <div className="details">
            <div className="inside-container">
              <h3>product details</h3>
              <div className="details-center">
                  <div className="details-img">
                    <img src={`/${detProducts.img}`} alt=""/>
                  </div>

                  <div className="details-info">
             <h4 className="details-title">{detProducts.title}</h4>
                    <p className="details-text-info">{detProducts.details}</p>

         <p className="details-price">price: <span>${detProducts.price}</span></p>

                    <div className="details-btn">
                        <Link to='/products'><button>Back to products</button></Link>
                        <button onClick={()=>props.AddToCart(detProducts._id)}>Add to cart</button>
                    </div>
                  </div>
              </div>
            </div>
           
            
        </div>
    )
}

const mapStateToProps=(state)=>({
    item:state.item
})


export default connect(mapStateToProps,{getItems,AddToCart})(Details);