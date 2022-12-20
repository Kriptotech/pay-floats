import style from './styles.module.css'
import Image from './image.png'
import {Header} from '../../../../components/header/Index'

export function RegisterContainer() {

  return (
    <>
      <Header />
      <div className={style.register_container}>
        <div
          className={style.register_container_left}
          data-aos="fade-left"
        >
          <form>
            <h1>CRIE UMA CONTA</h1>
            <input
              required
              type="email"
              placeholder="Seu e-mail"
            />
            <input
              required
              type="text"
              placeholder="Seu nome"
            />
            <input
              required
              type="number"
              placeholder="Seu telefone"
            />
            <input
              required
              type="password"
              placeholder="Sua senha"
            />
            <a href='/signin'>Já tem uma conta? faça login</a>
            <button>CADASTRAR-SE</button>
          </form>
        </div>

        <div
          className={style.register_container_right}
        >
          <img src={Image} alt="" />
          <h1>
            Crie uma conta na plataforma
          </h1>
          <p>
            Siga as etapas para criar uma conta e então faça parte da  nossa plataforma
          </p>
        </div>
      </div>
    </>
  )
}
