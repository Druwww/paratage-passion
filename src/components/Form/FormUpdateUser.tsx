import React, {useEffect, useState} from 'react';
import {
    Box,
    Button,
    Group,
    Title

} from "@mantine/core";
import {getFirestore, doc, getDoc, setDoc} from "firebase/firestore";
//import {t} from "i18next";
import { getAuth, signOut } from "firebase/auth";

interface FormUpdateUserParams {
    close() : void
}

function FormUpdateUser(props:FormUpdateUserParams) {

    const db = getFirestore();
    //const { colorScheme } = useMantineColorScheme();
    //const dark = colorScheme === 'dark';
    const auth = getAuth();

    const user = auth.currentUser;

    const [loading, setLoading] = useState(false);

    const askSignOut = async () => {
        setLoading(true)
        signOut(auth).then(() => {
            props.close()
        }).catch((error) => {
            console.error("Error deconnexion : ", error)
            setLoading(false)
        });
    }

    return (
        <React.Fragment>

            <Box sx={{ maxWidth: 300 }} mx="auto" style={{textAlign:"left"}}>

                <Title>Profil de {user?.email}</Title>

                <Group position="right" mt="md">
                    <Button loading={loading} onClick={askSignOut} color="red" >Déconnecter</Button>
                </Group>
            </Box>
        </React.Fragment>
    );
}

export default FormUpdateUser;