// import React from "react";
// import { Header } from "@mantine/core";
// import { Center, Text } from '@mantine/core';

// interface IHeaderProps {
//     toggleMenu: () => void;
//     opened: boolean;
// }


// const PageHeader: React.FunctionComponent<IHeaderProps> = ({
//     opened,
//     toggleMenu,
// }) => {
//     return (
//         <Header height={60}
//             sx={{ backgroundColor: "blue" }}>
//             <Center>
//                 <Text sx={{ fontSize: 22 }}>
//                     Hello, Puneet Dhiman
//                 </Text>
//             </Center>
//         </Header>
//     )
// }

// export default (PageHeader);


import * as React from "react";
import {
    Burger,
    Button,
    Flex,
    Header as MantineHeader,
    MediaQuery,
    Text,
    Image,
    Title
} from "@mantine/core";
import chaabilogo from "../../chaabilogo.png";



interface IHeaderProps {
    toggleMenu: () => void;
    opened: boolean;
}

const Header: React.FunctionComponent<IHeaderProps> = ({
    opened,
    toggleMenu,
}) => {
    return (
        <MantineHeader
            sx={{ backgroundColor: "#032681", color: "white", zIndex: 402 }}
            height={{ base: 70, md: 70 }}
        // p="md"
        >
            <div style={{ display: "flex", alignItems: "flex-start", height: "100%" }}>
                <MediaQuery largerThan="md" styles={{ display: "none" }}>
                    <Burger
                        sx={{ position: "absolute" }}
                        color="white"
                        opened={opened}
                        onClick={toggleMenu}
                        size="sm"
                        mr="xl"
                    />
                </MediaQuery>
                <MediaQuery smallerThan="sm" styles={{ display: "none" }}>

                    <Image width={250} height={80} src={chaabilogo} />
                </MediaQuery>
                {/* <Flex w={"100%"} px={20} gap={20}> */}

                <Text size={30} mx={"auto"} color="white">
                    Hello, Puneet Dhiman
                    <Text sx={{ fontSize: 12 }}>
                        Following Is Your Organization's Performance Summary
                    </Text>
                </Text>


                {/* </Flex> */}

            </div>
        </MantineHeader>
    );
};

export default Header;
