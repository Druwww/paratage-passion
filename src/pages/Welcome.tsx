import React from 'react';

import {Divider, Grid, Image, Title, Space} from "@mantine/core";
import PaperTextWelcome from "../components/PaperTextWelcome";
import pictures from "../assets/pictures/links.json";
import {useTranslation} from "react-i18next";
import PaperListWelcome from "../components/PaperListWelcome";
import PaperTimelineWelcome from "../components/PaperTimeLineWelcome";
import FormWelcome from "../components/FormWelcome";

function Welcome() {

    const {t} = useTranslation();

    return (
        <React.Fragment>

            <Title order={3}>Question 1</Title>

            {
                //Line 1-2-3
            }
            <Grid columns={19} sx={(theme) => ({ padding: theme.spacing.md })}>
                <Grid.Col span={9}>
                    <PaperTextWelcome data={"AVENTURIER"}/>
                    <Space h="md"/>
                    <Grid align="center">
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
                    <Grid align="center">
                        <Grid.Col span={8}>
                            <PaperListWelcome data={t("Welcome.Adventurer.List2", { returnObjects: true })}/>
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
                    <Grid align="center">
                        <Grid.Col span={8}>
                            <PaperListWelcome data={t("Welcome.Passionate.List1", { returnObjects: true })}/>
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
                    <Grid align="center">
                        <Grid.Col span={4}>
                            <Image
                                radius="md"
                                src={pictures.Aventurier}
                                alt="Random unsplash image"
                            />
                        </Grid.Col>
                        <Grid.Col span={8}>
                            <PaperListWelcome data={t("Welcome.Passionate.List2", { returnObjects: true })}/>
                        </Grid.Col>
                    </Grid>
                </Grid.Col>
            </Grid>

            {
                //Line 4
            }
            <Grid columns={19} sx={(theme) => ({ padding: theme.spacing.md })} align="center">
                <Grid.Col span={9}>
                    <PaperTextWelcome data={t("Welcome.Adventurer.Question1")}/>
                </Grid.Col>
                <Grid.Col span={1}>
                    <Image
                        radius="md"
                        src={pictures.Handshake}
                        alt="Random unsplash image"
                    />
                </Grid.Col>
                <Grid.Col span={9}>
                    <PaperTextWelcome data={t("Welcome.Passionate.Question1")}/>
                </Grid.Col>
            </Grid>

            {
                //Line 5
            }
            <Grid columns={20} sx={(theme) => ({ padding: theme.spacing.md })} align="center">
                <Grid.Col span={8}>
                    <PaperTimelineWelcome data={t("Welcome.Passionate.TimeLine1",{ returnObjects: true })}/>
                </Grid.Col>
                <Grid.Col span={4}>
                    <Image
                        radius="md"
                        src={pictures.Aventurier}
                        alt="Random unsplash image"
                    />
                </Grid.Col>
                <Grid.Col span={8}>
                    <PaperTimelineWelcome data={t("Welcome.Passionate.TimeLine1",{ returnObjects: true })} reverse/>
                </Grid.Col>
            </Grid>

            {
                //Line 3
            }
            <Grid columns={16} sx={(theme) => ({ padding: theme.spacing.md })} align="center">
                <Grid.Col span={4}>
                    <Image
                        radius="md"
                        src={pictures.Aventurier}
                        alt="Random unsplash image"
                    />
                </Grid.Col>
                <Grid.Col  span={8}>
                    <PaperTimelineWelcome data={t("Welcome.Passionate.TimeLine1",{ returnObjects: true })} />
                </Grid.Col>
                <Grid.Col span={4}>
                    <Image
                        radius="md"
                        src={pictures.Aventurier}
                        alt="Random unsplash image"
                    />
                </Grid.Col>
            </Grid>



            {
                //Line 6
            }
            <Grid columns={20} sx={(theme) => ({ padding: theme.spacing.md })} align="center">
                <Grid.Col span={8}>
                    <PaperListWelcome data={t("Welcome.Passionate.List1", { returnObjects: true })}/>
                </Grid.Col>
                <Grid.Col span={4}>
                    <Image
                        radius="md"
                        src={pictures.Aventurier}
                        alt="Random unsplash image"
                    />
                </Grid.Col>
                <Grid.Col span={8}>
                    <PaperListWelcome data={t("Welcome.Passionate.List1", { returnObjects: true })}/>
                </Grid.Col>
            </Grid>

            {
                //Line 7
            }
            <Grid columns={20} sx={(theme) => ({ padding: theme.spacing.md })} align="center">
                <Grid.Col span={8}>
                    <FormWelcome form={t("Welcome.Form.Interest.QuestionA",{ returnObjects: true })} isPassionate={false}/>
                </Grid.Col>
                <Grid.Col span={4}>
                    <Image
                        radius="md"
                        src={pictures.Aventurier}
                        alt="Random unsplash image"
                    />
                </Grid.Col>
                <Grid.Col span={8}>
                    <FormWelcome form={t("Welcome.Form.Interest.QuestionA", { returnObjects: true })} isPassionate={false}/>
                </Grid.Col>
            </Grid>


        </React.Fragment>
    );
}

export default Welcome;
