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

export interface Product {
    id: number;
    code: string;
    external_code: string;
    name: string;
    description: string;
}

export interface Color {
    id: number;
    external_code: string;
    name: string;
    abbreviation: string;
}

export interface Size {
    id: number;
    external_code: string;
    name: string;
    abbreviation: string;
}

export interface Grid {
    id: number;
    external_code: string;
    color_id: number;
    product_id: number;
    size_id: number;
    stock: number;
    color: Color;
    size: Size;
}