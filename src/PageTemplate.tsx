import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Copyright from "./Copyright";
import AppNavBar from "./AppNavbar";
import * as React from "react";
export interface PageTemplateProps {
    children: React.ReactNode;
}
function PageTemplate({ children }: PageTemplateProps) {
    return (
        <div>
            <AppNavBar></AppNavBar>
            {children}
            <Copyright></Copyright>
        </div>
    );
}

export default PageTemplate;
