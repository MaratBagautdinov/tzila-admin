import {Create, ReferenceInput, SelectInput, SimpleForm, TextField, TextInput} from "react-admin";

export default () => (
    <Create>
        <SimpleForm>
            <TextField source="company_name" />
            <SelectInput
                source="status"
                choices={[
                    { id: "0", name: "Редактируется" },
                    { id: "1", name: "Проверяется" },
                    { id: "2", name: "Проверен" },
                ]}
            />
            <ReferenceInput source="tariff_id" reference="tariffs">
                <TextInput source="title" />
            </ReferenceInput>
            <ReferenceInput source="manager_id" reference="managers">
                <TextInput source="name" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);