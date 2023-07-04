import { Outlet, Link } from 'react-router-dom'
import Footer from './Footer';

const Template = () => (
  <>
    <header>
      <nav>
        <Link to="/">Home</Link> -&nbsp;
        <Link to="/services">Services</Link> -&nbsp;
        <Link to="/who-we-are">Who We Are</Link> -&nbsp;
        <Link to="/who-we-are/ariel">Who We Are - Ari</Link> -&nbsp;
        <Link to="/who-we-are/yanina">Who We Are - Yani</Link> -&nbsp;
        <Link to="/who-we-are/marco">Who We Are - Marco</Link> -&nbsp;
        <Link to="/contact-us">Contact us</Link> -&nbsp;
        <Link to="404">404</Link>
      </nav>
    </header>
    <section>
      <Outlet />
    </section>
    <Footer />
  </>
)

export default Template;