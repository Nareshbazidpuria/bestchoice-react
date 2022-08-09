import React from 'react';
import { Link } from "react-router-dom";
import s1 from '../img/s1.jpg'
import s2 from '../img/s2.jpeg'
import s3 from '../img/s3.jpg'
import s4 from '../img/s4.jpg'
import pp2 from '../img/pp2.jpg'
import pp3 from '../img/pp3.jpg'
import pp5 from '../img/pp4.jpg'
import pp6 from '../img/pp6.jpg'

const Home = () => {
    let rightNav;
    let menuItems;
    let logout;
    let navSec;
    let divNavUser;
    let inavuser;
    let spanTagUsrnm;
    let burger;
    let line;
    let login;
    let navLeftDiv;
    let userName;
    setTimeout(() => {
        rightNav = document.querySelector('.r');
        menuItems = document.getElementById('menuItems');
        logout = document.getElementById('logout');
        navSec = document.getElementById('navSec');
        divNavUser = document.getElementById('navUser');
        inavuser = document.getElementById('navuser');
        spanTagUsrnm = document.getElementById('usrnm');
        burger = document.getElementById('burger');
        login = document.getElementById('logIn');
        navLeftDiv = document.getElementById('navLeftDiv');
        userName = localStorage.getItem('userName');
        line = document.getElementsByClassName('line');
    }, 1000);

    const logOutFunc = () => {
        localStorage.removeItem('userName');
        menuItems.style.display = 'none';
        navSec.style.display = 'none';
        rightNav.classList.remove('r33');
        rightNav.classList.add('r22');
        deletElement();
        window.location.reload();
    }

    function deletElement() {
        if(!login){
            navSec.remove();
            divNavUser.remove();
            inavuser.remove();
            spanTagUsrnm.remove();
            logout.remove();
            document.getElementById('yourAccount').remove();
        }
    };

    const burgrFunc = () => {
        if (!menuItems.classList.contains('open')) {
            line[0].classList.add('l-1')
            line[1].classList.add('l-2')
            line[2].classList.add('l-3')
            line[1].style.opacity = '0'
            burger.classList.add('burger')
            menuItems.classList.add('open');
            window.addEventListener('click', (e) => {
                let classArr = Array.from(e.target.classList);
                if (!(classArr.includes('menuItems') || classArr.includes('menuOpen') || classArr.includes('burger') || classArr.includes('line') || classArr.includes('open') || classArr.includes('mbli') || classArr.includes('Higuys'))) {
                    closeMenuSideBar();
                }
            });
        }
        else {
            closeMenuSideBar();
        }
    }
    function closeMenuSideBar() {
        line[0].classList.remove('l-1')
        line[1].classList.remove('l-2')
        line[2].classList.remove('l-3')
        burger.classList.remove('burger')
        line[1].style.opacity = '1'
        menuItems.classList.remove('open');
    }
    setInterval(() => {
        if (userName) {
            navLeftDiv.style.display = 'none';
            navSec.classList.remove('navSec');
            spanTagUsrnm.innerHTML = userName;
            login ? login.remove() : console.log('');
        }
        else {
            deletElement()
        }
    }, 1000);

    return (
        <>
            <div>
                <nav id="mainNavbar" className="nav1">
                    <div id="burger" className="burger-1" onClick={burgrFunc}>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                    <div id="navLeftDiv" className="l">
                        <span>Welcome to my E-Shop </span><Link to="/login">Login</Link> or <Link
                            to="/register">Register</Link>
                    </div>
                    <div id="navSec">
                        <div id="navUser">
                            <i id="navuser" className="fa fa-user"></i>
                            <div id="usrnm"></div>
                        </div>
                    </div>
                    <div className="nav2-center">
                        <h1>Best <span>Choice</span></h1>
                        <p>Get Your Best Choice Here</p>
                    </div>
                    <div id="menuItems" className="menuItems menuOpen">
                        <div id="hiGuys" className="Higuys">Welcome To Best Choice</div>
                        <ul id="menuUl">
                            <li className="mbli">Best Sellers</li>
                            <li className="mbli">New Releases</li>
                            <li className="mbli">Electronics</li>
                            <li className="mbli">Men's Fashion</li>
                            <li className="mbli">Women's Fashion</li>
                            <li className="mbli">eBooks</li>
                            <li className="mbli">Beauty</li>
                            <li className="mbli">Health</li>
                            <li className="mbli">Grocery</li>
                            <li id="yourAccount" className="mbli">Your Account</li>
                            <li id="logout" className="mbli" onClick={logOutFunc}>Logout<i className="fa fa-sign-out" style={{ "fontSize": "25px" }}></i></li>
                            <li id="logIn" className="mbli"><Link to="/login">Login<i className="fa fa-sign-in"
                                style={{ "fontSize": "25px" }}></i></Link></li>
                        </ul>
                    </div>
                    <div id="links" className="r r22">
                        <a href="https://www.facebook.com/Best-Choice-100426659169984/?ref=pages_you_manage" target="_blank" rel="noreferrer"><i
                            className="fa fa-facebook" alt="facebook"></i></a>
                        <a href="https://www.instagram.com/_best__choice__/" target="_blank" rel="noreferrer"><i className="fa fa-instagram"></i></a>
                        <a href="http://api.whatsapp.com/send?phone=+917837625927&text=Welcome To Best Choice" target="_blank" rel="noreferrer"><i
                            className="fa fa-whatsapp"></i></a>
                        <a href="https://twitter.com/1907935S" target="_blank" rel="noreferrer"><i className="fa fa-twitter"></i></a>
                        <a href="https://youtube.com/channel/UCLtecBD-QO8eJZbNdfEn7OA" target="_blank" rel="noreferrer"><i
                            className="fa fa-youtube"></i></a>
                    </div>
                </nav>
                <nav className="nav3">
                    <ul>
                        <li><a href="/"><i className=" fa fa-home"></i>Home</a></li>
                        <li><a href="/"><i className=" fa fa-user"></i>Boy</a></li>
                        <li><a href="/"><i className=" fa fa-users"></i>Accessories</a></li>
                        <li><a href="/"><i className=" fa fa-anchor"></i>Toys<i className="fa fa-caret-down"></i></a>
                            <ul>
                                <li><a href="/"><i className="fa fa-clipboard"></i>Wooden</a></li>
                                <li><a href="/"><i className="fa fa-circle-o"></i>Plastic</a></li>
                                <li><a href="/"><i className="fa fa-gavel"></i>Iron</a></li>
                            </ul>
                        </li>
                        <li><a href="/"><i className=" fa fa-calendar-check-o"></i>Special</a></li>
                        <li><a href="/"><i className=" fa fa-search"></i>Find</a></li>
                    </ul>
                </nav>
                <section className="featured">
                    <div className="featured-text">
                        <button>Coming Soon</button>
                        <h2>Our New Designs</h2>
                    </div>
                </section>
                <section className="latest">
                    <div className="product-intro">
                        <h1>New <span>Arrivals</span></h1>
                        <p>Loren ipsum, dolor sit amet consectetor adipisicing elit. Incidunt!</p>
                    </div>
                    <div className="card-container">
                        <div className="card">
                            <div>
                                <img src={s1} alt="" />
                            </div>
                            <h1>Branded Shoes</h1>
                            <span>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </span>
                            <p>$500.00</p>
                            <button>Add to Cart</button>
                        </div>
                        <div className="card">
                            <div>
                                <img src={s2} alt="" />
                            </div>
                            <h1>Branded Shoes</h1>
                            <span>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </span>
                            <p>$500.00</p>
                            <button>Add to Cart</button>
                        </div>
                        <div className="card">
                            <div>
                                <img src={s3} alt="" />
                            </div>
                            <h1>Branded Shoes</h1>
                            <span>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </span>
                            <p>$500.00</p>
                            <button>Add to Cart</button>
                        </div>
                        <div className="card">
                            <div>
                                <img src={s4} alt="" />
                            </div>
                            <h1>Branded Shoes</h1>
                            <span>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </span>
                            <p>$500.00</p>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                    <div className="card-container">
                        <div className="card">
                            <div>
                                <img src={s1} alt="" />
                            </div>
                            <h1>Branded Shoes</h1>
                            <span>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </span>
                            <p>$500.00</p>
                            <button>Add to Cart</button>
                        </div>
                        <div className="card">
                            <div>
                                <img src={s2} alt="" />
                            </div>
                            <h1>Branded Shoes</h1>
                            <span>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </span>
                            <p>$500.00</p>
                            <button>Add to Cart</button>
                        </div>
                        <div className="card">
                            <div>
                                <img src={s3} alt="" />
                            </div>
                            <h1>Branded Shoes</h1>
                            <span>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </span>
                            <p>$500.00</p>
                            <button>Add to Cart</button>
                        </div>
                        <div className="card">
                            <div>
                                <img src={s4} alt="" />
                            </div>
                            <h1>Branded Shoes</h1>
                            <span>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </span>
                            <p>$500.00</p>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </section>
                <section className="latest">
                    <div className="product-intro">
                        <h1>Popular <span>Products</span></h1>
                        <p>Loren ipsum, dolor sit amet consectetor adipisicing elit. Incidunt!</p>
                    </div>
                    <div className="card-container">
                        <div className="card">
                            <div>
                                <img src={pp6} alt="" />
                            </div>
                            <h1>Branded Shoes</h1>
                            <span>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </span>
                            <p>$500.00</p>
                            <button>Add to Cart</button>
                        </div>
                        <div className="card">
                            <div>
                                <img src={pp2} alt="" />
                            </div>
                            <h1>Branded Shoes</h1>
                            <span>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </span>
                            <p>$500.00</p>
                            <button>Add to Cart</button>
                        </div>
                        <div className="card">
                            <div>
                                <img src={pp3} alt="" />
                            </div>
                            <h1>Branded Shoes</h1>
                            <span>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </span>
                            <p>$500.00</p>
                            <button>Add to Cart</button>
                        </div>
                        <div className="card">
                            <div>
                                <img src={pp5} alt="" />
                            </div>
                            <h1>Branded Shoes</h1>
                            <span>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </span>
                            <p>$500.00</p>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </section>
                <footer>
                    <div>
                        <h1>Best <span>Choice</span></h1>
                        <p>Get Your Best Choice Here</p>
                    </div>
                    <div>
                        <i className="fa fa-facebook"></i>
                        <i className="fa fa-instagram"></i>
                        <i className="fa fa-whatsapp"></i>
                        <i className="fa fa-twitter"></i>
                        <i className="fa fa-youtube"></i>
                        <p><br />Design by <i>Naresh Bazidpuria</i></p>
                    </div>
                    <div>
                        <p>
                            Copyright &copy; <span id="yr">2022</span> All Rights Reserved
                        </p>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Home