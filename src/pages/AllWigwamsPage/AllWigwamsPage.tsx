import AddWigwamIcon from "elements/icons/AddWigwamIcon";
import IconButton from "elements/buttons/IconButton";
import { FC } from "react";
import Text from "elements/Text";
import { IWigwamModel } from "utils/types/model/IWigwamModel";
import Card from "components/Card";
import ListWithTitle from "pages/AllWigwamsPage/components/ListWithTitle";
import styles from "./AllWigwamsPage.module.scss";

interface Props {
}
const testCard: IWigwamModel = {
  id: 1,
  name: "Пати на хате",
  ownerId: 1,
  maxSongForMember: 5,
  songs: [
    {
      memberId: 2,
      song: {
        id: 1,
        name: "Shape of You",
        artist: "Ed Sheeran",
        duration: 233,
      },
    },
    {
      memberId: 2,
      song: {
        id: 27,
        name: "Stronger (What Doesn't Kill You)",
        artist: "Kelly Clarkson",
        duration: 220,
      },
    },
    {
      memberId: 2,
      song: {
        id: 23,
        name: "Fix You",
        artist: "Coldplay",
        duration: 294,
      },
    },
    {
      memberId: 3,
      song: {
        id: 26,
        name: "Cheap Thrills",
        artist: "Sia",
        duration: 211,
      },
    },
    {
      memberId: 3,
      song: {
        id: 20,
        name: "Radio Ga Ga",
        artist: "Queen",
        duration: 345,
      },
    },
    {
      memberId: 3,
      song: {
        id: 24,
        name: "I Will Always Love You",
        artist: "Whitney Houston",
        duration: 273,
      },
    },
    {
      memberId: 3,
      song: {
        id: 22,
        name: "Take Me to Church",
        artist: "Hozier",
        duration: 241,
      },
    },
    {
      memberId: 4,
      song: {
        id: 18,
        name: "Shake It Off",
        artist: "Taylor Swift",
        duration: 219,
      },
    },
    {
      memberId: 1,
      song: {
        id: 7,
        name: "Rolling in the Deep",
        artist: "Adele",
        duration: 228,
      },
    },
    {
      memberId: 1,
      song: {
        id: 2,
        name: "Bohemian Rhapsody",
        artist: "Queen",
        duration: 367,
      },
    },
  ],
  members: [
    {
      id: 1,
      name: "John Smith",
      avatar:
        "https://images.unsplash.com/photo-1701872182933-2774ca26399b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
    },
    {
      id: 2,
      name: "Emily Johnson",
      avatar:
        "https://images.unsplash.com/photo-1702017653546-e67a25511d7c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Michael Williams",
      avatar:
        "https://images.unsplash.com/photo-1639090869991-632afb8a544c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
    },
    {
      id: 4,
      name: "Emma Jones",
      avatar:
        "https://images.unsplash.com/photo-1702017634883-8392c239ea2c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ0fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
    },
    {
      id: 5,
      name: "Daniel Brown",
      avatar:
        "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fG1hbiUyMGFsb25lfGVufDB8fDB8fHwy",
    },
  ],
};
const list: IWigwamModel[] = [testCard, testCard];
const AllWigwamsPage: FC<Props> = () => {
  return (
    <section className={styles.wigwams}>
      <div className={styles.wigwams__header}>
        <IconButton className={styles.wigwams__createBtn}>
          <AddWigwamIcon width={40} height={40} />
          <Text
            view="p-8"
            tag="span"
            className={styles.wigwams__createBtn__text}
          >
            cоздать
          </Text>
        </IconButton>
      </div>
      {list.length > 0 && (
        <ListWithTitle title="Приглашения">
          {list.map((invite) => (
            <Card
              key={invite.id}
              card={invite}
              hadnleDeny={() => {}}
              handleConfirm={() => {}}
            />
          ))}
        </ListWithTitle>
      )}
      <ListWithTitle title="Ваши вигвамы">
        {list.map((wigwam) => (
          <Card key={wigwam.id} card={wigwam} navlink={`${wigwam.id}`} />
        ))}
      </ListWithTitle>
    </section>
  );
};

export default AllWigwamsPage;
