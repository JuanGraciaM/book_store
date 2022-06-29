import './Footer.css'

function Footer() {
    return(
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__content--main">
                    <h3>Libertaria ©</h3>
                    <p>Book Store.</p>
                </div>
                <div className="footer__content--store">
                    <h3>Store</h3>
                    <ul>
                        <li><a href="">Ciencia Ficción</a></li>
                        <li><a href="">Drama</a></li>
                        <li><a href="">Terror</a></li>
                        <li><a href="">Filosofía</a></li>
                        <li><a href="">Novelas</a></li>
                        <li><a href="">Ciencias</a></li>
                    </ul>
                </div>
                <div className="footer__content--store">
                    <h3>Support</h3>
                    <ul>
                        <li><a href="">Consultas</a></li>
                        <li><a href="">Quejas</a></li>
                        <li><a href="">Sugerencias</a></li>
                        <li><a href="">Información</a></li>
                        <li><a href="">Sobre Nosotros</a></li>
                    </ul>
                </div>
                <div className="footer__content--store">
                    <h3>Contact</h3>
                    <ul>
                        <li><a href="">Book_Store@Libertaria.com</a></li>
                        <li><a href="">Teléfono: 011-4342-5676</a></li>
                        <li><a href="">Celular: +54-011-5674-5632</a></li>
                        <li><a href="">Av. Córdoba 2701</a></li>
                        <li><a href="">C.P.: 2304</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;