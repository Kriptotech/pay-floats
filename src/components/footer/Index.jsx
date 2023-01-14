import style from "./styles.module.css";

export function Footer() {
    return (
        <div className={style.footer}>
            <div>
                <a href="#">Facebook</a>
                <a href="https://api.whatsapp.com/send?1=pt_br&phone=258842201091">
                    Whatsapp
                </a>
                <a href="#">Instagram</a>
                <a href="#">E-mail</a>
                <a href="https://api.whatsapp.com/send?1=pt_br&phone=258842201091">
                    Suporte
                </a>
            </div>
            <div>
                <a href="/">PayFloat</a>
                <a href="/signup">Registrar-se</a>
                <a href="/signin">Fazer login</a>
            </div>
            <div>
                <a href="/terms">Termos e condições</a>
                <a href="/politics">Politicas de uso de dados</a>
                <a href="/politics">Politicas de privacidade</a>
            </div>
            <div>
                <a href="tel:+258842201091">Contactar</a>
                <a href="#">
                    Desenvolvido por PayFloat | Todos direitos reservados &copy;
                </a>
            </div>
        </div>
    );
}
