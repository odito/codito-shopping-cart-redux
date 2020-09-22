import React,{useEffect} from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import logo from '../images/logo.png'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {toggleNav, closeNavbar} from '../actions/itemAction';



function Navbar(props) {

// const toggle = ()=>{
//  toggleNav();
 
// }

// useEffect(() => {

// toggleNav();

// }, [])

// console.log(props.item.isOpen);
// console.log(props.item.cart.length);


    return (
    
        <div className="navbar ">
            <nav className="nav">
              <div className="logoBtn">
              <Link to="/"><img src={logo} alt=""/> 
                   <p><span>C</span> lothes</p>   
                 </Link>

                 <div className="shopping-icon mobile-shopping">
              <ShoppingCartIcon className="icon" /><span>{props.item.cart.length}</span>
                </div>

                 <div className="hamburger" onClick={props.toggleNav} >
                   <div className="bar"></div>
                   <div className="bar"></div>
                   <div className="bar"></div>
                 </div>
              </div>

        <div className="links">
            {/* navbar menu */}
           <div className={props.item.isOpen?"new-links-navigation ":"links-navigation links-navigation"}>
               <div className="nav-btn" >
                  <span onClick={props.closeNavbar}>x</span>
               </div>
           <ul className="links-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/contact">Contact</Link></li> 
                 
            </ul>
         </div> 
         {/*end of navbar menu */}

        </div>
        <Link to="/cart"> <div className="shopping-icon">
    Cart<ShoppingCartIcon className="icon" /><span>{props.item.cart.length}</span>
              </div>
          </Link>
            </nav>
        </div>
    )
}



const mapStateToProps=(state)=>({
  item:state.item
})

export default connect(mapStateToProps,{toggleNav, closeNavbar})(Navbar)
