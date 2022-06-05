import React from 'react';

import {Divider, Grid, Image, Title, Space, Center, useMantineTheme} from "@mantine/core";
import PaperTextWelcome from "../components/PaperTextWelcome";
import pictures from "../assets/pictures/links.json";
import {useTranslation} from "react-i18next";
import ListWelcome from "../components/ListWelcome";
import TimeLineWelcome from "../components/TimeLineWelcome";
import FormWelcome from "../components/FormWelcome";
import ImageAnimated from "../components/ImageAnimated";
import ImageBandeau from "../components/ImageBandeau";

function Welcome() {

    const {t} = useTranslation();
    const theme = useMantineTheme();

    return (
        <React.Fragment>

            <ImageBandeau src={pictures.bandeau} alt="Background"/>
            <Space h="xs"/>
            <Title order={3}>{t("Welcome.Question1")}</Title>

            <Grid columns={19} sx={(theme) => ({ padding: theme.spacing.md })}>
                <Grid.Col span={9}>
                    <PaperTextWelcome data={t("Welcome.TitleA")} color={theme.colors.red[6]}/>
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
                            <ListWelcome data={t("Welcome.Adventurer.List1", { returnObjects: true })}/>
                        </Grid.Col>
                    </Grid>
                </Grid.Col>
                <Grid.Col span={1}>
                        <Divider ml="xl" size="lg" variant="dashed" orientation="vertical"/>
                </Grid.Col>
                <Grid.Col span={9}>
                    <PaperTextWelcome data={t("Welcome.TitleP")} color={theme.colors.blue[6]}/>
                    <Space h="md"/>
                    <Grid align="center">
                        <Grid.Col span={8}>
                            <ListWelcome data={t("Welcome.Passionate.List1", { returnObjects: true })}/>
                        </Grid.Col>
                        <Grid.Col span={4}>
                            <Image
                                radius="md"
                                src={pictures.Passioner}
                                alt="Random unsplash image"
                            />
                        </Grid.Col>
                    </Grid>
                </Grid.Col>
            </Grid>

            {
                //Line 4
            }
            <Grid columns={19} sx={(theme) => ({ padding: theme.spacing.md })} justify="space-between" align="center">

                <Grid.Col span={6}>
                    <PaperTextWelcome data={t("Welcome.Adventurer.Question1")} animated="right"/>
                </Grid.Col>

                <Grid.Col span={2}>
                    <ImageAnimated src={pictures.hand1} alt={"Random unsplash image"} animated="right"/>
                </Grid.Col>
                <Grid.Col span={2}>
                    <ImageAnimated src={pictures.hand2} alt={"Random unsplash image"} animated="left"/>
                </Grid.Col>
                <Grid.Col span={6}>
                    <PaperTextWelcome data={t("Welcome.Passionate.Question1")} animated="left"/>
                </Grid.Col>
            </Grid>

            {
                //Line 5
            }
            <Grid columns={20} sx={(theme) => ({ padding: theme.spacing.md })} align="center" >
                <Grid.Col span={8}>
                    <TimeLineWelcome color="red" data={t("Welcome.Adventurer.TimeLine1",{ returnObjects: true })}/>
                </Grid.Col>
                <Grid.Col span={4}>
                    <Image
                        radius="md"
                        src={pictures.Rencontre}
                        alt="Random unsplash image"
                    />
                </Grid.Col>
                <Grid.Col span={8}>
                    <TimeLineWelcome color="blue" data={t("Welcome.Passionate.TimeLine1",{ returnObjects: true })} reverse/>
                </Grid.Col>
            </Grid>

            {
                //Line 6
            }
            <Grid columns={16} sx={(theme) => ({ padding: theme.spacing.md })} align="center">
                <Grid.Col span={4}>
                    <Image
                        radius="md"
                        src={pictures.Activite1}
                        alt="Random unsplash image"
                    />
                </Grid.Col>
                <Grid.Col  span={8}>
                    <TimeLineWelcome data={t("Welcome.TimeLine1",{ returnObjects: true })} />
                </Grid.Col>
                <Grid.Col span={4}>
                    <Image
                        radius="md"
                        src={pictures.Activite2}
                        alt="Random unsplash image"
                    />
                </Grid.Col>
            </Grid>



            {
                //Line 6
            }
            <Grid columns={20} sx={(theme) => ({ padding: theme.spacing.md })} align="center">
                <Grid.Col span={8}>
                    <Center>
                        <ListWelcome data={t("Welcome.Adventurer.List2", { returnObjects: true })}/>
                    </Center>
                </Grid.Col>
                <Grid.Col span={4}>
                    <Image
                        radius="md"
                        src={pictures.Activite3}
                        alt="Random unsplash image"
                    />
                </Grid.Col>
                <Grid.Col span={8}>
                    <Center>
                        <ListWelcome data={t("Welcome.Passionate.List2", { returnObjects: true })}/>
                    </Center>
                </Grid.Col>
            </Grid>

            {
                //Line 7
            }
            <Grid justify="space-around" columns={20} sx={(theme) => ({ padding: theme.spacing.md })} align="center">
                <Grid.Col span={6}>
                    <FormWelcome color={theme.colors.red[6]} form={t("Welcome.Form.Interest.QuestionA",{ returnObjects: true })} isPassionate={false}/>
                </Grid.Col>
                <Grid.Col span={4}>
                    <Image
                        radius="md"
                        src={pictures.Formulaire}
                        alt="Random unsplash image"
                    />
                </Grid.Col>
                <Grid.Col span={6}>
                        <FormWelcome color={theme.colors.blue[6]} form={t("Welcome.Form.Interest.QuestionP", { returnObjects: true })} isPassionate={true}/>
                </Grid.Col>
            </Grid>


        </React.Fragment>
    );
}

export default Welcome;
