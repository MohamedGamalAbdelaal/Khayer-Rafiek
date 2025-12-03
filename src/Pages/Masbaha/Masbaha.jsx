import React, { useState } from "react";
import style from "./Masbaha.module.css";
import { FaArrowRotateRight } from 'react-icons/fa6';
import MyNav from './../../Component/MyNav/MyNav';
import Footer from "../../Component/Footer/Footer";

export default function Masbaha() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const reset = () => setCount(0);

  return (
    <>
     <MyNav/>
    <div className={`${style.container}`}>
      <div className={style.masbahaBox} onClick={increase}>
        <div className={style.main}>{count}</div>
        
      </div>
      <div className={style.buttons}>
          {/* <button className={style.increase} onClick={increase}>+</button> */}
          <button className={style.decrease} onClick={reset}><FaArrowRotateRight /></button>
        </div>
    </div>
    <Footer/>
    </>
   
  );
}
