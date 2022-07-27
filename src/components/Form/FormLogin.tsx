import React, {useState} from 'react';
import {
    Box,
    Button,
    Group,
    PasswordInput,
    TextInput,
    Text

} from "@mantine/core";
import {useForm} from "@mantine/form";
import {getFirestore, doc, getDoc, setDoc} from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

interface FormLoginParams {
    validate() : void
}

/**
 * @param {FormLoginParams} props - Object with parameters
 * @param {Function} props.validate - The function to call when the login is completed.
 * @returns {React.Fragment} Form to login as a classic user
 */
function FormLogin(props:FormLoginParams) {

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState(null );


    let form = useForm({
        initialValues: {
            email: '',
            password: '',
        },
        validate: {},
    });

    const sendLogin = async (values: { email: string, password: string}) => {

        setLoading(true)
        const auth = getAuth();
        signInWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
                // Signed in
                setLoading(false)
                props.validate();
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false)
            });
    }

    return (
        <React.Fragment>

            <Box sx={{ maxWidth: 300 }} mx="auto" style={{textAlign:"left"}}>
                <form onSubmit={form.onSubmit(sendLogin)}>
                    {error ? <Text  color="red">{error}</Text> : <></>}
                    <TextInput
                        required
                        label="Email"
                        placeholder="email.address@gmail.com"
                        {...form.getInputProps('email')}
                    />

                    <PasswordInput
                        required
                        mt="sm"
                        label="Mot de Passe"
                        placeholder="motdepasse123"
                        description="Minimum 1 caratère et 1 chiffre, longueur minimal de 8"
                        {...form.getInputProps('password')}
                    />


                    <Group position="right" mt="md">
                        <Button type="submit" loading={loading}>Valider</Button>
                    </Group>
                </form>
            </Box>
        </React.Fragment>
    );
}

export default FormLogin;