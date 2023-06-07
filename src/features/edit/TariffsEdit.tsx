import {Edit, ReferenceArrayInput, required, SelectArrayInput, SimpleForm, TextInput} from "react-admin";

export default () => (
    <Edit>
        <SimpleForm>
            <TextInput disabled label="Id" source="id" fullWidth />
            <TextInput
                source="title"
                label="Заголовок"
                validate={[required()]}
                fullWidth
            />
            <ReferenceArrayInput source="json_block_ids" reference="blocks">
                <SelectArrayInput optionText="title" label="Блоки" fullWidth />
            </ReferenceArrayInput>
        </SimpleForm>
    </Edit>
);