
import {GET_ITEMS, ADD_ITEMS, DELETE_ITEM, TOGLLE_NAV, CLOSE_NAVBAR, 
    BANER_CLOSE, DECREASE_ITEM, INCREASE_ITEM, TOTAL_ITEMS, DETAILS} from './types';

// for getting the initial showing items
export const getItems = ()=>{
    return{
        type:GET_ITEMS
    }
}

// for apearing dissapearing the navbar
export const toggleNav = ()=>dispatch=>{
    console.log('clicked dude');
  
dispatch({
    type:TOGLLE_NAV
})
}

// for closing navbar if is open
export const closeNavbar = ()=>dispatch=>{
    console.log('clicked dude');
  
dispatch({
    type:CLOSE_NAVBAR
})
}

// for adding items to cart
export const AddToCart = (id)=>dispatch=>{

dispatch({
    type:ADD_ITEMS,
    payload:id
})


}

// for closing the banner after specific time
export const bannerClose = ()=>dispatch=>{
    dispatch({
        type:BANER_CLOSE,
     })
 }

//  for deleting the items from the cart
export const deleteItem = (id)=>(dispatch)=>{
  console.log(`item  deleted: ${id}`);
  dispatch({
      type:DELETE_ITEM,
      payload:id
  })
}

// for increasing item, inside the cart
export const increaseItem = (id)=>(dispatch)=>{
    console.log(`increase item ${id}`);
       dispatch({
         type:INCREASE_ITEM,
         payload:id
       })
   }







// for decreasing item, inside the cart
export const decreaseItem = (id)=>(dispatch)=>{
 console.log(`decrease item ${id}`);
    dispatch({
      type:DECREASE_ITEM,
      payload:id
    })
}


// for getting total price of items, inside the cart
export const getTotals = ()=>(dispatch)=>{
       dispatch({
         type:TOTAL_ITEMS,
       })
   }


   // for getting item details info
export const getDetails = ()=>(dispatch)=>{
    dispatch({
      type:DETAILS,
    
    })
}




