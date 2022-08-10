import footerStyles from '../styles/Footer.module.css'

function Footer(){

    return (
        <div>
           <section className={footerStyles.footer}>

<div className={footerStyles.box_container}>

    <div className={footerStyles.box}>
        <div className={footerStyles.footer_logo}>
            <a href="#" className={footerStyles.logo}><img src="image/logo.png" alt="" width="90"/></a>
        </div>

        <div className={footerStyles.share}>
            <a href="#" className="fab fa-facebook-f"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-instagram"></a>
            <a href="#" className="fab fa-linkedin"></a>
        </div>
    </div>

    <div className={footerStyles.box}>
        <h3>contact info</h3>
        <a href="#" className={footerStyles.links}> <i className="fas fa-phone"></i> +123-456-7890 </a>
        <a href="#" className={footerStyles.links}> <i className="fas fa-phone"></i> +111-222-3333 </a>
        <a href="#" className={footerStyles.links}> <i className="fas fa-envelope"></i> onairpizza@gmail.com </a>
        <a href="#" className={footerStyles.links}> <i className="fas fa-map-marker-alt"></i> Pereiro, CE - 400104 </a>
    </div>

    <div className={footerStyles.box}>
        <h3>quick links</h3>
        <a href="index.html" className={footerStyles.links}> <i className="fas fa-arrow-right"></i> Início </a>
        <a href="cardapio.html" className={footerStyles.links}> <i className="fas fa-arrow-right"></i> Cardápio </a>
        <a href="#" className={footerStyles.links}> <i className="fas fa-arrow-right"></i> Quem Somos </a>

    </div>

    <div className={footerStyles.box}>
        <h3>newsletter</h3>
        <p>subscribe for latest updates</p>
        <input type="email" placeholder="your email" className={footerStyles.email}/>
        <input type="submit" value="subscribe" className={footerStyles.btn}/>
        <img src="image/payment.png" className={footerStyles.payment_img} alt=""/>
    </div>

</div>



</section>
        </div>
    )
}

export default Footer