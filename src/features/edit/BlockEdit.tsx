import {Edit, NumberInput, ReferenceArrayInput, required, SelectArrayInput, SimpleForm, TextInput} from "react-admin";

export default () => (
    <Edit>
        <SimpleForm>
            <TextInput disabled label="Id" source="id" fullWidth />
            <NumberInput defaultValue={0} source="priority" label="Порядок" />
            <TextInput source="title" label="Заголовок" validate={required()} />
            <TextInput
                source="hiddenName"
                label="Скрытое название"
            />
            <ReferenceArrayInput source="json_field_ids" reference="fields">
                <SelectArrayInput optionText="title" fullWidth label="Поля" />
            </ReferenceArrayInput>
        </SimpleForm>
    </Edit>
);