// eslint-disable-next-line no-unused-vars
import React from 'react'
import style from './Banner.module.css'

const Banner = () => {
  return (
    <>
      <section className={style.bannerSec}>
        <div className={style.banner}>
          <div className={style.bannerDiv}>
          <h1><div className={style.bannerSpan}>AI & ML</div> Development Company</h1>
            <p className={style.bannerPa}>Automate & Accelerate Business
            growth with <b>AI</b> and <b>ML</b> Solutions</p>
            <div className={style.buttn}>
                <button>Let’s Connect <i className="ri-arrow-right-line"></i></button>
            </div>
            </div>
            <div  className={style.bannerDiv}>
          <p className={style.bannerPara}>  With advances in AI and ML, you can accelerate your digital advent. Partner with Techgropse to experience insured project development. We offer services like media workflow automation, computer vision systems, video processing tools, and more.</p>
            </div>
       
        </div>
      </section>
    </>
  )
}

export default Banner