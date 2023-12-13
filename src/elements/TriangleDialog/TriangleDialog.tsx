import CrossLikeBoneIcon from "elements/icons/CrossLikeBoneIcon";
import IconButton from "elements/buttons/IconButton";
import {
  ReactNode,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import styles from "./TriangleDialog.module.scss";
import classNames from "classnames";

export interface ITriangleDialog {
  get isOpen(): boolean;

  show(): void;
  hide(): void;
}

interface Props {
  children: ReactNode;
}

const TriangleDialog = forwardRef<ITriangleDialog, Props>(
  function TriangleDialog({ children }, ref) {
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
            dialogRef?.current?.showModal();
          },
          hide() {
            dialogRef?.current?.close();
          },
        } as ITriangleDialog;
      },
      []
    );

    const handleCloseButtonClick = () => {
      setIsClosing(true);
    };
    const dialogClass = classNames(styles.dialog, {
      [styles.dialog_hide]: isClosing,
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
        <div className={styles.dialog__content}>
          {children}
          <IconButton
            onClick={handleCloseButtonClick}
            className={styles.dialog__btn}
          >
            <CrossLikeBoneIcon />
          </IconButton>
        </div>
      </dialog>
    );
  }
);

export default TriangleDialog;
