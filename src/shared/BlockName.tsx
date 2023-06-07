import {ChipField, useRecordContext} from "react-admin";

export default () => {
    const record = useRecordContext();
    record.title = record.hiddenName?.length > 0
            ? record.hiddenName
            : record.title
    return <ChipField record={record} source="title"/>
}