import TriangleDialog from "elements/TriangleDialog";
import Button from "elements/buttons/Button";
import Text from "elements/Text";
import { FC, useRef } from "react";
import { ITriangleDialog } from "elements/TriangleDialog";
import ProgressBar from "elements/ProgressBar";
import ScrollTabs from "components/ScrollTabs";
import Search from "components/Search";

interface Props {}
const test = [
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
];
const StartPage: FC<Props> = () => {
  const ref = useRef<ITriangleDialog>(null);
  const handleOpenDialog = () => {
    ref?.current?.show();
  };
  return (
    <section>
      <h1>Start page</h1>
      <Search />
      <ScrollTabs list={test} />
      <ProgressBar maxAmount={10} currentAmount={5} />
      <Button view="contained" onClick={handleOpenDialog}>
        <Text view="button" tag="span" color="primary">
          {"Войти"}
        </Text>
      </Button>
      <TriangleDialog ref={ref}>
        <Text color="primary">{"Triangle dialog"}</Text>
      </TriangleDialog>
    </section>
  );
};

export default StartPage;
