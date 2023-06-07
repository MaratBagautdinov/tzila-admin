import {DataProvider, fetchUtils} from "react-admin";
import {parseData, parseOne, stringifyOne, token} from "./func.ts";

const fetchJson = (
    options: fetchUtils.Options = {},
    url: string = import.meta.env.VITE_API,) => {
    const customHeaders = (
        options.headers
        || new Headers({Accept: 'application/json'})
    ) as Headers;
    customHeaders.set("Authorization", `JWT ${token()}`);
    options.headers = customHeaders;
    return fetchUtils.fetchJson(url, options);
}

export default <DataProvider>({
    getList: (resource, {pagination, sort}) => {
        return fetchJson({
            method: "POST",
            body: JSON.stringify({
                method: `get_list_${resource}`,
                sort: sort.field,
                order: sort.order,
                start: (pagination.page - 1) * pagination.perPage,
                end: pagination.page * pagination.perPage,
            }),
        }).then(({json, headers}) => {
                const data = parseData(json)
                return {
                    data,
                    total: headers.get("x-total-count"),
                }
            }
        )
    },
    getOne: (resource, params) =>
        fetchJson({
            method: "POST",
            body: JSON.stringify({
                method: `get_one_${resource}`,
                id: params.id,
            }),
        }).then(({json}) => ({data: parseOne(json)})),
    getMany: (resource, params) =>
        fetchJson({
            method: "POST",
            body: JSON.stringify({
                method: `get_many_${resource}`,
                id: params.ids,
            }),
        }).then(({json}) => ({data: parseData(json)})),
    getManyReference: (resource, {pagination, sort, filter, target, id}) => {

        const url =
            `${import.meta.env.VITE_API}
            /${resource}
            ?${JSON.stringify({
                ...fetchUtils.flattenObject(filter),
                [target]: id,
                _sort: sort.field,
                _order: sort.order,
                _start: (pagination.page - 1) * pagination.perPage,
                _end: pagination.page * pagination.perPage,
            })}`;
        return fetchJson({}, url).then(({headers, json}) => ({
            data: parseData(json),
            total: headers.get("x-total-count")
        }));
    },
    update: (resource, {data}) =>
        fetchJson({
            method: "POST",
            body: JSON.stringify({
                method: `update_one_${resource}`,
                data: parseOne(data, true),
                id: data.id
            }),
        }).then(({json}) => ({data: parseOne(json)})),
    updateMany: (resource, params) =>
        Promise.all(
            params.ids.map((id) =>
                fetchJson({
                        method: "PUT",
                        body: JSON.stringify(params.data),
                    },
                    `${import.meta.env.VITE_API}
                        /${resource}
                        /${id}`,)
            )
        ).then((res) => ({data: parseData(res.map(({json}) => json.id))})),
    create: (resource, params) =>
        fetchJson({
            method: "POST",
            body: JSON.stringify({
                method: `create_one_${resource}`,
                data: stringifyOne(params.data),
            }),
        }).then(({json}) => ({data: parseOne({...params.data, id: json.id}),})),
    delete: (resource, params) =>
        fetchJson({
            method: "POST",
            body: JSON.stringify({
                method: `delete_one_${resource}`,
                id: params.id,
            }),
        }).then(({json}) => ({data: parseOne(json)})),
    deleteMany: (resource, params) => Promise.all(
        params.ids.map((id) =>
            fetchJson({
                method: "POST",
                body: JSON.stringify({
                    method: `delete_one_${resource}`,
                    id: id,
                }),
            })
        )
    ).then((res) => ({data: res.map(({json}) => json.id)}))
})

