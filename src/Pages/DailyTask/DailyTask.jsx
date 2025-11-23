import React, { useState, useEffect } from "react";
import tasksData from "../../data/dailyWird_100days.json";
import MyNav from "../../Component/MyNav/MyNav";
import Footer from "../../Component/Footer/Footer";
import { Link } from "react-router-dom";

export default function DailyTasks() {
  const [showPopup, setShowPopup] = useState(false);

  // حساب رقم اليوم في السنة (من 1 إلى 365)
  const today = new Date();
  const dayOfYear = Math.floor(
    (today - new Date(today.getFullYear(), 0, 0)) / 86400000
  );

  // تحديد اليوم من ملف المهام (يتكرر كل 100 يوم)
  const totalDays = tasksData.length;
  const dayIndex = (dayOfYear - 1) % totalDays;
  const todayData = tasksData[dayIndex];

  // تنسيق التاريخ بالعربية
  const todayFormatted = today.toLocaleDateString("ar-EG", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // تحميل المهام من LocalStorage أو من JSON
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem(`dailyTasks_${dayIndex}`);
    return saved
      ? JSON.parse(saved)
      : todayData.tasks.map((t) => ({ ...t, done: false }));
  });

  // حفظ التقدم في LocalStorage
  useEffect(() => {
    localStorage.setItem(`dailyTasks_${dayIndex}`, JSON.stringify(tasks));
  }, [tasks, dayIndex]);

  // تبديل حالة المهمة
  const handleToggle = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  // حساب عدد المهام المنجزة ونسبة الإنجاز
  const completedTasks = tasks.filter((t) => t.done).length;
  const progress = Math.round((completedTasks / tasks.length) * 100);
  const allDone = progress === 100;
  useEffect(() => {
  if (allDone) {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 5000); // تختفي بعد 2.5 ثانية
  }
}, [allDone]);


  return (
    <>
      <MyNav />
      <div className="container py-5">
        <div className="col-lg-8 mx-auto bg-light p-4 rounded-4 shadow">
          <h1 className="text-center text-success mb-3 fw-bold">
            🌿 مهامك لليوم {todayData.day}
          </h1>
          <p className="text-center text-muted mb-4">{todayFormatted}</p>

         
          <div className="text-center mb-4">
            <h5 className="text-secondary">
              اليوم رقم <span className="text-success">{dayIndex + 1}</span> من أصل{" "}
              <span className="text-success">{totalDays}</span> 🔢
            </h5>

          
            <div className="progress" style={{ height: "20px" }}>
              <div
                className={`progress-bar ${
                  allDone ? "bg-success" : "bg-info"
                }`}
                role="progressbar"
                style={{ width: `${progress}%` }}
                aria-valuenow={progress}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {progress}%
              </div>
            </div>
          </div>

          
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`card mb-3 border-0 shadow-sm ${
                task.done ? "bg-success bg-opacity-10" : ""
              }`}
            >
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h5 className="card-title mb-0 text-success">{task.title}</h5>
                  <button
                    onClick={() => handleToggle(task.id)}
                    className={`btn btn-sm ${
                      task.done
                        ? "btn-success text-white"
                        : "btn-outline-success"
                    }`}
                  >
                    {task.done ? "تم ✅" : "إتمام"}
                  </button>
                </div>
                <ul className="list-unstyled ps-3 mb-0 text-secondary">
                  {task.details.map((d, i) => (
                    <li key={i}>• {d}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

        </div>
{showPopup && (
  <div
    className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
    style={{
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 3000,
      transition: "opacity 0.3s ease-in-out",
    }}
  >
    <div
      className="bg-white text-center p-5 rounded-4 shadow-lg"
      style={{
        maxWidth: "400px",
        animation: "popupFade 0.4s ease",
      }}
    >
      <h4 className="text-success fw-bold mb-3">🎉 تم إنجاز جميع المهام!</h4>
      <p className="text-muted mb-0">ما شاء الله! أكملت مهام هذا اليوم المبارك 🌿</p>
      <p className="text-muted mb-0">ننتظرك غدا بروح ومهام جديده🌿</p>
    </div>
  </div>
)}

        <footer className="text-center mt-4 text-muted">
          <Link to='/home'  className="btn btn-success">خروج</Link> 🌸
        </footer>
      </div>
      <Footer />
    </>
  );
}
