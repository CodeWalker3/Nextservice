import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>


<Head>
{/* <meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>On Air Pizza</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
<link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css" />
<link rel="shortcut icon" href="image/logo.png" />
<!-- font awesome cdn link  -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">

<!-- custom css file link  -->
<link rel="stylesheet" href="css/style.css"> */}

</Head>



<body>


    <header className="header">

       {/*  <a href="index.html" className="logo"><img src="image/logo.png" alt="" width="90"></a> */}

        <nav className="navbar">{/* 
            <a href="index.html">Início</a>
            <a href="cardapio.html">Cardápio</a>
            <a href="#">Quem Somos</a> */}
        </nav>

        <div className="icons">
            <div className="fas fa-bars" id="menu-btn"></div>
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
            {/* <p>forget your password <a href="#">click here</a></p>
            <p>don't have an account <a id="user-btn" href="#">create now</a></p> */}
            <input type="submit" value="login now" className="btn"/>
        </form>

        <form action="" className="user-form">
            <h3>Create a New Account</h3>
            <input type="text" placeholder="name" className="box"/>
            <select id="cidade" className="box">
                <option>City</option>
                <option value="Pereiro">Pereiro</option>
                <option value="Jaguaribe">Jaguaribe</option>
                <option value="São Miguel">São Miguel</option>
            </select>
            <input type="text" placeholder="Andress" className="box"/>
            <input type="email" placeholder="your email" className="box"/>
            <input type="password" placeholder="your password" className="box"/>
            <input type="password" placeholder="Confirm password" className="box"/>

            <input type="submit" value="Sign Up" className="btn"/>
        </form>


    </header>

{/*     <!-- header section ends -->

    <!-- home section starts  --> */}

    <section className="home" id="home">

        <div className="content">
            <h3>A melhor pizzaria da região</h3>{/* 
            <a href="cardapio.html" className="btn">Peça Agora</a> */}
        </div>

    </section>


    <section className="promocoes container-fluid ">
        <h3 className="heading">Promoções</h3>

        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src="image/promo1.jpg" alt="First slide" width="650" height="550"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="image/promo2.jpg" alt="Second slide" width="650" height="550"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="image/promo3.jpg" alt="Third slide" width="650" height="550"/>
                </div>
            </div>
{/*             <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
 */}        </div>
    </section>

    <section className="promocoes container-fluid ">
        <h3 className="heading">Combos</h3>

        <div id="carouselSite" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselSite" data-slide-to="0" className="active"></li>
                <li data-target="#carouselSite" data-slide-to="1"></li>
                <li data-target="#carouselSite" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src="image/COMBO1.png" alt="First slide" width="650" height="550"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="image/combo2.jpg" alt="Second slide" width="650" height="550"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="image/combo3.jpg" alt="Third slide" width="650" height="550"/>
                </div>
            </div>
{/*             <a className="carousel-control-prev" href="#carouselSite" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselSite" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
 */}        </div>
    </section>
{/* 
    <!-- home section ends -->

    <!-- features section starts  --> */}

    <section className="features" id="features">

        <h1 className="heading"> Nosso<span>Serviço</span> </h1>

        <div className="box-container">

            <div className="box">
                <img src="image/feature-img-1.png" alt=""/>
                <h3>Alimentos frescos e Orgânicos</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, earum!</p>

            </div>

            <div className="box">
                <img src="image/feature-img-2.png" alt=""/>
                <h3>Delivery grátis</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, earum!</p>

            </div>

            <div className="box">
                <img src="image/feature-img-3.png" alt=""/>
                <h3>Pagamento Fácil</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, earum!</p>

            </div>

        </div>

    </section>




    <section className="footer">

        <div className="box-container">

            <div className="box">
                <div className="footer-logo container-fluid">
{/*                     <a href="#" className="logo"><img src="image/logo.png" alt="" width="90"></a>
 */}                </div>

                <div className="share">
{/*                     <a href="#" className="fab fa-facebook-f"></a>
                    <a href="#" className="fab fa-twitter"></a>
                    <a href="#" className="fab fa-instagram"></a>
                    <a href="#" className="fab fa-linkedin"></a>
 */}                </div>
            </div>

            <div className="box">
                <h3>contact info</h3>
{/*                 <a href="#" className="links"> <i className="fas fa-phone"></i> +123-456-7890 </a>
                <a href="#" className="links"> <i className="fas fa-phone"></i> +111-222-3333 </a>
                <a href="#" className="links"> <i className="fas fa-envelope"></i> onairpizza@gmail.com </a>
                <a href="#" className="links"> <i className="fas fa-map-marker-alt"></i> Pereiro, CE - 400104 </a>
 */}            </div>

            <div className="box">
                <h3>quick links</h3>
{/*                 <a href="index.html" className="links"> <i className="fas fa-arrow-right"></i> Início </a>
                <a href="cardapio.html" className="links"> <i className="fas fa-arrow-right"></i> Cardápio </a>
                <a href="#" className="links"> <i className="fas fa-arrow-right"></i> Quem Somos </a>
 */}
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

   {/*  <!-- footer section ends --> */}















{/*     <script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></script>
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
