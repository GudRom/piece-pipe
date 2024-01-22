import Text from "elements/Text";
import { FC, memo } from "react";
import { ISongModel } from "utils/types/model/ISongModel";
import styles from "./SongCard.module.scss";
import IconButton from "elements/buttons/IconButton";
import MainCrossIcon from "elements/icons/MainCrossIcon";
import CheckmarkIcon from "elements/icons/CheckmarkIcon";
import PlusIcon from "elements/icons/PlusIcon";
import Loader from "elements/Loader";

interface Props {
  song: ISongModel;
  withActionSlot?: boolean;
  tag?: "div" | "li";
  addedSongsIds?: number[];
  loading?: boolean;
  handleAddSong?: (x: ISongModel) => void;
  handleRemoveSong?: (x: number) => void;
}

const SongCard: FC<Props> = ({
  song,
  withActionSlot = false,
  tag,
  addedSongsIds,
  loading = false,
  handleAddSong,
  handleRemoveSong,
}) => {
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
          {withActionSlot && handleAddSong && handleRemoveSong ? (
            <>
              {addedSongsIds !== undefined ? (
                <>
                  {addedSongsIds.includes(song.id) ? (
                    <IconButton disabled>
                      <CheckmarkIcon color="primary" />
                    </IconButton>
                  ) : (
                    <IconButton
                      onClick={() => handleAddSong(song)}
                      disabled={loading}
                    >
                      {loading ? (
                        <Loader width={15} height={15} />
                      ) : (
                        <PlusIcon width={15} height={15} />
                      )}
                    </IconButton>
                  )}
                </>
              ) : (
                <IconButton
                  onClick={() => handleRemoveSong(song.id)}
                  disabled={loading}
                >
                  {loading ? (
                    <Loader width={15} height={15} />
                  ) : (
                    <MainCrossIcon color="accent" />
                  )}
                </IconButton>
              )}
            </>
          ) : (
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
          )}
        </div>
      </article>
    </Element>
  );
};

export default memo(SongCard);
