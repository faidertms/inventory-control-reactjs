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
    const [state, setstate] = useState<FilialState>({})
    const handleChange = (event) =>{

    }
    return (
        <Fragment>
            <Header />
            <main className="p-6" >
                <div>
                    <Input name="external_code" label="Código:" type="text" onChange={handleChange} />
                    <Input name="identification_number" label="CNPJ:" type="text" onChange={handleChange} />
                    <Input name="company_name" label="Razão Sócial:" type="text" onChange={handleChange} />
                    <Input name="trade_name" label="Nome Fantasia:" type="text" onChange={handleChange} />
                    <Input name="address" label="Endereço:" type="text" onChange={handleChange} />
                    <Input name="address_number" label="Número:" type="text" onChange={handleChange} />
                    <Input name="area" label="Bairro:" type="text" onChange={handleChange} />
                    <Input name="zip_code" label="CEP:" type="text" onChange={handleChange} />
                    <Input name="complement" label="Complemento:" type="text" onChange={handleChange} />
                    <Input name="city" label="Cidade:" type="text" onChange={handleChange} />
                    <Input name="state" label="Estado:" type="text" onChange={handleChange} />
                    <Input name="country" label="País:" type="text" onChange={handleChange} />
                    <Input name="phone" label="Telefone:" type="text" onChange={handleChange} />
                </div>
            </main>

            <footer>

            </footer>
        </Fragment>
    )
}
