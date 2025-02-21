import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h2 className='titleFooter'>Pizzaria Mil Graus</h2>
                    <p className='contentFooter'>🍕Pede Pizza! Pede 1000graus!</p>
                </div>

                <div className="footer-section contact">
                    <h2 className='titleFooter'>Contato</h2>
                    <p className='contentFooter'>Instagram: @pizzaria1000graus</p>
                    <p className='contentFooter'>Telefone: (83) 99329-1827</p>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; 2025 Pizzaria Mil Graus | Todos os direitos reservados
            </div>
        </footer>
    );
}