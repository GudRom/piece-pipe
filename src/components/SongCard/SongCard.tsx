import Text from "elements/Text";
import { FC, ReactNode, memo } from "react";
import { ISongModel } from "utils/types/model/ISongModel";
import styles from "./SongCard.module.scss";

interface Props {
  song: ISongModel;
  actionSlot?: ReactNode;
  tag?: "div" | "li";
}

const SongCard: FC<Props> = ({ song, actionSlot, tag }) => {
  const Element = tag ?? "li";
  return (
    <Element style={{ width: "100%" }}>
      <article className={styles.song}>
        <div className={styles.song__textBox}>
          <Text
            view="p-16"
            tag="span"
            maxLines={1}
            weight="medium"
          >{`${song.artist} - ${song.name}`}</Text>
          <Text
            view="p-16"
            tag="span"
            weight="medium"
            className={styles.song__duration}
          >
            {`${Math.floor(song.duration / 60)}:${
              song.duration % 60 < 10
                ? "0" + (song.duration % 60)
                : song.duration % 60
            }`}
          </Text>
        </div>
        {actionSlot}
      </article>
    </Element>
  );
};

export default memo(SongCard);
