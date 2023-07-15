import React from 'react'
import PrimaryLayout from '../../layouts/primary-layout'
import { Card, Group, Text, Space, Grid, Stepper, ThemeIcon, List, Center, Box } from '@mantine/core';
import { Chart } from "react-google-charts";
import Piechart from '../../components/charts/piechart';
import { Columnchart1, Columnchart2 } from '../../components/charts/columnchart';
import { IconArrowZigZag, IconCircle } from '@tabler/icons-react';
import Donutchart from '../../components/charts/donutchart';

export const data = [
    ["Week", ""],
    ["M", 100],
    ["T", 117],
    ["W", 66],
    ["T", 100],
    ["F", 55],
    ["S", 98],
    ["S", 103],
];

export const options = {
    // title: "Company Performance",
    chart: {
        backgroundColor: 'green'
    },
    hAxis: { titleTextStyle: { color: "#333" } },

    // vAxis: { minValue: 0 },
    // chartArea: { width: "100%", height: "70%" },
    vAxis: {
        baselineColor: 'transparent',
        gridlines: {
            count: 0
        },
        textPosition: 'none'
    }

};

export default function Homepage() {

    return (
        <PrimaryLayout>
            <Grid>
                <Grid.Col lg={3} xs={12}
                // span={3}
                >
                    <Card shadow="md" padding="xs" radius="md" withBorder>
                        <Text sx={{ fontSize: 15 }}>
                            In Trainig Workers
                        </Text>

                        <Grid>
                            <Grid.Col span={'auto'}>
                                <Box sx={{ paddingTop: 80 }}>
                                    <Center>
                                        <Text fw={700} sx={{ fontSize: 20 }}>
                                            33,54
                                        </Text>

                                    </Center>
                                </Box>
                                <Space h={"md"} />
                                <Box sx={{ backgroundColor: "lightgreen" }}>
                                    <Text sx={{ fontSize: 12 }}>
                                        <IconArrowZigZag />
                                        20%
                                    </Text>
                                </Box>
                            </Grid.Col>
                            <Grid.Col span={9}>
                                <Chart
                                    chartType="AreaChart"
                                    // width="100%"
                                    // height="400px"
                                    data={data}
                                    options={options}

                                />
                            </Grid.Col>

                        </Grid>
                    </Card>
                </Grid.Col>
                <Grid.Col lg={3} xs={12}
                // span={3}
                >
                    <Card shadow="md" padding="xs" radius="md" withBorder>

                        <Text>
                            Video Watch-Time
                        </Text>
                        <Grid>
                            {/* <Group position='apart'> */}
                            <Grid.Col span={'auto'}>
                                <Box sx={{ paddingTop: 80 }}>
                                    <Center>
                                        <Text fw={700} sx={{ fontSize: 20 }} >
                                            33,54
                                        </Text>
                                    </Center>
                                </Box>
                                <Space h={"md"} />

                                <Box sx={{ backgroundColor: "lightcoral" }}>
                                    <Text sx={{ fontSize: 12 }}>
                                        <IconArrowZigZag />
                                        20%
                                    </Text>
                                </Box>
                            </Grid.Col>
                            <Grid.Col span={9}>

                                <Chart
                                    chartType="AreaChart"
                                    // width="100%"
                                    // height="400px"
                                    data={data}
                                    options={options}
                                />
                            </Grid.Col>

                        </Grid>
                    </Card>
                </Grid.Col>
                <Grid.Col lg={3} xs={12}
                // span={3}
                >
                    <Card shadow="md" padding="xs" radius="md" withBorder>
                        <Text>
                            % Workers Passing Quiz
                        </Text>
                        <Grid>
                            <Grid.Col span={"auto"}>
                                <Box sx={{ paddingTop: 80 }}>
                                    <Center>
                                        <Text fw={700} sx={{ fontSize: 20 }}>
                                            33,54
                                        </Text>
                                    </Center>
                                </Box>
                                <Space h={"md"} />

                                <Box sx={{ backgroundColor: "lightgreen" }}>
                                    <Text sx={{ fontSize: 12 }}>
                                        <IconArrowZigZag />
                                        20%
                                    </Text>
                                </Box>
                            </Grid.Col>
                            <Grid.Col span={9}>

                                <Chart
                                    chartType="AreaChart"
                                    // width="100%"
                                    // height="400px"
                                    data={data}
                                    options={options}
                                />
                            </Grid.Col>

                        </Grid>
                    </Card>
                </Grid.Col>
                <Grid.Col lg={3} xs={12}
                // span={3}
                >
                    <Card shadow="md" padding="xs" radius="md" withBorder>
                        <Text >
                            Avg. Days Taken
                        </Text>
                        <Grid>
                            <Grid.Col span={"auto"}>
                                <Box sx={{ paddingTop: 80 }}>
                                    <Center>
                                        <Text fw={700} sx={{ fontSize: 20 }}>
                                            33,54
                                        </Text>
                                    </Center>
                                </Box>
                                <Space h={"md"} />

                                <Box sx={{ backgroundColor: "lightgreen" }}>
                                    <Text sx={{ fontSize: 12 }}>
                                        <IconArrowZigZag />
                                        20%
                                    </Text>
                                </Box>
                            </Grid.Col>
                            <Grid.Col span={9}>

                                <Chart
                                    chartType="AreaChart"
                                    // width="100%"
                                    // height="400px"
                                    data={data}
                                    options={options}
                                />
                            </Grid.Col>

                        </Grid>
                    </Card>
                </Grid.Col>

                {/* </Group> */}
            </Grid>
            <Space h={"md"} />
            <Space h={"md"} />



            <Grid>
                <Grid.Col lg={4} xs={12}
                // span={4}
                >
                    <Card shadow="md" padding="lg" radius="md" withBorder>
                        <Text>
                            Chapter Wise Status
                        </Text>
                        <Piechart />
                    </Card>
                </Grid.Col>
                <Grid.Col lg={8} xs={12}
                // span={8}
                >
                    <Card shadow="md" padding="lg" radius="md" withBorder>
                        <Group position='apart'>
                            <Text>
                                Last 14 Days Active Workers In Training
                            </Text>
                            <Text>
                                Last 14 Days
                            </Text>
                        </Group>
                        <Columnchart1 />
                    </Card>
                </Grid.Col>
            </Grid>
            <Space h={"md"} />
            <Space h={"md"} />

            <Grid>
                <Grid.Col lg={"auto"} xs={12}
                // span={"auto"}
                >
                    <Card shadow="md" padding="sm" radius="md" withBorder>
                        <Text>
                            Monthly Training Activity
                        </Text>
                        <Text>
                            16% more enrollees this month
                        </Text>

                        <Space h={"sm"} />

                        <List
                            spacing="xs"
                            size="sm"
                            center
                            icon={
                                <ThemeIcon color="blue" size={15} radius="xl">
                                    <IconCircle size="1rem" />
                                </ThemeIcon>
                            }
                        >
                            <List.Item>course a</List.Item>
                            <Box sx={{ paddingLeft: 35 }}>
                                <Text sx={{ color: "grey", fontSize: 12 }}>
                                    23 Workers Took This Course This Week
                                </Text>
                            </Box>

                            <List.Item>course b</List.Item>
                            <Box sx={{ paddingLeft: 35 }}>
                                <Text sx={{ color: "grey", fontSize: 12, alignContent: "center" }}>
                                    253 Workers Took This Course This Week
                                </Text>
                            </Box>

                            <List.Item>course c</List.Item>
                            <Box sx={{ paddingLeft: 35 }}>
                                <Text sx={{ color: "grey", fontSize: 12 }}>
                                    253 Workers Took This Course This Week
                                </Text>
                            </Box>

                            <List.Item>course d</List.Item>
                            <Box sx={{ paddingLeft: 35 }}>
                                <Text sx={{ color: "grey", fontSize: 12 }}>
                                    253 Workers Took This Course This Week
                                </Text>
                            </Box>

                        </List>
                    </Card>
                </Grid.Col>


                <Grid.Col lg={"auto"} xs={12}
                // span={"auto"}
                >
                    <Card shadow="md" padding="lg" radius="md" withBorder>
                        <Text>
                            Quiz Passing %
                        </Text>
                        <Donutchart />
                    </Card>
                </Grid.Col>
                <Grid.Col lg={6} xs={12}
                // span={6}
                >
                    <Card shadow="md" padding="lg" radius="md" withBorder>
                        <Group position='apart'>
                            <Text>
                                Daily Training Competitons
                            </Text>
                            <Text>
                                Last 7 Days
                            </Text>
                        </Group>
                        <Columnchart2 />
                    </Card>
                </Grid.Col>
            </Grid>
        </PrimaryLayout>
    )
}
