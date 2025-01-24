// eslint-disable-next-line no-unused-vars
import React from 'react'
import improved from '../../assets/improved.png'
import enhanced from '../../assets/enchaned.png'
import personal from '../../assets/Personalized.png'
import proactive from '../../assets/Proactive.png'
import cost from '../../assets/Cost.png'
import risk from '../../assets/risk1.png'
import innovation from '../../assets/innvation.png'
import Scalability from '../../assets/Scalability.png'
import quality from '../../assets/Quality Assurance.png'
import style from './Card2.module.css'
const Card2 = () => {
  return (
    <section className={style.card2Section}>
        <div className={style.card2MainDiv}>
            <p>How <b>Artificial Intelligence</b> and <b>Machine learning</b> can help your business</p>
        </div>
        <div>
    <div className={style.card2MainDiv1}>
   <div className={style.card2Div}>
<div> <img src={improved} alt="" /></div>
<p className={style.card2Para}>Improved Efficiency and Productivity</p>
<p className={style.card2P}> AI automates routine tasks, improving business efficiency and productivity by enabling employees to concentrate on strategic issues.</p>
</div>
  <div  className={style.card2Div}>
    <div><img src={enhanced} alt="" /></div>
    <p className={style.card2Para}>Enhanced Decision Making</p>
    <p className={style.card2P}>AI analyses data for valuable insights, aiding quick, accurate, and informed business decisions.</p>
  </div>
  <div  className={style.card2Div}>
    <div><img src={personal} alt="" /></div>
    <p  className={style.card2Para}>Personalized Customer Experience</p>
    <p className={style.card2P}>AI analyses customer behaviors and preferences, enabling tailored recommendations and experiences, improving customer satisfaction and loyalty.</p>
  </div>
</div>


<div className={style.card2MainDiv1}>
   <div className={style.card2Div}>
<div> <img src={proactive} alt="" /></div>
<p className={style.card2Para}>Proactive Maintenance</p>
<p className={style.card2P}>AI automates routine tasks, improving business efficiency and productivity by enabling employees to concentrate on strategic issues..</p>
</div>
  <div  className={style.card2Div}>
    <div><img src={cost} alt="" /></div>
    <p className={style.card2Para}>Cost Savings</p>
    <p className={style.card2P}>AI's automation and efficiency improvements can lead to cost savings, and resource allocation optimization also helps reduce costs.</p>
  </div>
  <div  className={style.card2Div}>
    <div><img src={risk} alt="" /></div>
    <p  className={style.card2Para}>Improved Risk Management</p>
    <p className={style.card2P}>AI aids in risk identification and assessment; for example, it can help detect fraudulent transactions in real-time in the financial sector. </p>
  </div>
</div>


<div className={style.card2MainDiv1}>
   <div className={style.card2Div}>
<div> <img src={innovation} alt="" /></div>
<p className={style.card2Para}>Innovation and Competitive Advantage</p>
<p className={style.card2P}>AI automates routine tasks, improving business efficiency and productivity by enabling employees to concentrate on strategic issues.</p>
</div>
  <div  className={style.card2Div}>
    <div><img src={Scalability} alt="" /></div>
    <p className={style.card2Para}>Scalability</p>
    <p className={style.card2P}>AI solutions scale with your business, managing increased workloads as your business expands.</p>
  </div>
  <div  className={style.card2Div}>
    <div><img src={quality} alt="" /></div>
    <p  className={style.card2Para}>Quality Assurance</p>
    <p className={style.card2P}>AI automates quality checks across sectors, ensuring high consistency and reducing errors.</p>
  </div>
</div>

        </div>
    </section>
  )
}

export default Card2