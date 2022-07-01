import React from 'react';
import {
    Box,
    Button,
    Group,
    PasswordInput,
    TextInput,
    useMantineColorScheme
} from "@mantine/core";
import {useForm} from "@mantine/form";
import {getFirestore, doc, setDoc} from "firebase/firestore";
import notificationSuccess from "../Notification/NotificationSuccess";
import notificationFail from "../Notification/NotificationFail";
import {t} from "i18next";
import {DatePicker} from "@mantine/dates";

interface FormSigninAvParams {

}



function FormSigninAv(props:FormSigninAvParams) {

    const form = useForm({
        initialValues: {
            email: '',
            password : '',
            confPassword : '',
            birthday : new Date(),
            hobbies : []
        },
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : "Error email"),
            password: (value) => ( /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value) ? null : "Error password"),
            confPassword: (value, values) => (value === values.password ? null : "Not same password"),
            birthday: (value : Date) => ( new Date().getFullYear() - value.getFullYear() >= 18 ? null : "Il faut avoir 18 ans au minimum")

        },
    });


/*
    const sendForm = async (values: { email: string, newsLetter: boolean }) => {
        const db = getFirestore();

        try {
            await setDoc(doc(db, "poc", values.email.split('@')[0]), {
                values
            }).then((result) => {
                    form.reset();
                    notificationSuccess(
                        t("Welcome.Form.Interest.Notification.Success.title"),
                        t("Welcome.Form.Interest.Notification.Success.message")
                    )
                }
            )
        } catch (e) {
            notificationFail(
                t("Welcome.Form.Interest.Notification.Fail.title"),
                t("Welcome.Form.Interest.Notification.Fail.message")
            )
        }

    }
*/
    const { colorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    return (
        <React.Fragment>
            <Box sx={{ maxWidth: 300 }} mx="auto" style={{textAlign:"left"}}>
                <form onSubmit={form.onSubmit((values) => console.log(values))}>
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

                    <PasswordInput
                        required
                        mt="sm"
                        label="Confirmation Mot de Passe"
                        placeholder="motdepasse123"
                        description="Identique au mot de passe"
                        {...form.getInputProps('confPassword')}
                    />

                    <DatePicker
                        label="Event date"
                        required
                        {...form.getInputProps('birthday')}
                    />

                    <Group position="right" mt="md">
                        <Button type="submit">Valider</Button>
                    </Group>
                </form>
            </Box>
        </React.Fragment>
    );
}

export default FormSigninAv;