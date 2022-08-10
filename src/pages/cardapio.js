import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/cardapio.module.css'
import Script from 'next/script'


export default function Cardapio(){
    return (
        <> 

<div className={styles.color}>       
<section className={styles.home} id="home">

<div className={styles.content}>
    <h3>Cardápio</h3>
</div>

</section>


<section className={styles.categories} id="categories">
<a href="#" className={styles.btn}>Pequena</a>
<a href="#" className={styles.btn}>Média</a>
<a href="#" className={styles.btn}>Grande</a>


<div className={styles.box_container}>

    <div className={styles.box}>
        <img src="image/pizza.jpg" alt=""/>
        <h3>2 QUEIJOS</h3>
        <p>Molho de Tomate, Mussarela, Catupiry, Orégano, Azeitona
        </p>
        <p>R$ 30,00 </p>
        <a href="forma-pagamento.html" className={styles.btn}>Comprar</a>
    </div>

    <div className={styles.box}>
        <img src="image/pizza.jpg" alt=""/>
        <h3>2 QUEIJOS</h3>
        <p>Molho de Tomate, Mussarela, Catupiry, Orégano, Azeitona
        </p>
        <p>R$ 30,00 </p>
        <a href="forma-pagamento.html" className={styles.btn}>Comprar</a>
    </div>

    <div className={styles.box}>
        <img src="image/pizza.jpg" alt=""/>
        <h3>2 QUEIJOS</h3>
        <p>Molho de Tomate, Mussarela, Catupiry, Orégano, Azeitona
        </p>
        <p>R$ 30,00 </p>
        <a href="forma-pagamento.html" className={styles.btn}>Comprar</a>
    </div>

    <div className={styles.box}>
        <img src="image/pizza.jpg" alt=""/>
        <h3>2 QUEIJOS</h3>
        <p>Molho de Tomate, Mussarela, Catupiry, Orégano, Azeitona
        </p>
        <p>R$ 30,00 </p>
        <a href="forma-pagamento.html" className={styles.btn}>Comprar</a>
    </div>
    <div className={styles.box}>
        <img src="image/pizza.jpg" alt=""/>
        <h3>2 QUEIJOS</h3>
        <p>Molho de Tomate, Mussarela, Catupiry, Orégano, Azeitona
        </p>
        <p>R$ 30,00 </p>
        <a href="forma-pagamento.html" className={styles.btn}>Comprar</a>
    </div>

    <div className={styles.box}>
        <img src="image/pizza.jpg" alt=""/>
        <h3>2 QUEIJOS</h3>
        <p>Molho de Tomate, Mussarela, Catupiry, Orégano, Azeitona
        </p>
        <p>R$ 30,00 </p>
        <a href="forma-pagamento.html" className={styles.btn}>Comprar</a>
    </div>

    <div className={styles.box}>
        <img src="image/pizza.jpg" alt=""/>
        <h3>2 QUEIJOS</h3>
        <p>Molho de Tomate, Mussarela, Catupiry, Orégano, Azeitona
        </p>
        <p>R$ 30,00 </p>
        <a href="forma-pagamento.html" className={styles.btn}>Comprar</a>
    </div>

    <div className={styles.box}>
        <img src="image/pizza.jpg" alt=""/>
        <h3>2 QUEIJOS</h3>
        <p>Molho de Tomate, Mussarela, Catupiry, Orégano, Azeitona
        </p>
        <p>R$ 30,00 </p>

        <a href="forma-pagamento.html" className={styles.btn}>Comprar</a>
    </div>


</div>

</section>





<Script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></Script>
<Script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></Script>
<Script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></Script>
<Script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></Script>

<Script src="js/script.js"></Script>
</div>
        </>
    )
}