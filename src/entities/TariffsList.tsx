import {
    List,
    Datagrid,
    TextField,
    ReferenceArrayField,
    EditButton,
    SingleFieldList,
} from "react-admin";
import BlockTitle from "../shared/BlockName.tsx";

export default () =>
    <List>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="title" label="Название"/>
            <ReferenceArrayField
                reference="blocks"
                source="json_block_ids"
                label="Блоки"
            >
                <SingleFieldList>
                    <BlockTitle/>
                </SingleFieldList>
            </ReferenceArrayField>
            <EditButton/>
        </Datagrid>
    </List>