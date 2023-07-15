import * as React from "react";

import { AppShell } from "@mantine/core";
import PageHeader from "../components/header";
import Navbar from "../components/sidenavbar";
interface IPrimaryLayoutProps {
    children: React.ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayoutProps> = ({ children }) => {
    const [opened, setOpened] = React.useState(false);

    const toggleMenu = () => {
        setOpened((opened) => !opened);
    };
    return (
        <>
            <AppShell
                navbarOffsetBreakpoint="md"
                navbar={<Navbar opened={opened} key="nav" />}
                header={<PageHeader opened={opened} toggleMenu={toggleMenu} key="header" />}
            >
                {children}
            </AppShell>
        </>
    );
};

export default PrimaryLayout;
