// @ts-ignore
import React from 'react';

import { AppShell, Header, Footer } from '@mantine/core';
import HeaderBar from "../components/HeaderBar";



function MainApp() {

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
                Coucou Alice, tu dois pouvoir te connecter avec google et changer la langue normalement ! bisous
            </AppShell>
        </React.Fragment>
    );
}

export default MainApp;
