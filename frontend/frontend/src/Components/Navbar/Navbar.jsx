import React, { useState, setShowDropdown, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/CM logo white.png';
import cart from '../Assets/cart_icon.png';
import profile from '../Assets/profile_icon.png';
import wish from '../Assets/wishlist_icon.png';
import search from '../Assets/search.png';

const Navbar = () => {

    const [menu,setmenu] = useState("profile");

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt=""/>
            </div>
            
            <div className='nav-search'>
                <input type='text' placeholder='Search Campus Marketplace...'/>
                <img src={search} alt="Search" className='search-icon' onClick={handleSearch}/>
            </div>
            <ul className='nav-menu'>
                <li>
                    <Link to="/profile" onClick={() => {setmenu("profile")}} className={menu === "profile"?"active":""} >
                    <img src={profile} alt="Profile"/>
                    </Link>
                </li>
                <li>
                    <Link to="/wish" onClick={()=>{setmenu("wish")}} className={menu === "wish"?"active":""} >
                    <img src={wish} alt="Wish"/>
                    </Link>
                </li>
                <li>
                    <Link to="/cart" onClick={()=>{setmenu("cart")}} className={menu === "cart"?"active":""} >
                    <img src={cart} alt="Cart"/>
                    </Link>
                </li>
            </ul>
                <div className="nav-cart-count">1</div>
            
        </div>  
)}

const Navbar2 = () => {

    const [showDropdown, setShowDropdown] = useState(false);
    const categories = {
        Products:["Beauty","Clothing","Dorm Essentials","Electronics","Jewelry","Office & School Supplies","Shoes","Textbooks"],
        Services:["Hair","Makeup","Nails","Promotions","Tutoring"]
    };

    const handleDropdownToggle = () => {
        setShowDropdown(!showDropdown);
    };

    return ( 
        <div className='navbar2'>
                <li className='dropdown' onClick= {() => setShowDropdown(!showDropdown)}>
                    Categories {showDropdown && (
                        <ul className='dropdown-menu'>
                            {Object.keys(categories).map((mainCategory, index) => (
                                <li key={index} className="main-category">
                                    {mainCategory}
                                    <ul className='sub-menu'>
                                        {categories[mainCategory].map((category, subIndex) => (
                                            <li key={subIndex} onClick={ () => handleCategorySelect(category)}>
                                            <Link to={`/products/${category}`} onClick={handleDropdownToggle} style={{ textDecoration: 'none', color: 'white' }}>{category}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>  
        </div>
);}

const handleSearch = () =>{
    console.log('Search clicked');
}

const handleCategorySelect = (category) => {
    console.log('Selected Category:', category);
};

const App = () => {
    return(
        <div>
            <Navbar/>
            <Navbar2/>
        </div>
    )
}

export default App
