import css from './Profile.module.css';

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.userCard}>
      <div className={css.userInfo}>
        <img className={css.userImg} src={image} alt="User avatar" />
        <p className={css.userName}>{name}</p>
        <p className={css.userOtherText}>@{tag}</p>
        <p className={css.userOtherText}>{location}</p>
      </div>
      <ul className={css.statsList}>
        <li className={css.statsListItem}>
          <span>Follovers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={css.statsListItem}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={css.statsListItem}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
