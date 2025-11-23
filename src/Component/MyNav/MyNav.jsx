import React, { useState } from "react";
import styles from "./MyNav.module.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
export default function MyNav() {
  const [isOpen, setIsOpen] = useState(true);
    return (
      <>
        <nav
          className={`position-fixed top-0 start-0 end-0 d-flex justify-content-between align-items-center px-5 py-4 ${styles.nav} `}
        >
          <Link to="/contact">
            <button className={`${styles.btn1}`}>معلم الناس الخير</button>
            
          </Link>
          <div className=" text-decoration-none align-items-center gap-4 h-100 d-md-flex d-none">
            
            <NavLink className="text-decoration-none " to="/azkar">
              الاذكار
            </NavLink>
            {/* <NavLink className="text-decoration-none " to="/werd">
              ورد الأعمال
            </NavLink><NavLink className="text-decoration-none " to="/">
              ورد القرأن
            </NavLink> */}
           
            <NavLink className="text-decoration-none " to="/masbaha">
              مسبحة         </NavLink>
            <NavLink className="text-decoration-none " to="/">
              الرئيسية
            </NavLink>
           
          </div>
          <div className="nav-collapse d-md-none d-block">
             <button
            onClick={() => setIsOpen((p) => !p)}
            className={`${styles.menuBtn} bg-transparent border-0`}
          >
            <FontAwesomeIcon
              icon={isOpen ? faBars  :faTimes }
              className={styles.menuIcon}
            />
          </button>

  
            <div className={`${styles.navListSmall} ${isOpen && "d-none"}`}>
              <NavLink className="text-decoration-none text-white px-5 hover:bg-white" to="/" >الرئيسية</NavLink>
              <NavLink className="text-decoration-none text-white px-5" to="/azkar">الأذكار</NavLink>
              {/* <NavLink className="text-decoration-none text-white px-5" to="/werd">ورد الأعمال</NavLink> */}
              {/* <NavLink className="text-decoration-none text-white px-5" to="/werd">ورد القرأن</NavLink> */}
              <NavLink className="text-decoration-none text-white px-5" to="/masbaha">مسبحة</NavLink>
            </div>
          </div>
        </nav>
      </>
    );
}
