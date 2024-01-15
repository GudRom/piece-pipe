import TriangleDialog from "elements/TriangleDialog";
import Button from "elements/buttons/Button";
import Text from "elements/Text";
import { FC, useCallback, useRef } from "react";
import { ITriangleDialog } from "elements/TriangleDialog";
// import ProgressBar from "elements/ProgressBar";
// import ScrollTabs from "components/ScrollTabs";
// import Search from "components/Search";
// import Card from "components/Card";
// import { IWigwamModel } from "utils/types/model/IWigwamModel";
import styles from "./StartPage.module.scss";
import { useNavigate } from "react-router-dom";

interface Props {}
// const test = [
//   {
//     id: 1,
//     name: "John Smith",
//     avatar:
//       "https://images.unsplash.com/photo-1701872182933-2774ca26399b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
//   },
//   {
//     id: 2,
//     name: "Emily Johnson",
//     avatar:
//       "https://images.unsplash.com/photo-1702017653546-e67a25511d7c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 3,
//     name: "Michael Williams",
//     avatar:
//       "https://images.unsplash.com/photo-1639090869991-632afb8a544c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
//   },
//   {
//     id: 4,
//     name: "Emma Jones",
//     avatar:
//       "https://images.unsplash.com/photo-1702017634883-8392c239ea2c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ0fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
//   },
// ];

// const testCard: IWigwamModel = {
//   id: 1,
//   name: "Пати на хате",
//   ownerId: 1,
//   maxSongForMember: 5,
//   songs: [
//     {
//       memberId: 2,
//       song: {
//         id: 1,
//         name: "Shape of You",
//         artist: "Ed Sheeran",
//         duration: 233,
//       },
//     },
//     {
//       memberId: 2,
//       song: {
//         id: 27,
//         name: "Stronger (What Doesn't Kill You)",
//         artist: "Kelly Clarkson",
//         duration: 220,
//       },
//     },
//     {
//       memberId: 2,
//       song: {
//         id: 23,
//         name: "Fix You",
//         artist: "Coldplay",
//         duration: 294,
//       },
//     },
//     {
//       memberId: 3,
//       song: {
//         id: 26,
//         name: "Cheap Thrills",
//         artist: "Sia",
//         duration: 211,
//       },
//     },
//     {
//       memberId: 3,
//       song: {
//         id: 20,
//         name: "Radio Ga Ga",
//         artist: "Queen",
//         duration: 345,
//       },
//     },
//     {
//       memberId: 3,
//       song: {
//         id: 24,
//         name: "I Will Always Love You",
//         artist: "Whitney Houston",
//         duration: 273,
//       },
//     },
//     {
//       memberId: 3,
//       song: {
//         id: 22,
//         name: "Take Me to Church",
//         artist: "Hozier",
//         duration: 241,
//       },
//     },
//     {
//       memberId: 4,
//       song: {
//         id: 18,
//         name: "Shake It Off",
//         artist: "Taylor Swift",
//         duration: 219,
//       },
//     },
//     {
//       memberId: 1,
//       song: {
//         id: 7,
//         name: "Rolling in the Deep",
//         artist: "Adele",
//         duration: 228,
//       },
//     },
//     {
//       memberId: 1,
//       song: {
//         id: 2,
//         name: "Bohemian Rhapsody",
//         artist: "Queen",
//         duration: 367,
//       },
//     },
//   ],
//   members: [
//     {
//       id: 1,
//       name: "John Smith",
//       avatar:
//         "https://images.unsplash.com/photo-1701872182933-2774ca26399b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
//     },
//     {
//       id: 2,
//       name: "Emily Johnson",
//       avatar:
//         "https://images.unsplash.com/photo-1702017653546-e67a25511d7c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       id: 3,
//       name: "Michael Williams",
//       avatar:
//         "https://images.unsplash.com/photo-1639090869991-632afb8a544c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
//     },
//     {
//       id: 4,
//       name: "Emma Jones",
//       avatar:
//         "https://images.unsplash.com/photo-1702017634883-8392c239ea2c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ0fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
//     },
//     {
//       id: 5,
//       name: "Daniel Brown",
//       avatar:
//         "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fG1hbiUyMGFsb25lfGVufDB8fDB8fHwy",
//     },
//   ],
// };
const StartPage: FC<Props> = () => {
  const navigate = useNavigate();
  const ref = useRef<ITriangleDialog>(null);
  const handleOpenDialog = useCallback(() => {
    ref?.current?.show();
  }, []);
  const handleNavigate = useCallback(() => {
    navigate("./wigwams");
  }, [navigate]);
  return (
    <section className={styles.startPage}>
      <Text view="title" tag="h1" color="secondary">
        Создай идеальный плейлист вместе с{" "}
        <Text tag="span" color="accent">
          Piece Pipe
        </Text>
      </Text>
      <Button
        view="contained"
        onClick={handleOpenDialog}
        className={styles.startPage__button}
      >
        <Text view="button" tag="span" color="primary">
          {"Попробовать"}
        </Text>
      </Button>
      <TriangleDialog ref={ref}>
        <div className={styles.startPage__dialogContent}>
          <Text view="p-18" color="primary">
            {"Волшебный вход"}
            <span role="img" aria-label="magic">
              &#10024;
            </span>
          </Text>
          <Text tag="span" view="p-8" color="primary">
            сделали вид, что залогинились
          </Text>
          <Button
            onClick={handleNavigate}
            view={"contained"}
            className={styles.startPage__dialogContent__button}
          >
            <Text view="button" tag="span" color="primary">
              Ok!
            </Text>
          </Button>
        </div>
      </TriangleDialog>
    </section>
  );
};

export default StartPage;
