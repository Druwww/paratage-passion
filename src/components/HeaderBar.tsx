import React from 'react';

import {Group, Grid, Text, Avatar, Space} from '@mantine/core';

import {useTranslation} from "react-i18next";
import LanguageSwap from "./LanguageSwap";
import Login from "../auth/Login";
import DarkLightSwitch from "./DarkLightSwitch";

import pictures from "../assets/pictures/links.json";
import ButtonNavigation from "./ButtonNavigation";

function HeaderBar() {

    const { t } = useTranslation();

    return (
        <React.Fragment>

            <Grid>
                <Grid.Col span={6}>
                    <Group spacing="xs">
                        <Avatar
                            src={pictures.Logo}
                            alt="it's me"
                            size="lg"
                        />
                        <Text
                            component="span"
                            align="center"
                            variant="gradient"
                            gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
                            size="xl"
                            weight={700}
                            style={{ fontFamily: 'Greycliff CF, sans-serif' }}
                        >
                            {t("Share your passion")}
                        </Text>
                        <Space h="xl" />
                        <ButtonNavigation name={"Buttons.Navigation_Main"} path={"/"}/>
                    </Group>
                </Grid.Col>
                <Grid.Col span={6}>
                    <Group spacing="xs" position="right">
                        <DarkLightSwitch />
                        <LanguageSwap />
                        <Login />
                    </Group>
                </Grid.Col>
            </Grid>

        </React.Fragment>
    );
}

export default HeaderBar;
