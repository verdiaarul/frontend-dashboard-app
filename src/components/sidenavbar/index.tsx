import React from 'react'
import { Navbar as MantineNavbar, Group, Code, ScrollArea, createStyles, rem, NavLink } from '@mantine/core';
import {
    IconMapPin,
    IconTicket,
    IconLayoutDashboard,
    IconDeviceGamepad2,
} from '@tabler/icons-react';
// import { useNavigate } from "react-router-dom";



interface INavbarProps {
    opened: boolean;
}

const Navbar: React.FunctionComponent<INavbarProps> = ({ opened }) => {



    return (
        <>
            <MantineNavbar
                p="md"
                hiddenBreakpoint="md"
                hidden={!opened}
                width={{ xs: 200, lg: 250 }}
            >
                {" "}

                <MantineNavbar.Section grow>

                    <NavLink
                        label="Dashboard"
                        sx={{ color: "blue" }}
                        icon={<IconLayoutDashboard size={16} stroke={1.5} />}
                        childrenOffset={28}
                    // rightSection={<IconChevronUp size={16} stroke={2} color={"#0331A1"} />}
                    >


                    </NavLink>
                    <NavLink
                        label="Trainings"
                        sx={{ color: "blue" }}
                        icon={<IconDeviceGamepad2 size={16} stroke={1.5} />}
                        childrenOffset={28}
                    >

                    </NavLink>
                    <NavLink
                        label="Users"
                        sx={{ color: "blue" }}
                        icon={<IconTicket size={16} stroke={1.5} />}
                        childrenOffset={28}
                    >

                    </NavLink>
                    <NavLink
                        label="Analytics"
                        sx={{ color: "blue" }}
                        icon={<IconMapPin size={16} stroke={1.5} />}
                        childrenOffset={28}
                    >

                    </NavLink>
                    <NavLink
                        label="My Account"
                        sx={{ color: "blue" }}
                        icon={<IconMapPin size={16} stroke={1.5} />}
                        childrenOffset={28}
                    >

                    </NavLink>
                    <NavLink
                        label="Support"
                        sx={{ color: "blue" }}
                        icon={<IconMapPin size={16} stroke={1.5} />}
                        childrenOffset={28}
                    >

                    </NavLink>
                </MantineNavbar.Section>
                {/* <MantineNavbar.Section
                    pt={"md"}
                    sx={{ borderTop: "1px solid #DEE2E6" }}
                >
                    <NavLink label="Help"></NavLink>
                    <NavLink label="Terms of Use"></NavLink>
                    <NavLink
                        label="Logout"
                        onClick={handleSignoutClick}
                        icon={<IconLogout size={16} stroke={1.5} />}
                    ></NavLink>



                </MantineNavbar.Section> */}
            </MantineNavbar>
        </>
    );
};

export default Navbar;
