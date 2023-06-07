import {List, Datagrid, TextField, EditButton, NumberField, SelectField, BooleanField} from "react-admin";
const fieldTypesChoices = [
    { id: "TextField", name: "Текстовое однострочное поле (TextField)" },
    { id: "Textarea", name: "Текстовое многострочное поле (Textarea)" },
    { id: "CheckboxGroup", name: "Группа флагов (CheckboxGroup)" },
    { id: "Checkbox", name: "Флаг (Checkbox)" },
    { id: "RadioGroup", name: "Переключатель (RadioGroup)" },
    { id: "MultiField", name: "Добавляемое поле (MultiField)" },
    { id: "StaticText", name: "Неизменяемый текст (StaticText)" },
];
const query = {
    meta: {
        paramsToUncombine: {
            params: ["json_content"],
        },
    },
}
export default () => (
    <List queryOptions={query}>
        <Datagrid>
            <TextField source="id" />
            <NumberField source="priority" label="Порядок" />
            <TextField source="title" label="Название" />
            <SelectField source="json_content.type" label="Тип" choices={fieldTypesChoices} />
            <BooleanField source="json_content.required" label="Обязательно" />
            <EditButton />
        </Datagrid>
    </List>
);