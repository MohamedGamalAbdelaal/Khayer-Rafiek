import React, { useState, useEffect } from "react";
import styles from './ٍSplashScreen.module.css'
import image from '../../assets/images/5.jpg'
function SplashScreen() {
  const text2 = "صدقة جارية عن روح والدي الكريم";
  const text = "الراحلون عنا وإن طال الغياب بهم، باقون في القلب، ما غابوا ولا رحلوا.. "
  const [displayedText, setDisplayedText] = useState("");
  const [displayedText2, setDisplayedText2] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index));
      index++;
      if (index > text.length) clearInterval(interval);
    }, 50); // سرعة الكتابة

    return () => clearInterval(interval);
  }, []);

  // النص الثاني يظهر بعد 1 ثانية
  useEffect(() => {
    let index = 0;
    const interval = setTimeout(() => {
      const type = setInterval(() => {
        setDisplayedText2(text2.slice(0, index));
        index++;
        if (index > text2.length) clearInterval(type);
      }, 90);
    }, 500);

    return () => clearTimeout(interval);
  }, []);

  return (
    <div className={styles.splashContainer}>
      <div className={styles.splashContent}>
        
        <img src={image} 
             alt="Splash" 
             className={styles.splashImage} />

        <h2 className={styles.title}>{displayedText}</h2>

        <p className={styles.subtitle}>{displayedText2}</p>

      </div>
    </div>
  );
}

export default SplashScreen;
