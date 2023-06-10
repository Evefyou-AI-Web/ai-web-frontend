import { FC, PropsWithChildren } from "react";
import { Navigate} from "react-router";

export const AuthRoute: FC<PropsWithChildren> = ({children}) => {

    if(true) {
        return <Navigate to="/login" />;
    }

    return <div>{children}</div>
};