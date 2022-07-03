import React, {useState} from 'react';

import {useTranslation} from "react-i18next";
import {Divider, Grid, Space, Title, useMantineTheme, Modal} from "@mantine/core";
import {Xwrapper} from "react-xarrows";
import pictures from "../assets/pictures/links.json";
import ImageBandeau from "../components/Image/ImageBandeau";
import ButtonClassic from "../components/Button/ButtonClassic";
import ArrowClassic from "../components/Image/ArrowClassic";
import {useNavigate} from "react-router-dom";
import FormSignin from "../components/Form/FormSignin";

function Inscription() {

    const { t } = useTranslation();
    const theme = useMantineTheme();
    const navigate = useNavigate();

    const [opened, setOpened] = useState(false);
    //0 : idle, 1 : Adventurer, 2 : Passionaite, 3 : Login
    const [formulaire, setFormulaire] = useState(0);

    const triggerForm = (typeForme : number) => {
        setOpened(true)
        setFormulaire(typeForme)
    }

    const renderTitleForms = (typeForme : number) => {
        switch (typeForme){
            case 1 :
                return "Inscription Aventurier"
                break;
            case 2 :
                return "Inscription Passionné"
                break;
            case 3 :
                return "Connexion"
                break;
            default :
                return "Erreur"
        }
    }

    const renderForms = (typeForme : number) => {
        switch (typeForme){
            case 1 :
                return (<FormSignin close={() => setOpened(false)} type={"Adventurer"}/>)
                break;
            case 2 :
                return (<FormSignin close={() => setOpened(false)} type={"Passionate"}/>)
                break;
            case 3 :
                return (<Title>Login</Title>)
                break;
            default :
                return (<Title>Error</Title>)
        }
    }

    return (
        <React.Fragment>
            <Xwrapper>
                <Modal
                    opened={opened}
                    onClose={() => setOpened(false)}
                    title={renderTitleForms(formulaire)}
                >
                    {renderForms(formulaire)}
                </Modal>

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
                            action={() => triggerForm(1)}
                            color={"green"}
                        />
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <ButtonClassic
                            id="I_B_P"
                            name={"Inscrit toi Pasionnée !"}
                            action={() => triggerForm(2)}
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
                    action={() => triggerForm(3)}
                />
            </Xwrapper>
        </React.Fragment>
    );
}

export default Inscription;
