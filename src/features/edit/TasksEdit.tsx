import {
    Edit, SimpleForm, TextInput, SelectInput, ReferenceInput
} from "react-admin";

export default () => (
    <Edit>
        <SimpleForm>
            <TextInput disabled fullWidth label="Id" source="id" />
            <TextInput source="company_name" label="Название компании" fullWidth />
            <SelectInput
                fullWidth
                source="status"
                label="Статус"
                choices={[
                    { id: "0", name: "Редактируется" },
                    { id: "1", name: "Проверяется" },
                    { id: "2", name: "Проверен" },
                ]}
            />
            <ReferenceInput source="tariff_id" reference="tariffs">
                <TextInput source="title" label="Тариф" disabled fullWidth />
            </ReferenceInput>
            <ReferenceInput
                source="manager_id"
                reference="managers"
                label="Менеджер"
            >
                <TextInput source="name" label="Менеджер" disabled fullWidth />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);