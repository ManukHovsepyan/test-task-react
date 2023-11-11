
import React, { useState } from 'react';
import style from './index.module.scss';
import userImage from "../../assets/images/user-img.jpg"
import Menu from '../../components/Menu';
import MenuUserInfo from '../../components/Menu/MenuUserInfo';
import MenuFooter from '../../components/Menu/MenuFooter';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const user = {
    name: "Daniel",
    image: userImage
  }

  return (
    <aside
      className={`${style.sidebar} ${isOpen ? `${style.open}` : ''}`}>
      <div className={`${style.sidebarBody} ${isOpen ? `${style._opened}` : ''}`}
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
      >
        <section className={`${style.userInfo} ${isOpen ? style._opened : ''}`}>
          <MenuUserInfo user={user} />
        </section>
        <section className={style.menu}>
          <Menu />
        </section>
        <section>
          <MenuFooter isOpen={isOpen} />
        </section>
      </div>
      <div className={`${style.sidebarBG} ${isOpen ? style._opened : ''}`}></div>
    </aside>
  );
};

export default Sidebar;
