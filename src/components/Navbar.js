import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const { userReducer } = useSelector(state => state);
    const state = useSelector(state => state.handleCart);
    const dispatch = useDispatch();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    let userEmail = userReducer.user;
    let userName = userEmail ? userEmail.split('@')[0] : null;

    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark  sticky-top">

            <div class="container">
                <Link class="navbar-brand fw-bold fs-4 px-2" to="/">CUSTOM MINIAX</Link>
                <button class="navbar-toggler" type="button" onClick={toggleMenu}>
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
                    <ul class="navbar-nav m-auto my-2 text-center">
                        <li class="nav-item">
                            <Link class="nav-link btn text-white mb-2 fw-bold mr-1" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link btn text-white fw-bold mr-1" to="/product">Products</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link btn text-white fw-bold mr-1" to="/about">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link btn  text-white fw-bold mr-2" to="/contact">Contact</Link>
                        </li>
                        {/* <li class="nav-item">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2" />
                                <span class="input-group-text" id="basic-addon2"><i class="fa fa-search"></i></span>
                            </div>
                        </li> */}
                    </ul>

                    <div class="buttons text-center d-flex justify-content-end">
                        {!userName && (
                            <>
                                <Link to="/login" class="btn  text-white btn-outline-light fw-bold m-2"><i class="fa fa-sign-in-alt mr-1"></i> Login</Link>
                                <Link to="/register" class="btn btn-outline-success text-white fw-bold m-2"><i class="fa fa-user-plus mr-1"></i> Register</Link>
                            </>
                        )}
                        {userName && (
                            <>
                                <NavLink to="/cart" className='btn btn-outline-success border mr-2 fw-bold'><i className="fa fa-cart-shopping fw-bold mr-1"></i>  ({state.length}) </NavLink>

                                {/* <NavLink to="/Order" class='btn btn-outline-success  border mr-2 fw-bold' onClick={() => setIsMenuOpen(false)}>Orders</NavLink> */}

                                <div class="dropdown">
                                    <button class='btn btn-outline-light border fw-bold  dropdown-toggle ' onClick={toggleMenu}>
                                        <i class="fa fa-user mr-1"></i>
                                        {userName}
                                    </button>
                                    <div class={`dropdown-menu ${isMenuOpen ? 'show' : ''}`}>
                                        <button class='dropdown-item' onClick={() => setIsMenuOpen(false)}>Orders</button>
                                        <button class="dropdown-item" onClick={() => dispatch({ type: "LOGOUT" })}>Logout</button>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;