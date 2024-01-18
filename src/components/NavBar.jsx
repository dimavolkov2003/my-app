import s from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={s.menu}>
      <div className={s.title}>MENU</div>
      <a className={`${s.item} ${s.actived}`}>
        Profile
      </a>

      <a className={s.item}>
        Music
      </a>

      <a className={s.item}>
        Video
      </a>

      <a className={s.item}>
        Photo
      </a>

      <a className={s.item}>
        Chat
      </a>
    </div>
  );
};

export default NavBar;
