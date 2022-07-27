import React, {useEffect, useState} from 'react';
import {
    Box,
    Button,
    Group,
} from "@mantine/core";
import {getFirestore, doc, getDoc, setDoc} from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";
import FormUpdateEmail from "./FormUpdateEmail";
import FormUpdatePassword from "./FormUpdatePassword";
import FormUpdateBirthday from "./FormUpdateBirthday";
import FormUpdateHobbies from "./FormUpdateHobbies";
import FormUpdateUserType from "./FormUpdateUserType";
import firebase from "firebase/compat";
import Timestamp = firebase.firestore.Timestamp;

interface FormUpdateUserParams {
    close() : void
}

/**
 * @param {FormUpdateUserParams} props - Object with parameters
 * @param {string[]} props.close - Function to trigger on close
 * @returns {React.Fragment} Form to update the all the user information
 */
function FormUpdateUser(props:FormUpdateUserParams) {

    const db = getFirestore();
    const auth = getAuth();

    const user = auth.currentUser;

    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState<{email : string, birthday : Timestamp, hobbies : string[], type : string} | null>(null)

    const askSignOut = async () => {
        setLoading(true)
        signOut(auth).then(() => {
            props.close()
        }).catch((error) => {
            console.error("Error deconnexion : ", error)
            setLoading(false)
        });
    }

    useEffect(() => {
        // declare the data fetching function
        const fetchData = async () => {
            const db = getFirestore();
            if(user){
                const docRef = doc(db, "userData", user.uid);
                const reqUserData = await getDoc(docRef);
                // @ts-ignore
                setUserData(reqUserData.data())
            }
        }
        // call the function
        fetchData()
            // make sure to catch any error
            .catch(console.error);
    }, [])

    if(userData){
        return (
            <React.Fragment>

                <Box mx="auto" style={{textAlign:"left"}}>
                    <FormUpdateEmail email={userData.email}/>
                    <FormUpdatePassword />
                    <FormUpdateBirthday birthday={userData.birthday}/>
                    <FormUpdateHobbies hobbies={userData.hobbies}/>
                    <FormUpdateUserType type={userData.type}/>

                    <Group position="right" mt="md">
                        <Button loading={loading} onClick={askSignOut} color="red" >Déconnecter</Button>
                    </Group>
                </Box>
            </React.Fragment>
        );
    }

    return <></>

}

export default FormUpdateUser;