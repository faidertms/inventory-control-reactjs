import Axios from 'axios';
import React, { Fragment, useState } from 'react';
import Input from "../../../../../components/Form/Input";
import Header from '../../../../../components/Header';
import { cnpjMask } from '../../../../../helpers/functions';

type Props = {

}

type HandleChange = {
    name: string,
    value: any,
    event: React.ChangeEvent<HTMLInputElement>
}

type FilialState = {
    external_code: string,
    identification_number: string,
    company_name: string,
    trade_name: string,
    address: string,
    address_number: string,
    area: string,
    zip_code: string,
    complement: string,
    city: string,
    state: string,
    country: string,
    phone: string
}

export default function edit({ }: Props): JSX.Element {
    const [form, setForm] = useState<FilialState>({
        external_code: "",
        identification_number: "",
        company_name: "",
        trade_name: "",
        address: "",
        address_number: "",
        area: "",
        zip_code: "",
        complement: "",
        city: "",
        state: "",
        country: "",
        phone: ""
    });

    //TODO - Migrar para service
    const findInformationsFromZipCode = async (zip_code: string): Promise<void> => {
        try {
            const response = await Axios.get(`https://viacep.com.br/ws/${zip_code}/json/`);
            const {
                logradouro,
                bairro,
                localidade,
                uf,
            } = response.data;
            setForm((prevForm) => ({ ...prevForm, state: uf, city: localidade, area: bairro, address: logradouro }));
        } catch (error) {

        }

    }

    const handleChange = ({ name, value }: HandleChange) => {
        switch (name) {
            case "identification_number":
                value = cnpjMask(value);
                break;
            case "zip_code":
                if (value.length === 8) findInformationsFromZipCode(value);
                break;
            default:
                break;
        }
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    }

    return (
        <Fragment>
            <Header />
            <main className="p-6" >

                <div className="rounded-md shadow-xs bg-white p-6">
                    <form>
                        <div className="rounded-md shadow bg-white py-2 px-6 font-semibold mb-8 text-xl">
                            Editar Filial
                        </div>
                        <Input name="external_code" value={form.external_code} label="Código:" type="text" onChange={handleChange} />
                        <Input name="identification_number" value={form.identification_number} maxLength={18} label="CNPJ:" type="text" onChange={handleChange} />
                        <Input name="company_name" value={form.company_name} label="Razão Sócial:" type="text" onChange={handleChange} />
                        <Input name="trade_name" value={form.trade_name} maxLength={8} label="Nome Fantasia:" type="text" onChange={handleChange} />
                        <Input name="zip_code" value={form.zip_code} label="CEP:" type="text" onChange={handleChange} />
                        <Input name="address" value={form.address} label="Endereço:" type="text" onChange={handleChange} />
                        <Input name="address_number" value={form.address_number} label="Número:" type="text" onChange={handleChange} />
                        <Input name="area" value={form.area} label="Bairro:" type="text" onChange={handleChange} />
                        <Input name="complement" value={form.complement} label="Complemento:" type="text" onChange={handleChange} />
                        <Input name="city" readOnly value={form.city} label="Cidade:" type="text" onChange={handleChange} />
                        <Input name="state" readOnly value={form.state} label="Estado:" type="text" onChange={handleChange} />
                        <Input name="phone" value={form.phone} label="Telefone:" type="text" onChange={handleChange} />
                    </form>

                </div>
            </main>

            <footer>

            </footer>
        </Fragment>
    )
}
