
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import '../styles/globals.css'
import Header from '../components/Header'
import 'bootstrap/dist/css/bootstrap.css'

function MyApp({ Component, pageProps }) {
  
  return (
  <Layout>
    <link
href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
crossOrigin="anonymous" 
/>
  <Component {...pageProps} />
  </Layout>)
}


export default MyApp
