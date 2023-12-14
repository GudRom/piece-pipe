import TriangleDialog from "elements/TriangleDialog";
import Button from "elements/buttons/Button";
import Text from "elements/Text";
import { FC, useRef } from "react";
import { ITriangleDialog } from "elements/TriangleDialog";
import ProgressBar from "elements/ProgressBar";
import Avatar from "elements/Avatar";

interface Props {}

const StartPage: FC<Props> = () => {
  const ref = useRef<ITriangleDialog>(null);
  const handleOpenDialog = () => {
    ref?.current?.show();
  };
  return (
    <section>
      <h1>Start page</h1>
      <Avatar user={{ id: 1, name: "papi", avatar: "asdfsgf" }} isList={true} />
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
