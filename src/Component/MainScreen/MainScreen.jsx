import React from 'react';
import Style from './MainScreen.module.css';
import image2 from '../../assets/images/4.png';
import { Link } from 'react-router-dom';

export default function MainScreen() {
  
  return (
    <div className={Style.mainSection}>
      <div className={Style.hero}>
        <div className={Style.left}>
          <h1>معلم الناس الخير</h1>
          <p className={Style.lead}>
            رفيقك اليومي نحو الطمأنينة — الرفيق الروحي في حياتك اليومية.
            <br />
            في زحمة الحياة، ننسى أحيانًا ما يُطمئن القلب.
            <br />
            أنشأنا هذا التطبيق ليكون مُعينًا لك على الذكر و التلاوة والتسبيح في أي وقتٍ وأينما كنت.
            <br />
            هذا التطبيق يقوم على خمس مهام يومية ثابتة تساعدك على تجديد روحك كل يوم.
المهام هي: تسبيحات – قرآن – دعاء – حديث – عمل خير.
ببساطة: تدخل للتطبيق، تنفّذ المهام الخمسة، وتخرج بقلبٍ أهدأ ويومٍ أنقى.
هدفه أن تعيش لحظات من الذكر والخير… كل يوم، بسهولة وهدوء.
           <br />

          
          </p>
          <div className={Style.actions}>
            <Link to={'/dailyTask'}
              className={Style.btnPrimary}
              
            >
              ابدأ الآن
            </Link>
            {/* <button
              className={Style.btnSecondary}
             
            >
              تعرف على المميزات
            </button> */}
          </div>
        </div>

        <div className={Style.right}>
          <img src={image2} alt="مصحف وسبحة" />
        </div>
      </div>
    </div>
  );
}
