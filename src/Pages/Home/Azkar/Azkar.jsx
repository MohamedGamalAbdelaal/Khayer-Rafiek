import React from 'react'
import Style from './Azkar.module.css'
import Image from '../../../assets/images/1.jpeg'
import MyNav from '../../../Component/MyNav/MyNav'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import Footer from '../../../Component/Footer/Footer';
export default function Azkar() {
     const [show, setShow] = useState(false);
     const [selectedZekr, setselectedZekr] = useState(null)
     let navigate=useNavigate()
    const azkarList = [
  { 
    title: "أذكار الصباح والمساء", 
    body: `اللّه لا إله إلا هو الحيّ القيّوم، لا تأخذه سنة ولا نوم، له ما في السّماوات وما في الأرض، من ذا الّذي يشفع عنده إلا بإذنه... (آية الكرسي).
قل هو الله أحد، قل أعوذ برب الفلق، قل أعوذ برب الناس (٣ مرات صباحاً ومساءً).
أصبحنا وأصبح الملك لله، والحمد لله، لا إله إلا الله وحده لا شريك له... 
اللهم بك أصبحنا وبك أمسينا وبك نحيا وبك نموت وإليك النشور.` 
  },
  { 
    title: "أذكار السفر", 
    body: `الله أكبر، الله أكبر، الله أكبر، سبحان الذي سخر لنا هذا وما كنا له مقرنين، وإنا إلى ربنا لمنقلبون.
اللهم هوّن علينا سفرنا هذا، واطو عنا بعده، اللهم أنت الصاحب في السفر، والخليفة في الأهل.` 
  },
  { 
    title: "أذكار ما بعد الصلوات", 
    body: `أستغفر الله (٣ مرات).
اللهم أنت السلام ومنك السلام، تباركت يا ذا الجلال والإكرام.
لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير... 
سبحان الله ٣٣، الحمد لله ٣٣، الله أكبر ٣٣، تمام المئة: لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير.` 
  },
  { 
    title: "أذكار النوم والاستيقاظ", 
    body: `باسمك اللهم أموت وأحيا.
اللهم قني عذابك يوم تبعث عبادك.
اللهم باسمك وضعت جنبي وبك أرفعه، إن أمسكت نفسي فارحمها، وإن أرسلتها فاحفظها بما تحفظ به عبادك الصالحين.
عند الاستيقاظ: الحمد لله الذي أحيانا بعدما أماتنا وإليه النشور.` 
  },
  { 
    title: "الأذكار المطلقة", 
    body: `سبحان الله وبحمده (١٠٠ مرة).
لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير (١٠٠ مرة).
سبحان الله، والحمد لله، والله أكبر.` 
  },
  { 
    title: "أذكار دخول وخروج المنزل", 
    body: `عند الدخول: بسم الله ولجنا، وبسم الله خرجنا، وعلى الله ربنا توكلنا.
عند الخروج: بسم الله، توكلت على الله، لا حول ولا قوة إلا بالله.` 
  },
  { 
    title: "أذكار الأكل والشرب", 
    body: `قبل الأكل: بسم الله، فإن نسي قال: بسم الله أوله وآخره.
بعد الأكل: الحمد لله الذي أطعمنا وسقانا وجعلنا مسلمين.
عند شرب اللبن: اللهم بارك لنا فيه وزدنا منه.` 
  },
  { 
    title: "أذكار المناسبات والأحوال", 
    body: `عند نزول المطر: اللهم صيّباً نافعاً.
عند سماع الرعد: سبحان الذي يسبح الرعد بحمده والملائكة من خيفته.
عند دخول السوق: لا إله إلا الله وحده لا شريك له، له الملك وله الحمد يحيي ويميت وهو حي لا يموت...` 
  },
  { 
    title: "أذكار الوضوء", 
    body: `بسم الله (قبل الوضوء).
بعده: أشهد أن لا إله إلا الله وحده لا شريك له، وأشهد أن محمداً عبده ورسوله.
اللهم اجعلني من التوابين، واجعلني من المتطهرين.` 
  },
  { 
    title: "أذكار الطعام", 
    body: `إذا أكل أحدكم فليقل: بسم الله.
فإن نسي في أوله فليقل: بسم الله أوله وآخره.
من أطعمه الله طعاماً فليقل: اللهم بارك لنا فيه، وأطعمنا خيراً منه.` 
  },
  { 
    title: "أذكار الحج والعمرة", 
    body: `لبيك اللهم لبيك، لبيك لا شريك لك لبيك، إن الحمد والنعمة لك والملك، لا شريك لك.
التلبية تقال من الإحرام إلى رمي جمرة العقبة.` 
  },
  { 
    title: "أذكار الأذان", 
    body: `يقول مثل ما يقول المؤذن إلا عند: حي على الصلاة، حي على الفلاح، فيقول: لا حول ولا قوة إلا بالله.
ثم يصلي على النبي ﷺ ويقول: اللهم رب هذه الدعوة التامة والصلاة القائمة، آت محمداً الوسيلة والفضيلة وابعثه مقاماً محموداً الذي وعدته.` 
  }
];


 const handleShow=(zekr)=>{
    setselectedZekr(zekr)
    setShow(true)
 }
const handleNavigate =()=>{
navigate('/azkarSabah')
}
  return <>
  <MyNav/>
      <Modal
        show={show}
        onHide={() => setShow(false)}
         dialogClassName={Style.modalWide} 
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ fontFamily: "Amiri, serif" }} className='text-center w-100 text-success' id="example-custom-modal-styling-title">
            {selectedZekr?.title}
            
          </Modal.Title>
        </Modal.Header>
        <Modal.Body  className='text-center w-100'>
          <p style={{ fontFamily: "Amiri, serif", whiteSpace: "pre-line" }}>
           {selectedZekr?.body}            
          </p>
          
        </Modal.Body>
      </Modal>
  <div className="row d-flex justify-content-center align-items-center my-5 g-4">
  {azkarList.map((zekr, index) => (
    <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={index}>
      <div className={`${Style.item}`}>
        <img className='mb-4' src={Image} alt={zekr.title} />
        {zekr.title=="أذكار الصباح والمساء"?
        <Button variant="success" className='text-center w-75' onClick={() =>handleNavigate()}>
        {zekr.title}
      </Button>
        :
        <Button variant="success" className='text-center w-75' onClick={() =>handleShow(zekr)}>
        {zekr.title}
      </Button>
        }
        
      </div>
    </div>
  ))}
</div>
<Footer/>
  </>
}
