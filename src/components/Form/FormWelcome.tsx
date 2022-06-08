import React from 'react';
import {Box, Button, Checkbox, Group, MantineColor, Paper, TextInput, useMantineColorScheme} from "@mantine/core";
import {useForm} from "@mantine/form";

interface FormWelcomeParams {
    form : {
        Title : string,
        Email : string,
        ErrorEmail : string,
        Checkbox : string,
        Validation : string,
    }
    isPassionate : boolean,
    color? : MantineColor
}



function FormWelcome(props:FormWelcomeParams) {

    const form = useForm({
        initialValues: {
            email: '',
            newsLetter: false,
        },
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : props.form.ErrorEmail),
        },
    });

    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    return (
        <React.Fragment>
            <Paper
                p="md"
                withBorder={true}
                sx={(theme) => ({
                    borderColor:props.color,
                    backgroundColor: dark ? theme.colors.dark[8] : theme.colors.gray[0]
                })}
            >
                <Box sx={{ maxWidth: 300 }} mx="auto" style={{textAlign:"left"}}>
                    <form onSubmit={form.onSubmit((values) => console.log(values, (props.isPassionate ? "Passionate" : "Adventurer")))}>
                        <TextInput
                            required
                            label={props.form.Title}
                            placeholder={props.form.Email}
                            {...form.getInputProps('email')}
                        />

                        <Checkbox
                            mt="md"
                            label={props.form.Checkbox}
                            {...form.getInputProps('newsLetter', { type: 'checkbox' })}
                        />

                        <Group position="right" mt="md">
                            <Button type="submit">{props.form.Validation}</Button>
                        </Group>
                    </form>
                </Box>
            </Paper>
        </React.Fragment>
    );
}

export default FormWelcome;