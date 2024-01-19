import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "store/hooks";

interface Props {
  element: ReactNode;
}

const RequireAuth: FC<Props> = ({ element }) => {
  const currentUser = useAppSelector((state) => state.userReducer.currentUser);
  return currentUser ? element : <Navigate to={"/defend"} />;
};

export default RequireAuth;
