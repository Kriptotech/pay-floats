import { useEffect, useState } from 'react'
import {
  ArrowsDownUp,
  Users,
  Article,
  CurrencyDollar
} from 'phosphor-react'
import { useNavigate } from 'react-router-dom'

import style from './styles.module.css'

export function DashboardContainer() {

  const navigate = useNavigate()


  return (
    <div className={style.dashboard}>

      <div className={style.dashboard_cards_box}>

        
          <div className={style.dashboard_card}>
            <div className={style.dashboard_card_row}>
              <div>
                <span>AGENTES</span>
                  <span>{0}</span>
              </div>
              <small style={{ background: '#14B8A6' }}>
                <Users color="#fff" size={25} />
              </small>
            </div>
          </div>

          <div className={style.dashboard_card}>
            <div className={style.dashboard_card_row}>
              <div>
                <span>ADMINISTRADORES</span>
                  <span>34</span>
              </div>
              <small style={{ background: 'VIOLET' }}>
                <Users color="#fff" size={25} />
              </small>
            </div>
          </div>

          <div className={style.dashboard_card}>
            <div className={style.dashboard_card_row}>
              <div>
                <span>SEU GANHO TOTAL</span>
                  <span>100MT</span>
              </div>
              <small style={{ background: '#5048E5' }}>
                <CurrencyDollar color="#fff" size={25} />
              </small>
            </div>
          </div>

          <div className={style.dashboard_card}>
            <div className={style.dashboard_card_row}>
              <div>
                <span>SEU ULTIMO GANHO</span>
                  <span>100MT</span>
              </div>
              <small style={{ background: 'pink' }}>
                <CurrencyDollar color="#fff" size={25} />
              </small>
            </div>
          </div>

      </div>

             
     
    </div>
)}
