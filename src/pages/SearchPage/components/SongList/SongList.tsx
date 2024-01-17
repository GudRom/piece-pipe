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

interface Props {
  songs: Song[];
  currentMemberId?: number;
}

const SongList: FC<Props> = ({ songs, currentMemberId }) => {
  return (
    <ul className={styles.list}>
      {songs.map((song) => (
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
      {currentMemberId && (
        <Button view="text" className={styles.list__btn}>
          <Text view="button">Ещее</Text>
        </Button>
      )}
    </ul>
  );
};

export default SongList;
