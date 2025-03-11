import {$host} from './$host.js'

export const create = async (inpt) => {
    const { data } = await $host.post("api/", inpt);
    return data;
};