import React from 'react';

import {Divider, Grid, Text, Image, Title, Space} from "@mantine/core";
import PaperTextWelcome from "../components/PaperTextWelcome";
import pictures from "../assets/pictures/links.json";
import {useTranslation} from "react-i18next";
import PaperListWelcome from "../components/PaperListWelcome";

function Welcome() {

    const {t} = useTranslation();

    console.log(t("Welcome.Adventurer.List1", { returnObjects: true }))

    return (
        <React.Fragment>
            <Title order={3}>Question 1</Title>
            <Grid columns={19} sx={(theme) => ({ padding: theme.spacing.md })}>
                <Grid.Col span={9}>
                    <PaperTextWelcome data={"AVENTURIER"}/>
                    <Space h="md"/>
                    <Grid>
                        <Grid.Col span={4}>
                            <Image
                                radius="md"
                                src={pictures.Aventurier}
                                alt="Random unsplash image"
                            />
                        </Grid.Col>
                        <Grid.Col span={8}>
                            <PaperListWelcome data={t("Welcome.Adventurer.List1", { returnObjects: true })}/>
                        </Grid.Col>
                    </Grid>
                    <Space h="md"/>
                    <Grid>
                        <Grid.Col span={8}>
                            <PaperTextWelcome data={"TEXT EXEMPLE"}/>
                        </Grid.Col>
                        <Grid.Col span={4}>
                            <Image
                                radius="md"
                                src={pictures.Aventurier}
                                alt="Random unsplash image"
                            />
                        </Grid.Col>
                    </Grid>
                </Grid.Col>
                <Grid.Col span={1}>
                    <Divider ml="xl" size="lg" variant="dashed" orientation="vertical"/>
                </Grid.Col>
                <Grid.Col span={9}>
                    <PaperTextWelcome data={"PASSIONNE"}/>
                    <Space h="md"/>
                    <Grid>
                        <Grid.Col span={8}>
                            <PaperTextWelcome data={"TEXT EXEMPLE"}/>
                        </Grid.Col>
                        <Grid.Col span={4}>
                            <Image
                                radius="md"
                                src={pictures.Aventurier}
                                alt="Random unsplash image"
                            />
                        </Grid.Col>
                    </Grid>
                    <Space h="md"/>
                    <Grid>
                        <Grid.Col span={4}>
                            <Image
                                radius="md"
                                src={pictures.Aventurier}
                                alt="Random unsplash image"
                            />
                        </Grid.Col>
                        <Grid.Col span={8}>
                            <PaperTextWelcome data={"TEXT EXEMPLE"}/>
                        </Grid.Col>
                    </Grid>
                </Grid.Col>
            </Grid>
        </React.Fragment>
    );
}

export default Welcome;
