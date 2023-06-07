import {List, Datagrid, TextField, EditButton, SelectField, ReferenceField, FunctionField} from "react-admin";
import Link from "@mui/material/Link";

export default () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="company_name" label="Название компании" />
            <SelectField
                source="status"
                label="Статус"
                choices={[
                    { id: "0", name: "Редактируется" },
                    { id: "1", name: "Проверяется" },
                    { id: "2", name: "Проверен" },
                ]}
            />
            <ReferenceField source="tariff_id" reference="tariffs" label="Тариф">
                <TextField source="title" />
            </ReferenceField>
            <ReferenceField
                source="manager_id"
                reference="managers"
                label="Менеджер"
            >
                <TextField source="name" />
            </ReferenceField>
            <FunctionField
                label="Перейти"
                render={
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                (record) => (
                    <Link
                        href={`/#/task/${record.key}`}
                        target="_blank"
                    >
                        Перейти
                    </Link>
                )}
            />
            <EditButton />
        </Datagrid>
    </List>
);