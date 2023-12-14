import IconButton from "elements/buttons/IconButton";
import SearchIcon from "elements/icons/SearchIcon";
import TextInput from "elements/TextInput/TextInput";
import { FC, FormEvent, useCallback, useState } from "react";
import styles from "./Search.module.scss";

interface Props {}

const Search: FC<Props> = () => {
  const [text, setText] = useState("");
  
  const handleInput = useCallback((value: string) => {
    setText(value);
  }, []);

  const handleForm = useCallback((e: FormEvent) => {
    e.preventDefault();
    setText("");
  }, []);
  return (
    <form onSubmit={handleForm} className={styles.form}>
      <TextInput
        value={text}
        onChange={handleInput}
        variant={"outlined"}
        placeholder="Найти песню..."
      />
      <IconButton className={styles.form__button}>
        <SearchIcon width={32} height={38} />
      </IconButton>
    </form>
  );
};

export default Search;
