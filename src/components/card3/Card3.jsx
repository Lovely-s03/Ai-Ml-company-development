// eslint-disable-next-line no-unused-vars
import React from 'react'
import search from '../../assets/search.png'
import desktop from '../../assets/computer.png'
import rocket from '../../assets/rocket.png'
import style from './Card3.module.css'
const Card3 = () => {
  return (
    <>
          <section className={style.mainSectionCard3}>
            <div className={style.mainCard3Div}>
                <h5>How it works</h5>
                <p className={style.mainCard3Pa}>The integration process is divided into stages to make it smooth and
                effective for your business:</p>
            </div>
            <div className={style.Card3Div}>
          <div className={style.card3Div1}>
            <div><img src={search} alt="" /></div>
            <p className={style.card3ParaG}>Discovery stage</p>
            <p className={style.card3Paragraph}>We study your product and operations, identify opportunities for AI enhancement, and devise a customized strategy, including UI wireframe and PRD for effective prototyping.</p>
          </div>
          <div className={style.card3Div2}>
            <div> <img src={desktop} alt="" /></div>
            <p className={style.card3ParaG}>Design and development</p>
            <p className={style.card3Paragraph}>Our skilled team designs and develops the AI integration, ensuring compatibility and alignment with your business needs. We will also review and roll out an updated version of your product.</p>
          </div>
          <div className={style.card3Div3}>
            <div><img src={rocket} alt="" /></div>
            <p className={style.card3ParaG}>Test and Launch</p>
            <p className={style.card3Paragraph}>We conduct thorough performance and bug testing before a monitored deployment. Post-launch, we will provide support and ongoing optimization based on live environment data.</p>
          </div>
            </div>
          </section>
    </>
  )
}

export default Card3