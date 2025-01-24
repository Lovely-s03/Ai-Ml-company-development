// eslint-disable-next-line no-unused-vars
import React from 'react'
import style from './row7.module.css'
import left from '../../assets/left.png'
import right from '../../assets/right.png'
const Row7 = () => {
  return (
    <section>
        <div className={style.row7MainDiv}>
            <div className={style.row7ImageDiv}>
<img src={left} alt="" />
            </div>
            <div className={style.row7Div}>
                <p>Have an <b>AI </b>& <b>ML</b> Development idea? Rely on us to turn it into reality</p>
                <div className={style.row7DivButton}>
                <button>Let’s talk <i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
            <div className={style.row7ImageDiv}>
                <img src={right} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Row7