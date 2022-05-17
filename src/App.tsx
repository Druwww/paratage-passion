import React, {useState} from 'react';
import './App.css';

import {initializeApp} from 'firebase/app';
import { MantineProvider, ColorSchemeProvider, ColorScheme} from '@mantine/core';
import MainApp from "./pages/MainApp";

const firebaseConfig = {
    apiKey: "AIzaSyCLbQ7M6BczUd0Uv8gaFkHfvzYO1X7rnvo",
    authDomain: "partage-passions.firebaseapp.com",
    projectId: "partage-passions",
    storageBucket: "partage-passions.appspot.com",
    messagingSenderId: "821577078663",
    appId: "1:821577078663:web:be53e23df38b6cc39ea522",
    measurementId: "G-23YBPSR142"
};

initializeApp(firebaseConfig);

function App() {
    const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
                <div className="App">

                    <header>
                        <MainApp />
                    </header>

                    <section>

                    </section>
                </div>
            </MantineProvider>
        </ColorSchemeProvider>
    );
}

export default App;
