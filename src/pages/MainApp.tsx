import React from 'react';

import {AppShell, Header, Footer, Title, Space} from '@mantine/core';
import HeaderBar from "../components/HeaderBar";
import {useTranslation} from "react-i18next";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Welcome from "./Welcome";
import Map from "./Map";


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

                <Routes>
                    <Route path="/" element={<Welcome />}/>
                    <Route path="map" element={<Map />}/>
                </Routes>

            </AppShell>
        </React.Fragment>
    );
}

export default MainApp;