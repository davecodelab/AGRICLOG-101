import { useEffect, useState } from "react";
import axios from "axios";
import {Navigate, useNavigate} from "react-router-dom";
import { UserContext } from "./useContext.tsx";
import {Navigator} from "react-router-dom";

interface Props {
    children: React.ReactNode;
}

const Protect: React.FC<Props> = ({ children }) => {
    const [state, setStatus] = useState<boolean | null>(null);
    const [name, setName] = useState("");
    const [id , SetId ] = useState("")
    const navigate = useNavigate();

    const fetchStatus = async () => {
        const URI = import.meta.env.VITE_BACKEND_URI;
        try {
            const response = await axios.get(`${URI}/protected`, {
                withCredentials: true
            });
            if (response.data.status=== true) {
                if(response.data.state === "farmer".toLowerCase()){
                    navigate("/dashboard/farmer");
                    setName(response.data.user.name);
                    SetId(response.data.user.id);
                    setStatus(true);
                }else{
                    navigate("/dashboard/buyer");
                    setName(response.data.user.name);
                    setStatus(true);
                }

            } else {
                setStatus(false);
            }
        } catch (e) {
            console.log(e);
            setStatus(false);
        }
    };

    useEffect(() => {
        fetchStatus();
    }, []);

    if (state === null) return null; // loading state

    return state ? (
        <UserContext.Provider value={{ name, setName , id , SetId}}>
            {children}
        </UserContext.Provider>
    ) : (
        <Navigate to="/login" replace />
    );
};

export default Protect;
