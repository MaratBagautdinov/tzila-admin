export const isFieldContainsOptions = {
    "TextField": false,
    "Textarea": false,
    "CheckboxGroup": true,
    "Checkbox": false,
    "RadioGroup": true,
    "MultiField": false,
};
export type TFieldType = keyof typeof isFieldContainsOptions;
export type TData = TTariffs | TBlocks | TFields | TTasks
export type TTariffs = {
    id: string
    json_block_ids: string
    title: string
}
export type TBlocks = {
    id: string
    json_field_ids: string
    title: string
    priority: string
    hiddenName: string
}
export type TFields = {
    id?: string
    json_content: string
    title: string
    priority: string
}
export type TTasks = {
    id: string
    bitrix_task_id: string
    company_name: string
    key: string
    meneger_id: string
    status: "0" | "1" | "2"
    tariff_id: string
    tariff_name: string
    json_content: string
    title?: string
}

export type TUser = {
    id: string
    iat: number
    nbf: number
    role: 'admin' | 'any'
    login: string
}
