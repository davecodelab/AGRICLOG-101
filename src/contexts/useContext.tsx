import { createContext, useContext } from "react";

interface UserContextType {
    name: string;
    id: string;
    SetId: (id: string) => void;
    setName: (name: string) => void;
}

export const UserContext = createContext<UserContextType>({
    name: "",
    setName: () => {},
    id: "",
    SetId: ()=>{}
});

export const useUser = () => useContext(UserContext);
