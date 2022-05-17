// @ts-ignore
import React from 'react';

import {AppShell, Header, Footer, Title, Space} from '@mantine/core';
import HeaderBar from "../components/HeaderBar";
import {useTranslation} from "react-i18next";


function MainApp() {

    const { t } = useTranslation();

    return (
        <React.Fragment>
            <AppShell
                navbarOffsetBreakpoint="sm"
                asideOffsetBreakpoint="sm"
                fixed
                padding="md"
                header={<Header height={70} p="md"><HeaderBar /></Header>}
                footer={<Footer height={60} p="md"> Application footer </Footer>}
                styles={(theme) => ({
                    main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
                })}
            >
                <Title order={1}>{t("Welcome Text")}</Title>
                <Space h="xl" />
                <iframe src="https://giphy.com/embed/JIX9t2j0ZTN9S" width="480" height="480" frameBorder="0"
                        className="giphy-embed" allowFullScreen></iframe>

            </AppShell>
        </React.Fragment>
    );
}

export default MainApp;
