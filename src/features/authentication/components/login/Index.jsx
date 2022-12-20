import style from './styles.module.css'
import Image from './image.png'
import {useNavigate} from 'react-router-dom'
import {Header} from '../../../../components/header/Index'

export function LoginContainer() {
  const navigate = useNavigate()

  function handleSubmit(params) {
    navigate('/dashboard')
  }

  return (
    <>
      <Header />
      <div className={style.login_container}>
        <div
          className={style.login_container_left}
          data-aos="fade-left"
        >
        <form onSubmit={(e)=>handleSubmit(e)}>
            <h1>SEJA BEM VINDO</h1>
            <p>Faça login na plataforma interna</p>
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
            <a href='/dashboard'>Não tem uma conta? registe-se</a>
            <button>ENTRAR</button>
          </form>
        </div>

        <div
          className={style.login_container_right}
        >
          <img src={Image} alt="" />
          <h1>
            Faça Login na plataforma
          </h1>
          <p>
            Siga as etapas para fazer login e então logue-se na nossa plataforma
          </p>
        </div>
      </div>
    </>
  )
}
