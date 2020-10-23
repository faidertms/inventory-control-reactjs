export type Subfunctionality = {
    id: number,
    name: string,
    url: string,
}

export type Functionality = {
    id: number,
    url: string,
    name: string,
    submenu: boolean,
    order: number,
    subfunctionalities: Array<Subfunctionality>
}

export type Filial = {
    id: number,
    trade_name: string,
    company_name: string,
    address: string,
    address_number: string,
    area: string,
    zip_code: string,
    city: string,
    state: string,
    phone: string,
}