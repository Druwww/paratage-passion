// @ts-ignore
import React, {useEffect} from 'react';
import {Grid, Paper, Text, useMantineTheme} from "@mantine/core";
import {useSpring, animated} from "react-spring";
import {useXarrow} from "react-xarrows";
import PaperTextFixedWelcome from "./PaperTextFixedWelcome";
import {t} from "i18next";

interface TestParams {
}

function Test(props:TestParams) {

    const theme = useMantineTheme();

    return (
        <React.Fragment>
            <Grid columns={19} sx={(theme) => ({ padding: theme.spacing.md })} justify="space-between">
                <Grid.Col span={9}>
                    <PaperTextFixedWelcome id="W_T_T1" data={t("Welcome.TitleA")} color={theme.colors.green[6]}/>
                </Grid.Col>
                <Grid.Col span={9}>
                    <PaperTextFixedWelcome id="W_T_T2" data={t("Welcome.TitleP")} color={theme.colors.blue[6]}/>
                </Grid.Col>
            </Grid>
        </React.Fragment>
    );
}

export default Test;