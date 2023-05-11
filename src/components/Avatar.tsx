import styles from "./Avatar.module.css";

interface Avatar {
  src: string;
  hasBorder?: boolean;
}
const Avatar = ({ src, hasBorder }: Avatar) => {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
      alt=""
    />
  );
};

export { Avatar };
