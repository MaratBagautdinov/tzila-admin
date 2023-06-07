import {ArrayInput, SimpleFormIterator, TextInput} from "react-admin";
import {useWatch} from "react-hook-form";
import {isFieldContainsOptions, TFieldType} from "../types.ts";

export default ()=> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const fieldTypeEdit = useWatch<TFieldType>({name: "json_content.type"});
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const fieldTypeCreate = useWatch<TFieldType>({name: "type"});
    return isFieldContainsOptions[fieldTypeEdit] || isFieldContainsOptions[fieldTypeCreate] ?
        <ArrayInput name={`${Date.now()} options`} source={fieldTypeCreate ? "options" : "json_content.options"} label="Варианты">
            <SimpleFormIterator>
                <TextInput source="value" label="Значение" fullWidth/>
                <TextInput source="label" label="Название" fullWidth/>
            </SimpleFormIterator>
        </ArrayInput> : null
}