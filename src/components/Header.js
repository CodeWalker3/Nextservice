import Styles from '../styles/Header.module.css'

function Header(){

return(
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

    )
}

export default Header;

    