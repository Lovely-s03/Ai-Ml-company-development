// eslint-disable-next-line no-unused-vars
import React from 'react'
import chatgtp from '../../assets/chatgtp.png'
import bing from '../../assets/bingAi.png'
import auto from '../../assets/auto.png'
import azure from '../../assets/azure.png'
import custom from '../../assets/custom.png'
import style from './row4.module.css'
const Row4 = () => {
  return (

        <section className={style.Row4Sec}>
     
            <div className={style.Row4Div}>
                <h6>What can be integrated?</h6>
              <div className={style.Row4Div2}>
              <p className={style.Row4Para}>Kushel Digi team helps businesses to <b>integrate </b>leading <b>AI</b> models into their products and custom software solutions</p>
              </div>
            </div>
            <div className={style.Row4Img}>
                <img src={chatgtp} alt="" />
                <img src={bing} alt="" />
                <img src={auto} alt="" />
                <img src={azure} alt="" />
                <img src={custom} alt="" />
            </div>
        </section>

  )
}

export default Row4