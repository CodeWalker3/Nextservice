import footerStyles from '../styles/Footer.module.css'

function Footer(){

    return (
        <div>
           <section className={footerStyles.Footer}>

<div className="box-container">

    <div className="box">
        <div className={footerStyles.footer_logo}>
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
        </div>
    )
}

export default Footer