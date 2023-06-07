import { SelectArrayInput, Create, SimpleForm, TextInput, required, ReferenceArrayInput
} from "react-admin";

export default () => (
    <Create redirect="list">
        <SimpleForm>
            <TextInput
                source="title"
                label="Название"
                validate={[required()]}
                fullWidth
            />
            <ReferenceArrayInput source="json_block_ids" reference="blocks">
                <SelectArrayInput optionText="title" label="Блоки" fullWidth />
            </ReferenceArrayInput>
        </SimpleForm>
    </Create>

);