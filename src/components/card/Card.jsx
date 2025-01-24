// eslint-disable-next-line no-unused-vars
import React from 'react'
import style from './Card.module.css'
const Card = () => {
  return (
    <>
<section className={style.mainCard}>
    <div className={style.mainCardDiv}>
        {/* firstRow */}
        <div className={style.mainCardDiv1}>
            <h5>Our <b>AI</b> And <b> ML</b> Development Services</h5>
            <p className={style.MainCardPara}>With our Artificial Intelligence and machine Learning service you can offer your users a technology that can automate processes and also transform completely the way your clients interact with your services.</p>
        </div>
        {/* secondRow */}
       <div className={style.CardDiv1}>
       <div className={style.CardD}>
         <h5>01</h5>
         <p className={style.CardPara}>ML Solutions</p>
         <p className={style.CardPa}>Our Machine learning specialist team, as one of the top AI software development companies assists you in developing solutions that use machine learning algorithms to help you make crucial business choices</p>
        </div>
        <div className={style.CardD}>
         <h5>02</h5>
         <p className={style.CardPara}>Analytics</p>
         <p className={style.CardPa}>We are a reputable ML/AI software development company with expertise in big data, natural language processing and text analysis, and predictive analytics. our data engineers are experts in deriving insights from data.</p>
        </div>

        <div className={style.CardD}>
         <h5>03</h5>
         <p className={style.CardPara}>Personalzation</p>
         <p className={style.CardPa}>To make your business uniquely yours with machine learning. We give a touch of personalisation to your mobile and online applications.</p>
        </div>        
       </div>

{/* thirdRow */}

<div className={style.CardDiv1}>
       <div className={style.CardD}>
         <h5>04</h5>
         <p className={style.CardPara}>Multi Platform Integration</p>
         <p className={style.CardPa}>We make sure that any solutions we provide, regardless of its size or complexity, integrates easily into your current workflow. improved data management, risk removal, efficiency optimization, and better decision making.</p>
        </div>
        <div className={style.CardD}>
         <h5>05</h5>
         <p className={style.CardPara}>AI Chatbots</p>
         <p className={style.CardPa}>Using natural language processing (NLP), our AI-driven chatbots intelligently comprehend the diverse demands of your users. This information allows you to enhance and give personalised customer care to your users.</p>
        </div>

        <div className={style.CardD}>
         <h5>06</h5>
         <p className={style.CardPara}>Data Processing</p>
         <p className={style.CardPa}>We provide cutting-edge solutions that assists you filter important data from the plethora of structured and unstructured data in many formats that your company generates. we assist you in analysing tha data.</p>
        </div>        
       </div>
{/* forthRow */}
<div className={style.CardDiv1}>
       <div className={style.CardD}>
         <h5>07</h5>
         <p className={style.CardPara}>AI Product Development</p>
         <p className={style.CardPa}>The team at kushel Digi is power-packed with tools and expertise in commercial and open source AI. With AI tools and frameworks you can power launch your AI products in the market.</p>
        </div>
        <div className={style.CardD}>
         <h5>08</h5>
         <p className={style.CardPara}>Computer Vision</p>
         <p className={style.CardPa}>Kushel Digi is a leading AI and ML development company providing seamless development of custom solutions catering digital images and videos. With such a service you can analyse your records, categories and track them.</p>
        </div>    
       </div>
      <div className={style.bttn11}>
      <button> Let’s Connect <i className="ri-arrow-right-line"></i></button>
      </div>
    </div>
</section>
    </>
  )
}

export default Card