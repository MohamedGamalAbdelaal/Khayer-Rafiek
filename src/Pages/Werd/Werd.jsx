import React, { useEffect, useState } from 'react'
import Style from './Werd.module.css'
import data from '../../data/dailyWird.json'
import { Link } from 'react-router-dom';
import Footer from '../../Component/Footer/Footer';
import MyNav from '../../Component/MyNav/MyNav';

export default function Werd() {
  const [wird, setWird] = useState(null);
console.log("📘 Loaded data:", data);

  useEffect(() => {
    const today = new Date().toDateString();
    const saved = JSON.parse(localStorage.getItem("dailyWird"));

    if (saved && saved.date === today) {
      setWird(saved.data);
    } else {
      const randomIndex = Math.floor(Math.random() * data.length);
      const selected = data[randomIndex];
      setWird(selected);
      localStorage.setItem(
        "dailyWird",
        JSON.stringify({ date: today, data: selected })
      );
    }
  }, []);

  if (!wird) return <div className={Style.loading}>جاري تحميل ورد اليوم...</div>;
console.log("🎯 Wird data:", wird);

  return <>
  <MyNav/>
  <div className={Style.wirdContainer}>
      {/* <h2 className={Style.title}>🌿 ورد اليوم رقم {wird["اليوم"]}</h2> */}

      {/* <div className={Style.section}>
        <h3>📖 الآيات</h3>
        <div className={Style.ayahs}>
          {wird["آيات"].map((ayah, index) => (
            <p key={index} className={Style.ayah}>
              {ayah}
            </p>
          ))}
        </div>
      </div> */}

      <div className={Style.section1}>
        <h3>🕊️ الحديث</h3>
        <p className={Style.content}>{wird["حديث"]}</p>
      </div>

      <div className={Style.section}>
        <h3>💬 الذكر</h3>
        <span className={Style.content}>{wird["ذكر1"]}</span>
        <span>    100 مرة   ------  </span>
         <span className={Style.content}>{wird["ذكر2"]}</span>
        <span>    100 مرة   ------</span>
         <span className={Style.content}>{wird["ذكر3"]}</span>
        <span>    100 مرة </span>
      </div>

      <div className={Style.section}>
        <h3>🤲 العمل الصالح</h3>
        <p className={Style.content}>{wird["عمل_صالح"]}</p>
      </div>
    </div>
    <Footer/>
  </>
    
  
}