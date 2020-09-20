import Axios from 'axios';
import React, { Fragment, useState } from 'react';
import styled from "styled-components";
import Input from "../../../../../components/Form/Input";
import Header from '../../../../../components/Header';
type Props = {

}

type FilialState = {
    external_code: string,
    identification_number: string,
    company_name: string,
    trade_name: string,
    address: string,
    address_number: number,
    area: string,
    zip_code: string,
    complement: string,
    city: string,
    state: string,
    country: string,
    phone: string
}

export default function edit({ }: Props): JSX.Element {
    const [form, setForm] = useState<FilialState>();

    const findInformationsFromZipCode = async (zip_code: string): Promise<void> => {
        try {
            const response = await Axios.get(`viacep.com.br/ws/${zip_code}/json/`);
            const {
                logradouro,
                bairro,
                localidade,
                uf,
            } = response.data;
            setForm({...form, state: uf})
        } catch (error) {

        }

    }

    const handleChange = (event) => {

    }

    return (
        <Fragment>
            <Header />
            <main className="p-6" >
                <div>
                    <Input name="external_code" value={form.external_code} label="Código:" type="text" onChange={handleChange} />
                    <Input name="identification_number" value={form.identification_number} label="CNPJ:" type="text" onChange={handleChange} />
                    <Input name="company_name" value={form.company_name} label="Razão Sócial:" type="text" onChange={handleChange} />
                    <Input name="trade_name" value={form.trade_name} label="Nome Fantasia:" type="text" onChange={handleChange} />
                    <Input name="address" value={form.address} label="Endereço:" type="text" onChange={handleChange} />
                    <Input name="address_number" value={form.address_number} label="Número:" type="text" onChange={handleChange} />
                    <Input name="area" label="Bairro:" type="text" onChange={handleChange} />
                    <Input name="zip_code" label="CEP:" type="text" onChange={handleChange} />
                    <Input name="complement" label="Complemento:" type="text" onChange={handleChange} />
                    <Input name="city" label="Cidade:" type="text" onChange={handleChange} />
                    <Input name="state" label="Estado:" type="text" onChange={handleChange} />
                    {/* <Input name="country" label="País:" type="text" onChange={handleChange} /> */}
                    <Input name="phone" label="Telefone:" type="text" onChange={handleChange} />
                </div>
            </main>

            <footer>

            </footer>
        </Fragment>
    )
}
