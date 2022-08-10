import Head from 'next/head'
import Styles from '../styles/Home.module.css'
import Script from 'next/script'


// pages/index.tsx

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



    <section className={Styles.home} id="home">

        <div className={Styles.content}>
            <h3>A melhor pizzaria da região</h3>{/* 
            <a href="cardapio.html" className="btn">Peça Agora</a> */}
        </div>

    </section>

<div className={Styles.color}>
    <section className={Styles.promocoes}>
        <h3 className={Styles.heading}>Promoções</h3>

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
             <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
</div>
    </section>
    
    <section className={Styles.promocoes}>
        <h3 className={Styles.heading}>Combos</h3>

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
            <a className="carousel-control-prev" href="#carouselSite" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselSite" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    </section>
{/* 
    <!-- home section ends -->

    <!-- features section starts  --> */}

    <section className={Styles.features} id="features">

        <h1 className={Styles.heading}> Nosso<span>Serviço</span> </h1>

        <div className={Styles.box_container}>

            <div className={Styles.box}>
                <img src="image/feature-img-1.png" alt=""/>
                <h3>Alimentos frescos e Orgânicos</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, earum!</p>

            </div>

            <div className={Styles.box}>
                <img src="image/feature-img-2.png" alt=""/>
                <h3>Delivery grátis</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, earum!</p>

            </div>

            <div className={Styles.box}>
                <img src="image/feature-img-3.png" alt=""/>
                <h3>Pagamento Fácil</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, earum!</p>

            </div>

        </div>

    </section>
</div>


   {/*  <!-- footer section ends --> */}















   <Script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></Script>
<Script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></Script>
<Script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></Script>
<Script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></Script>

<Script src="js/script.js"></Script>
</body>

</>
  )
}
