import style from './styles.module.css'

export function NeedHelp() {
  return (
    <div className={style.need_help}>

      <div className={style.need_help_header}>
          <h1>Precisa de ajuda?</h1>
      </div>

      <div className={style.need_help_box}>
        <div className={style.need_help_content}>
            <h1>Atendimento ao cliente</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore eos laboriosam velit voluptatem aperiam suscipit necessitatibus commodi aliquid repellendus excepturi.</p>
        </div>

        <div className={style.need_help_content}>
            <h1>Perguntas frequentes</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eius vitae deleniti delectus, alias sint nostrum natus dolorem. Incidunt, soluta!</p>
        </div>

        <div className={style.need_help_content}>
            <h1>Blogue</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi error quis adipisci recusandae ab laborum esse harum cupiditate, necessitatibus aut!</p>
        </div>

        <div className={style.need_help_content}>
            <h1>Tem duvidas?</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam laborum dolore ut animi soluta sed, recusandae quaerat eum enim repudiandae!</p>
        </div>
      </div>

    </div>
  )
}
