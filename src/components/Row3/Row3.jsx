// eslint-disable-next-line no-unused-vars
import React from 'react'
import style from './Row3.module.css'
import ai from '../../assets/AI.png'
const Row3 = () => {
  return (
    <>
<section>
    <div className={style.row3Div}>
        <div className={style.row3Div2}>
            <h5>Revolutionizing your Business with Artificial Intelligence & Machine Learning</h5>
            <p className={style.row3Para}>With every passing second the world is advancing and so should your business. Artificial Intelligence and Machine Learning allows you to harness the complete potential in analysing user data and user behaviour.</p>
            <div><button className={style.bttn2}>Start your project <i className="ri-arrow-right-line"></i></button></div>
        </div>
        <div className={style.row3Div3}>
<img src={ai} alt="" />
        </div>
    </div>
</section>
    </>
  )
}

export default Row3