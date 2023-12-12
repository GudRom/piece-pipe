import Button from "elements/buttons/Button";
import Text from "elements/Text";
import { FC } from "react";

interface Props {}

const StartPage: FC<Props> = () => {
  return (
    <section>
      <h1>Start page</h1>
      <Button view="contained">
        <Text view="button" tag="span" color="primary">
          {"Войти"}
        </Text>
      </Button>
    </section>
  );
};

export default StartPage;
