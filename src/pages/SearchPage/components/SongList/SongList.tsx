import SongCard from "components/SongCard";
import { FC } from "react";
import styles from "./SongList.module.scss";
import IconButton from "elements/buttons/IconButton";
import MainCrossIcon from "elements/icons/MainCrossIcon";
import CheckmarkIcon from "elements/icons/CheckmarkIcon";
import PlusIcon from "elements/icons/PlusIcon";
import Button from "elements/buttons/Button";
import Text from "elements/Text";
import { MAX_SONGS_FOR_SLICE } from "config/config";
import { useSlice } from "hooks/useSlice";
import { ISongModel } from "utils/types/model/ISongModel";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { updateWigwam } from "store/slices/wigwam/slice";
import { PatchWigwamDto } from "utils/types/dto/wigwam/PatchWigwamDto";

interface Props {
  songs: ISongModel[];
  addedSongsIds?: number[];
}

const SongList: FC<Props> = ({ songs, addedSongsIds }) => {
  const { currentSlice, getMore, getLess } = useSlice();

  const dispatch = useAppDispatch();

  const { currentWigwam, loading } = useAppSelector(
    (state) => state.wigwamReducer
  );
  const { currentUser } = useAppSelector((state) => state.userReducer);

  const handleAddSong = (song: ISongModel) => {
    if (currentWigwam && currentUser) {
      const dto: PatchWigwamDto = {
        id: currentWigwam?.id,
        songs: [...currentWigwam.songs, { memberId: currentUser.id, song }],
      };
      dispatch(updateWigwam(dto));
    }
  };
  const handleRemoveSong = (id: number) => {
    if (currentWigwam && currentUser) {
      const dto: PatchWigwamDto = {
        id: currentWigwam?.id,
        songs: currentWigwam.songs.filter((song) => song.song.id !== id),
      };
      dispatch(updateWigwam(dto));
    }
  };
  return (
    <ul className={styles.list}>
      {songs.slice(0, currentSlice).map((song) => (
        <SongCard
          song={song}
          key={song.id}
          actionSlot={
            addedSongsIds !== undefined ? (
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
                    <PlusIcon width={15} height={15} />
                  </IconButton>
                )}
              </>
            ) : (
              <IconButton
                onClick={() => handleRemoveSong(song.id)}
                disabled={loading}
              >
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
