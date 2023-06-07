import {Create, NumberInput, ReferenceArrayInput, required, SelectArrayInput, SimpleForm, TextInput} from "react-admin";

export default () => (
    <Create redirect="list">
        <SimpleForm>
            <TextInput
                name='title'
                source="title"
                validate={[required()]}
                label="Название"
                fullWidth
            />
            <TextInput
                name='hiddenName'
                source="hiddenName"
                label="Скрытое название"
                fullWidth
            />
            <NumberInput name='priority' defaultValue={0} source="priority" label="Порядок" />
            <ReferenceArrayInput name='json_field_ids' source="json_field_ids" reference="fields">
                <SelectArrayInput optionText="title" name="fields" fullWidth label="Поля" />
            </ReferenceArrayInput>
        </SimpleForm>
    </Create>
);