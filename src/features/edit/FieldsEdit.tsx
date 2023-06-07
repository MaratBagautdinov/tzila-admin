import {BooleanInput, Edit, NumberInput, required, SelectInput, SimpleForm, TextInput} from "react-admin";
import ValueInput from "../../shared/ValueInput.tsx";
import OptionsInput from "../../shared/OptionsInput.tsx";
import {fieldTypesChoices} from "../create/FieldsCreate.tsx";

export default () =>
    <Edit
        queryOptions={{
            meta: {
                paramsToUncombine: {
                    params: ["json_content"],
                },
            },
        }}
        mutationOptions={{
            meta: {
                paramsNotToCombine: {
                    params: ["title", "id", "priority"],
                    combineTo: "json_content",
                },
            },
        }}
    >
        <SimpleForm>
            <NumberInput defaultValue={0} source="priority" label="Порядок"/>
            <TextInput
                source="title"
                validate={[required()]}
                label="Название"
                fullWidth
            />
            <TextInput
                source="json_content.name"
                validate={[required()]}
                label="Атрибут name"
                fullWidth
            />
            <ValueInput/>
            <TextInput source="json_content.helperText" label="Подсказка" multiline fullWidth/>
            <SelectInput
                source="json_content.type"
                label="Тип"
                validate={[required()]}
                choices={fieldTypesChoices}
                fullWidth
            />
            <BooleanInput source="json_content.required" label="Обязательно"/>
            <OptionsInput/>
        </SimpleForm>
    </Edit>