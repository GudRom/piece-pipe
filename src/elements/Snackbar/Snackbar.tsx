import classNames from "classnames";
import {
  ReactNode,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import styles from "./Snackbar.module.scss";

export interface ISnackbar {
  get isOpen(): boolean;

  show(): void;
  hide(): void;
}

interface Props {
  children: ReactNode;
}

const Snackbar = forwardRef<ISnackbar, Props>(function TriangleDialog(
  { children },
  ref
) {
  const [isClosing, setIsClosing] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        get isOpen() {
          return dialogRef?.current?.open;
        },
        show() {
          dialogRef?.current?.show();
          setTimeout(() => setIsClosing(true), 3000);
        },
        hide() {
          dialogRef?.current?.close();
        },
      } as ISnackbar;
    },
    []
  );

  const dialogClass = classNames(styles.snackbar, {
    [styles.snackbar_hide]: isClosing,
  });

  return (
    <dialog
      ref={dialogRef}
      className={dialogClass}
      onAnimationEnd={() => {
        if (isClosing) {
          dialogRef?.current?.close();
          setIsClosing(false);
        }
      }}
    >
      {children}
    </dialog>
  );
});

export default Snackbar;
