let date = new Date("2020-11-26");
date = date.getDate() + '.' + (date.getMonth()+1) + '.' + date.getFullYear();
console.log(date);


const data = [
    {
        country: 'Russia',
        city: 'Saint Petersburg',
        hotel: 'Hotel Leopold',
    },
    {
        country: 'Spain',
        city: 'Santa Cruz de Tenerife',
        hotel: 'Apartment Sunshine',
    },
    {
        country: 'Slowakia',
        city: 'Vysokie Tatry',
        hotel: 'Villa Kunerad',
    },
    {
        country: 'Germany',
        city: 'Berlin',
        hotel: 'Hostel Friendship',
    },
    {
        country: 'Indonesia',
        city: 'Bali',
        hotel: 'Ubud Bali Resort&SPA',
    },
    {
        country: 'Netherlands',
        city: 'Rotterdam',
        hotel: 'King Kong Hostel',
    },
    {
        country: 'Marocco',
        city: 'Ourika',
        hotel: 'Rokoko Hotel',
    },
    {
        country: 'Germany',
        city: 'Berlin',
        hotel: 'Hotel Rehberge Berlin Mitte',
    },
];

const strToSearch = str => str.toLowerCase().replace(' ', '');

const search = string => {
    const searchStr = strToSearch(string);
    return data.filter(object => {
        const place = `${object.country}${object.city}${object.hotel}`;
        return strToSearch(place).includes(searchStr);
    }).map(object => `Страна: ${object.country} Город: ${object.city} Отель: ${object.hotel}`);
};

console.log(search('Sa'));

