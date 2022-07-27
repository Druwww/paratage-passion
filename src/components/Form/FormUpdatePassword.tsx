import React, {useState} from 'react';
import {
    ActionIcon,
    Group,
    PasswordInput,
} from "@mantine/core";
import {getFirestore} from "firebase/firestore";
import { getAuth, updatePassword } from "firebase/auth";
import {useForm} from "@mantine/form";
import {Send} from "tabler-icons-react";

/**
 * @returns {React.Fragment} Form to update the user password
 */
function FormUpdatePassword() {

    const db = getFirestore();
    const auth = getAuth();

    const user = auth.currentUser;

    const [loading, setLoading] = useState(false);

    let form = useForm({
        initialValues: {
            password: '',
            confPassword: '',
        },
        validate: {
            password: (value) => (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value) ? null : "Error password"),
            confPassword: (value, values) => (value === values.password ? null : "Not same password"),
        },
    });

    const askUpdate = async (values : {password : string, confPassword : string}) => {
        setLoading(true)

        if (auth.currentUser) {
            updatePassword(auth.currentUser, values.password).then(() => {
                setLoading(false)
                form.reset()
            }).catch((error) => {
                console.error("Error password change")
            });
        }
    }


    return (
        <React.Fragment>
            <form onSubmit={form.onSubmit(askUpdate)}>
                <Group position="center" mt="md">
                    <PasswordInput
                        required
                        mt="sm"
                        sx={{ flex: 1 }}
                        label="Mot de Passe"
                        placeholder="motdepasse123"
                        description="Minimum 1 caratère & 1 chiffre, longueur min 8"
                        {...form.getInputProps('password')}
                    />

                    <PasswordInput
                        required
                        mt="sm"
                        sx={{ flex: 1 }}
                        label="Confirmation Mot de Passe"
                        placeholder="motdepasse123"
                        description="Identique au mot de passe"
                        {...form.getInputProps('confPassword')}
                    />
                    <ActionIcon loading={loading} type="submit" color="green" variant="filled"><Send size={16} /></ActionIcon>
                </Group>
            </form>
        </React.Fragment>
    );
}

export default FormUpdatePassword;