import React from 'react';

import {Divider, Grid, Image, Title, Space, Center, useMantineTheme} from "@mantine/core";
import PaperTextWelcome from "../components/Text/PaperTextWelcome";
import pictures from "../assets/pictures/links.json";
import {useTranslation} from "react-i18next";
import ListWelcome from "../components/Text/ListWelcome";
import TimeLineWelcome from "../components/Text/TimeLineWelcome";
import FormWelcome from "../components/Form/FormWelcome";
import ImageAnimated from "../components/Image/ImageAnimated";
import ImageBandeau from "../components/Image/ImageBandeau";
import {Xwrapper} from "react-xarrows";
import ArrowClassic from "../components/Image/ArrowClassic";

function Welcome() {

    const {t} = useTranslation();
    const theme = useMantineTheme();

    return (
        <React.Fragment>
            <Xwrapper>
                <ImageBandeau src={pictures.bandeau} alt="Background"/>
                <Space h="xl"/>
                <Title id="W_T_Q1" order={3}>{t("Welcome.Question1")}</Title>
                <Space h="xl"/>
                <Space h="xl"/>
                <Space h="xl"/>
                <ArrowClassic
                    start={'W_T_Q1'}
                    end="W_T_T1"
                    endAnchor={'top'}
                    startAnchor={'bottom'}
                    color={theme.colorScheme.localeCompare('black') ? theme.colors.gray[6] : "black"}
                    delay={300}
                    animateDrawing={1}
                    />
                <ArrowClassic
                    start={'W_T_Q1'}
                    end="W_T_T2"
                    endAnchor={'top'}
                    startAnchor={'bottom'}
                    color={theme.colorScheme.localeCompare('black') ? theme.colors.gray[6] : "black"}
                    delay={300}
                    animateDrawing={1}
                    />
                <Grid columns={19} sx={(theme) => ({ padding: theme.spacing.md })}>
                    <Grid.Col span={9}>
                        <PaperTextWelcome id="W_T_T1" data={t("Welcome.TitleA")} color={theme.colors.green[6]}/>
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
                    <Grid.Col  span={1}>
                            <Center style={{ height: "300px" }}>
                                <Divider size="lg" variant="dashed" orientation="vertical"/>

                            </Center>
                    </Grid.Col>
                    <Grid.Col span={9}>
                        <PaperTextWelcome id="W_T_T2" data={t("Welcome.TitleP")} color={theme.colors.blue[6]}/>
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
                        <PaperTextWelcome  id="W_T_QA"  data={t("Welcome.Adventurer.Question1")} animated="right"/>
                    </Grid.Col>

                    <Grid.Col span={2}>
                        <ImageAnimated src={pictures.hand1} alt={"Random unsplash image"} animated="right"/>
                    </Grid.Col>
                    <Grid.Col span={2}>
                        <ImageAnimated src={pictures.hand2} alt={"Random unsplash image"} animated="left"/>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <PaperTextWelcome id="W_T_QP" data={t("Welcome.Passionate.Question1")} animated="left"/>
                    </Grid.Col>
                    <ArrowClassic
                        start={'W_T_QA'}
                        end="W_TL_A"
                        color={theme.colors.green[6]}
                        endAnchor={{position: "top", offset: { x: -150, y: -20 }}}
                        startAnchor={'bottom'}
                        animateDrawing={3}
                        delay={3000}/>
                    <ArrowClassic
                        start={'W_T_QP'}
                        end="W_TL_P"
                        color={theme.colors.blue[6]}
                        endAnchor={{position: "top", offset: { x: 200, y : -20 }}}
                        startAnchor={'bottom'}
                        animateDrawing={3}
                        delay={3000}/>
                </Grid>

                {
                    //Line 5
                }
                <Grid columns={20} sx={(theme) => ({ padding: theme.spacing.md })} align="center" >
                    <Grid.Col span={8}>
                        <TimeLineWelcome id="W_TL_A" color="green" data={t("Welcome.Adventurer.TimeLine1",{ returnObjects: true })}/>
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <Image
                            radius="md"
                            src={pictures.Rencontre}
                            alt="Random unsplash image"
                        />
                    </Grid.Col>
                    <Grid.Col span={8}>
                        <TimeLineWelcome id="W_TL_P" color="blue" data={t("Welcome.Passionate.TimeLine1",{ returnObjects: true })} reverse/>
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
                        <TimeLineWelcome id="W_TL_C" data={t("Welcome.TimeLine1",{ returnObjects: true })} />
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <Image
                            radius="md"
                            src={pictures.Activite2}
                            alt="Random unsplash image"
                        />
                    </Grid.Col>
                </Grid>

                <ArrowClassic start={'W_TL_C'} end="W_L_A" color={theme.colors.green[6]} endAnchor={{position: "top", offset: {y: -20 }}} startAnchor={'bottom'}/>
                <ArrowClassic start={'W_TL_C'} end="W_L_P" color={theme.colors.blue[6]} endAnchor={{position: "top", offset: {y : -20 }}} startAnchor={'bottom'}/>

                {
                    //Line 6
                }
                <Grid columns={20} sx={(theme) => ({ padding: theme.spacing.md })} align="center">
                    <Grid.Col span={8}>
                        <Center>
                            <ListWelcome id="W_L_A" data={t("Welcome.Adventurer.List2", { returnObjects: true })}/>
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
                            <ListWelcome id="W_L_P" data={t("Welcome.Passionate.List2", { returnObjects: true })}/>
                        </Center>
                    </Grid.Col>
                </Grid>

                {
                    //Line 7
                }
                <Grid justify="space-around" columns={20} sx={(theme) => ({ padding: theme.spacing.md })} align="center">
                    <Grid.Col span={6}>
                        <FormWelcome color={theme.colors.green[6]} form={t("Welcome.Form.Interest.QuestionA",{ returnObjects: true })} personType='Adventurer'/>
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <Image
                            radius="md"
                            src={pictures.Formulaire}
                            alt="Random unsplash image"
                        />
                    </Grid.Col>
                    <Grid.Col span={6}>
                            <FormWelcome color={theme.colors.blue[6]} form={t("Welcome.Form.Interest.QuestionP", { returnObjects: true })} personType='Passionate'/>
                    </Grid.Col>
                </Grid>
            </Xwrapper>
        </React.Fragment>
    );
}

export default Welcome;
