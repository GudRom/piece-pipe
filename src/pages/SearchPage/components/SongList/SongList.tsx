import SongCard from "components/SongCard";
import { FC } from "react";
import { Song } from "utils/types/model/IWigwamModel";
import styles from "./SongList.module.scss";
import IconButton from "elements/buttons/IconButton";
import MainCrossIcon from "elements/icons/MainCrossIcon";
import CheckmarkIcon from "elements/icons/CheckmarkIcon";
import PlusIcon from "elements/icons/PlusIcon";
import Button from "elements/buttons/Button";
import Text from "elements/Text";
import { MAX_SONGS_FOR_SLICE } from "config/config";
import { useSlice } from "hooks/useSlice";

interface Props {
  songs: Song[];
  currentMemberId?: number;
}

const SongList: FC<Props> = ({ songs, currentMemberId }) => {
  const { currentSlice, getMore, getLess } = useSlice();
  return (
    <ul className={styles.list}>
      {songs.slice(0, currentSlice).map((song) => (
        <SongCard
          song={song.song}
          key={song.song.id}
          actionSlot={
            currentMemberId ? (
              <>
                {song.memberId === currentMemberId ? (
                  <IconButton>
                    <CheckmarkIcon color="primary" />
                  </IconButton>
                ) : (
                  <IconButton>
                    <PlusIcon width={15} height={15} />
                  </IconButton>
                )}
              </>
            ) : (
              <IconButton>
                <MainCrossIcon color="accent" />
              </IconButton>
            )
          }
        />
      ))}
      {songs.length > MAX_SONGS_FOR_SLICE &&
        (currentSlice < songs.length ? (
          <Button onClick={getMore} view="text" className={styles.list__btn}>
            <Text view="button">Ещее</Text>
          </Button>
        ) : (
          <Button onClick={getLess} view="text" className={styles.list__btn}>
            <Text view="button">Меньше</Text>
          </Button>
        ))}
    </ul>
  );
};

export default SongList;
