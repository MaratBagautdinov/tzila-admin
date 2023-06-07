import {
    BooleanInput,
    Create,
    NumberInput,
    required,
    SelectInput,
    SimpleForm,
    TextInput
} from "react-admin";
import ValueInput from "../../shared/ValueInput.tsx";
import OptionsInput from "../../shared/OptionsInput.tsx";


export const fieldTypesChoices = [
    { id: "TextField", name: "Текстовое однострочное поле (TextField)" },
    { id: "Textarea", name: "Текстовое многострочное поле (Textarea)" },
    { id: "CheckboxGroup", name: "Группа флагов (CheckboxGroup)" },
    { id: "Checkbox", name: "Флаг (Checkbox)" },
    { id: "RadioGroup", name: "Переключатель (RadioGroup)" },
    { id: "MultiField", name: "Добавляемое поле (MultiField)" },
    { id: "StaticText", name: "Неизменяемый текст (StaticText)" },
];

export default () => (
    <Create
        mutationOptions={{
            meta: {
                paramsNotToCombine: {
                    params: ["title"],
                    combineTo: "json_content",
                },
            },
        }}
        redirect="list"
    >
        <SimpleForm>
            <NumberInput defaultValue={0} source="priority" label="Порядок" />
            <TextInput
                source="title"
                validate={[required()]}
                label="Название"
                fullWidth
            />
            <TextInput
                source="name"
                validate={[required()]}
                label="Атрибут name"
                fullWidth
            />
            <SelectInput
                source="type"
                label="Тип"
                validate={[required()]}
                choices={fieldTypesChoices}
                fullWidth
            />
            <ValueInput/>
            <TextInput source="helperText" label="Подсказка" multiline fullWidth />
            <BooleanInput source="required" label="Обязательно" />
            <OptionsInput/>
        </SimpleForm>
    </Create>
);