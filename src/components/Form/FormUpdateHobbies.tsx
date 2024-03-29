import React, {useEffect, useState} from 'react';
import {
    ActionIcon,
    Group,
    MultiSelect,
    Text

} from "@mantine/core";
import {getFirestore, doc, updateDoc, getDoc, setDoc} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import {useForm} from "@mantine/form";
import {Send} from "tabler-icons-react";

interface FormUpdateHobbiesParams {
    hobbies : string[]
}

/**
 * @param {FormUpdateHobbiesParams} props - Object with parameters
 * @param {string[]} props.hobbies - The actual user hobbies
 * @returns {React.Fragment} Form to update the user hobbies
 */
function FormUpdateHobbies(props:FormUpdateHobbiesParams) {

    const db = getFirestore();
    const auth = getAuth();

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<string[]>([]);

    let form = useForm({
        initialValues: {
            hobbies: props.hobbies
        },
        validate: {
        },
    });

    const askUpdate = async (values : {hobbies : string[]}) => {

        setLoading(true)

        if (auth.currentUser) {
            updateDoc(doc(db, "userData", auth.currentUser.uid), {
                ...values
            }).then(() => {
                setLoading(false)
            }).catch((error) => {
                console.error("Error update email change")
            });
        }

        setDoc(doc(db, 'data', 'hobbies'), {
            data
        }).then(() => {
            console.log("Champs updated")
        })
        .catch((error) => {
            console.error(error)
        });
    }

    useEffect(() => {
        // declare the data fetching function
        const fetchData = async () => {
            const db = getFirestore();const docRef = doc(db, "data", "hobbies");
            const reqHobbies = await getDoc(docRef);
            // @ts-ignore
            setData(reqHobbies.data().data)
        }

        // call the function
        fetchData()
            // make sure to catch any error
            .catch(console.error);
    }, [])

    return (
        <React.Fragment>
            <form onSubmit={form.onSubmit(askUpdate)}>
                <Group mt="xs" mb="xs">
                    <Text weight={500} size="sm" sx={{ flex: 1 }}>
                        Hobbies
                    </Text>
                </Group>
                <Group mb="xs">
                    <MultiSelect
                        sx={{ flex: 1 }}
                        data={data}
                        placeholder="Ecrit ce qui t'interesse !"
                        searchable
                        creatable
                        maxDropdownHeight={160}
                        limit={20}
                        getCreateLabel={(query) => `+ Create ${query}`}
                        onCreate={(query) => setData((current) => [...current, query])}
                        {...form.getInputProps('hobbies')}
                    />
                    <ActionIcon loading={loading} type="submit" color="green" variant="filled"><Send size={16} /></ActionIcon>
                </Group>
            </form>
        </React.Fragment>
    );
}

export default FormUpdateHobbies;