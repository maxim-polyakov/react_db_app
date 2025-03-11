import {$host} from './$host.js'

export const fetch = async () => {
    const { data } = await $host.get("api/");

    return data[data.length - 1].message.toString()
};