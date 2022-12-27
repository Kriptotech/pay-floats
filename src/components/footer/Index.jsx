import style from "./styles.module.css";

export function Footer() {
    return (
        <div className={style.footer}>
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
        </div>
    );
}
