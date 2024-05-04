import { Outlet } from "react-router-dom";
import CustomAppBar from "./CustomAppBar";

export default function Layout(){
    return (
        <>
            <CustomAppBar />
            <Outlet />
        </>
    )
}