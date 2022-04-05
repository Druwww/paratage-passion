import React from 'react';

import { Group, Grid, Text } from '@mantine/core';

import { Aperture } from 'tabler-icons-react';

//import LanguageSwap from "./LanguageSwap";
//import Login from "./Login";
import {useTranslation} from "react-i18next";
import LanguageSwap from "./LanguageSwap";
import Login from "./Login";
import DarkLightSwitch from "./DarkLightSwitch";

function HeaderBar() {

    const { t } = useTranslation();

    return (
        <React.Fragment>

            <Grid>
                <Grid.Col span={6}>
                    <Group spacing="xs">
                        <Aperture
                            size={48}
                            strokeWidth={2}
                            color={'#404abf'}
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
