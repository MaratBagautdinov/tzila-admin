import {TextInput} from "react-admin";
import {useWatch} from "react-hook-form";


export default () => {
    const fieldType = useWatch({ name: "type" })
    return fieldType === "StaticText" ?
        <TextInput source="value" label="Значение" multiline fullWidth required /> : null
}