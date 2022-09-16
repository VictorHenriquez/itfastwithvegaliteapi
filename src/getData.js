import { csv } from "d3";

const csvUrl = 'https://gist.githubusercontent.com/VictorHenriquez/2f3136207c1d935e6613924d89e11c11/raw/839afcdf4f91d46fde0829b1d847f21ffc9b13f6/csv';

export const getData = async () => {
    const data = await csv(csvUrl);

    // Have a look at the attributes available in the dt
    console.log(data[0]);

    return data;
}