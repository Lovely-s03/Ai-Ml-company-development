// eslint-disable-next-line no-unused-vars
import React from 'react'
import left from '../../assets/left.png'
import right from '../../assets/right.png'
import style from './row12.module.css'
const Row12 = () => {
  return (
    <>
<section className={style.row12mainSec}>
    <div className={style.row12div}>
        <img src={left} alt="" />
    </div>
    <div className={style.row12div1}>
        <p className={style.row12para}>Run the <b>AI-driven </b>version of your product within a few weeks, not a few years</p>
        <p  className={style.row12paragaph}>
        The new generation of AI models can be very fast to integrate! Don’t lose out to your competitors!
        </p>
        <button>Let’s talk <i className="ri-arrow-right-line"></i></button>
    </div>
    <div className={style.row12div}>
        <img src={right} alt="" />
    </div>
</section>
    </>
  )
}

export default Row12