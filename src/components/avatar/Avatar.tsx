import s from "./Avatar.module.scss";

interface AvatarI {
  src: string;
  alt?: string;
}

function Avatar({ src, alt }: AvatarI) {
  return <img src={src} alt={alt} className={s.avatar} />;
}

export default Avatar;
