import React from 'react'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import { TiShoppingCart } from "react-icons/ti";
const Nav = () => {
    const localData=JSON.parse(localStorage.getItem('cartData'))
          console.log(localData,"localData");
    const {totalQuantities} = useSelector(state => state.CartReducer)
    console.log(totalQuantities,'nav');
    let cartQuantities
    if (localData !== null) {
        cartQuantities=localData.totalQuantities;
        
    }
    else{
        cartQuantities=totalQuantities;
    }
    return (
        <div className="nav">
            <div className="container">
                <div className="nav__container">
                    <div className="nav__left">
                        <Link to="/"><img src="/images/logo1.png" alt="logo"/></Link>
                    </div>
                    
                    <div className="nav__right">
                        <Link to="/cart">
                            <div className="basket">
                             <TiShoppingCart className="cart-icon" />
    <span>{cartQuantities}</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav
