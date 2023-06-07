import {
    List,
    Datagrid,
    TextField,
    EditButton,
    NumberField,
    ReferenceArrayField,
    SingleFieldList, ChipField,
} from "react-admin";
export default () =>
    <List>
        <Datagrid>
            <TextField source="id" label="id"/>
            <NumberField source="priority" label="Порядок"/>
            <TextField source="title" label="Заголовок"/>
            <ReferenceArrayField
                label="Поля"
                reference="fields"
                source="json_field_ids"
            >
                <SingleFieldList>
                    <ChipField source="title"/>
                </SingleFieldList>
            </ReferenceArrayField>
            <EditButton/>
        </Datagrid>
    </List>