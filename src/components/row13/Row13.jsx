// eslint-disable-next-line no-unused-vars
import React from 'react'
import style from './Row13.module.css'
import bulp from '../../assets/bulb.png'
import transparent from '../../assets/transp.png'
import message from '../../assets/message.png'
import book from '../../assets/book.png'
import one from '../../assets/1.png'
import two from '../../assets/2.png'
import three from '../../assets/3.png'
import four from '../../assets/4.png'
const Row13 = () => {
  return (
    <>
<div className={style.row13MainDiv}>
    <p>Why <b>Kushel Digi</b>?</p>
    <div className={style.row13Image}>
     <div className={style.row13Image1}>
       <div className={style.row13Img}> <img src={one} alt="" /></div>
    <div  className={style.row13Img1}> <img src={bulp} alt="" /></div>
    <div className={style.row13Para}> <p>Client-driven 
        <br /> approach</p></div>
     </div>
     <div className={style.row13Image1}>
       <div className={style.row13Img}> <img src={two} alt="" /></div>
    <div  className={style.row13Img1}> <img src={transparent} alt="" /></div>
     <p>Transparent processes and billing</p>
     </div>
     <div className={style.row13Image1}>
       <div className={style.row13Img}> <img src={three} alt="" /></div>
    <div  className={style.row13Img1}> <img src={message} alt="" /></div>
     <p>We communicate with you about everything.</p>
     </div>
     <div className={style.row13Image1}>
       <div className={style.row13Img}> <img src={four} alt="" /></div>
    <div  className={style.row13Img1}> <img src={book} alt="" /></div>
     <p>You get detailed reporting and deliverables</p>
     </div>
    </div>
</div>
    </>
  )
}

export default Row13