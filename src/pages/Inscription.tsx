import React from 'react';

import {useTranslation} from "react-i18next";
import {Divider, Grid, Space, Title, useMantineTheme} from "@mantine/core";
import {Xwrapper} from "react-xarrows";
import pictures from "../assets/pictures/links.json";
import ImageBandeau from "../components/Image/ImageBandeau";
import ButtonClassic from "../components/Button/ButtonClassic";
import ArrowClassic from "../components/Image/ArrowClassic";
import {useNavigate} from "react-router-dom";

function Inscription() {

    const { t } = useTranslation();
    const theme = useMantineTheme();
    const navigate = useNavigate();

    return (
        <React.Fragment>
            <Xwrapper>
                <ImageBandeau src={pictures.bandeau} alt="Background"/>
                <Space h="xl"/>
                <Title id="I_T_1" order={3}>Prêt pour de nouvelles rencontre ?</Title>
                <Space h="xl"/>
                <Space h="xl"/>
                <Space h="xl"/>
                <Space h="xl"/>
                <Grid justify="space-around" sx={(theme) => ({ padding: theme.spacing.md })}>
                    <Grid.Col span={4}>
                        <ButtonClassic
                            id="I_B_A"
                            name={"Inscrit toi en futur Avenuturier !"}
                            action={() => console.log("Aventurier")}
                            color={"green"}
                        />
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <ButtonClassic
                            id="I_B_P"
                            name={"Inscrit toi Pasionnée !"}
                            action={() => console.log("Passionnée")}
                            color={"blue"}
                        />
                    </Grid.Col>
                </Grid>
                <ArrowClassic
                    start="I_T_1"
                    end="I_B_A"
                    color={theme.colors.green[6]}
                    endAnchor={"top"}
                    startAnchor={'bottom'}
                    animateDrawing={3}
                />
                <ArrowClassic
                    start="I_T_1"
                    end="I_B_P"
                    color={theme.colors.blue[6]}
                    endAnchor={"top"}
                    startAnchor={'bottom'}
                    animateDrawing={3}
                />
                <Space h="xl"/>
                <Divider my="sm" variant="dashed" />
                <Space h="xl"/>
                <Title id="I_T_1" order={3}>Tu souhaites comprendre le concept ?</Title>
                <Space h="xl"/>

                <ButtonClassic
                    id="I_B_L"
                    name={"Page Explication"}
                    action={() => navigate("/welcome")}
                />
                <Space h="xl"/>
                <Divider my="sm" variant="dashed" />
                <Space h="xl"/>
                <Title id="I_T_1" order={3}>Déja inscrit ?</Title>
                <Space h="xl"/>
                <ButtonClassic
                    id="I_B_L"
                    name={"Verfirie tes informations ici"}
                    action={() => console.log("Retour")}
                />
            </Xwrapper>
        </React.Fragment>
    );
}

export default Inscription;
