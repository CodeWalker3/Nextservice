import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Forma_pagamento(){
    return(
        <>
        <body>
{/* 
<!-- header section starts  -->
 */}
<header className='header'>

    <a href="index.html" className='logo'><img src="image/logo.png" alt="" width="90"/></a>

{/*     <nav class="navbar">
        <a href="index.html">Início</a>
        <a href="cardapio.html">Cardápio</a>
        <a href="#">Quem Somos</a>
    </nav>
 */}
    <div className='icons'>
        <div className='fas fa-bars' id="menu-btn"></div>
        <div className="fas fa-search" id="search-btn"></div>
        <div className="fas fa-shopping-cart" id="cart-btn"></div>
        <div className="fas fa-user" id="login-btn"></div>
    </div>

    <form action="" className="search-form">
        <input type="search" id="search-box" placeholder="search here..."/>
        <label htmlFor="search-box" className="fas fa-search"></label>
    </form>



    <form action="" className="login-form">
        <h3>login now</h3>
        <input type="email" placeholder="your email" className="box"/>
        <input type="password" placeholder="your password" className="box"/>
        <p>forget your password <a href="#">click here</a></p>
        <p>dont have an account <a href="#">create now</a></p>
        <input type="submit" value="login now" className="btn"/>
    </form>

</header>

<div className='container'>
    <div className='window'>
        <div className='order-info'>
            <div className='order-info-content'>
                <h2>Order Summary</h2>
                <div className='line'></div>
                <table className='order-table'>
                    <tbody>
                        <tr>
                            <td><img src='image/pizza.jpg' className='full-width'></img>
                            </td>
                            <td>

                                <span className='thin small'>Pizza Grande 2 queijos<br/></span>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                <div className='price'>R$30,00</div>
                            </td>
                        </tr>
                    </tbody>

                </table>
                <div className='line'></div>




                <div className='total'>
                   {/*  <span style='float:left;'>
              TOTAL
            </span>
                    <span style='float:right; text-align:right;'>
              
              R$30,00
            </span> */}
                </div>
            </div>
        </div>
        <div className='credit-info'>
            <div className='credit-info-content'>
                <table className='half-input-table'>
                    <tr>
                        <td>Please select your card: </td>
                        <td>
                            <div className='dropdown' id='card-dropdown'>
                                {/* onclick="event.target.parentNode.btn('current-card');" */}
                                <div  className='dropdown-btn' id='current-card'>Visa</div>
                                <div className='dropdown-select'>
                                    <ul>
                                        <li>Master Card</li>
                                        <li>American Express</li>
                                    </ul>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>

                <img src='https://dl.dropboxusercontent.com/s/ubamyu6mzov5c80/visa_logo%20%281%29.png' height='80' className='credit-card-image' id='credit-card-image'></img>
                Número do Cartão
                <input className='input-field'></input>
                Titular do Cartão
                <input className='input-field'></input>
                <table className='half-input-table'>
                    <tr>
                        <td> Validade
                            <input className='input-field'></input>
                        </td>
                        <td>CVC
                            <input className='input-field'></input>
                        </td>
                    </tr>
                </table>
                <button className='pay-btn'>Finalizar Compra</button>

            </div>

        </div>
    </div>
</div>



<section className="footer">

    <div className="box-container">

        <div className="box">
            <div className="footer-logo container-fluid">
                <a href="#" className="logo"><img src="image/logo.png" alt="" width="90"/></a>
            </div>

            <div className="share">
                <a href="#" className="fab fa-facebook-f"></a>
                <a href="#" className="fab fa-twitter"></a>
                <a href="#" className="fab fa-instagram"></a>
                <a href="#" className="fab fa-linkedin"></a>
            </div>
        </div>

        <div className="box">
            <h3>contact info</h3>
            <a href="#" className="links"> <i className="fas fa-phone"></i> +123-456-7890 </a>
            <a href="#" className="links"> <i className="fas fa-phone"></i> +111-222-3333 </a>
            <a href="#" className="links"> <i className="fas fa-envelope"></i> onairpizza@gmail.com </a>
            <a href="#" className="links"> <i className="fas fa-map-marker-alt"></i> Pereiro, CE - 400104 </a>
        </div>

        <div className="box">
            <h3>quick links</h3>
            <a href="index.html" className="links"> <i className="fas fa-arrow-right"></i> Início </a>
            <a href="cardapio.html" className="links"> <i className="fas fa-arrow-right"></i> Cardápio </a>
            <a href="#" className="links"> <i className="fas fa-arrow-right"></i> Quem Somos </a>

        </div>

        <div className="box">
            <h3>newsletter</h3>
            <p>subscribe for latest updates</p>
            <input type="email" placeholder="your email" className="email"/>
            <input type="submit" value="subscribe" className="btn"/>
            <img src="image/payment.png" className="payment-img" alt=""/>
        </div>

    </div>



</section>

{/* <!-- footer section ends --> */}

{/* <script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></script>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
<!-- custom js file link  -->
<script src="js/script.js"></script>
 */}
</body>
        
        </>
    )

}