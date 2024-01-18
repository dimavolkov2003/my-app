import s from "./Profile.module.css";
import avatar from "./../images/avatar.png";

const Profile = () => {
  return (
    <div className={s.container}>
      <div className={s.profile}>
        <div className={s.profile_info}>
          <div className={avatar}>
            <img src={avatar} alt="" />
          </div>
          <div className={s.about_user}>
            Дмитро Волков
            <p>Старша група</p>
            <p>20 років</p>
          </div>
        </div>
      </div>
      <div className={s.posts}>
        <h3 className={s.title}>Posts</h3>
        <div className={s.item}>post 1</div>
        <div className={s.item}>post 2</div>
        <div className={s.item}>post 3</div>
      </div>
    </div>
  );
};

export default Profile;
