import React from "react";
import style from "./Footer.module.css";
export default function Footer() {
  return (
    <>
    <div className="row w-100 ">
    <div className={style.footer}>
        <div className="row mt-4 d-flex justify-content-between align-items-center ">
          <div className="col-md-6 col-12 ">
            <div className="social d-flex justify-content-center align-items-center ">
             <a href="https://www.facebook.com/mhmd.ben.gamal/?locale=ar_AR" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook fa-x m-2"></i></a>
             <a href="https://wa.me/201093863840" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-whatsapp fa-x  m-2"></i></a>
             <a href="https://www.linkedin.com/in/mohamed-gamal-1a99a9207/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin fa-x  m-2"></i></a>
             <a href="https://www.instagram.com/mhmdgamal1717/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram fa-x  m-2"></i></a>
            </div>
          </div>
          <div className="col-12 text-center col-md-6 ">
            <a
              href="https://wa.me/201093863840"
              className="text-danger h5 mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gemy
            </a>{" "}
            جميع الحقوق محفوظة   <i class="p-1 fa-regular fa-copyright"></i> 2026
              
          </div>
        </div>
      </div>
    </div>
     
    </>
  );
}
