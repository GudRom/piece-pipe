import IconButton from "elements/buttons/IconButton";
import SearchIcon from "elements/icons/SearchIcon";
import TextInput from "elements/TextInput/TextInput";
import { FC, FormEvent, memo } from "react";
import styles from "./Search.module.scss";

interface Props {
  handleForm: (e: FormEvent) => void;
  setText: (value: string) => void;
  text: string;
}

const Search: FC<Props> = ({ handleForm, text, setText }) => {
  return (
    <form onSubmit={handleForm} className={styles.form}>
      <TextInput
        value={text}
        onChange={setText}
        variant={"outlined"}
        placeholder="Найти песню..."
      />
      <IconButton className={styles.form__button}>
        <SearchIcon width={32} height={38} />
      </IconButton>
    </form>
  );
};

export default memo(Search);
