import clsx from 'clsx';
import css from './FriendListItem.module.css';

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  const statusClsx = clsx(css.status, isOnline ? css.online : css.offline);

  return (
    <div className={css.friendCard}>
      <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={statusClsx}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
}
