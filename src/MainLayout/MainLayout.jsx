// import React from 'react';

import { Outlet } from "react-router";
import Nabvar from "../Componets/Nabvar/Nabvar";

const MainLayout = () => {
    return (
        <div>
            <Nabvar />
            <Outlet/>
        </div>
    );
};

export default MainLayout;