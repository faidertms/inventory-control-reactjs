import Axios from 'axios';
import React, { Fragment, useState } from 'react';
import Input from "../../../../../components/Form/Input";
import TextArea from "../../../../../components/Form/TextArea";
import Header from '../../../../../components/Header';
import { Product } from '../../../../../helpers/types';

type Props = {

}

type HandleChange = {
    name: string,
    value: any,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
}


export default function edit({ }: Props): JSX.Element {
    const [form, setForm] = useState<Product>();


    const handleChange = ({ name, value }: HandleChange) => {
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    }

    return (
        <Fragment>
            <Header />
            <main className="p-6" >

                <div className="rounded-md shadow-xs bg-white p-6">
                    <form>
                        <div className="rounded-md shadow bg-white py-2 px-6 font-semibold mb-8 text-xl">
                            Editar Produto
                        </div>
                        <Input name="code" defaultValue={form?.code} label="Código:" type="text" onChange={handleChange} />
                        <Input name="name" defaultValue={form?.name} label="Nome:" type="text" onChange={handleChange} />
                        <TextArea name="description" defaultValue={form?.description} label="Descrição:" onChange={handleChange} />
                    </form>

                </div>
            </main>

            <footer>

            </footer>
        </Fragment>
    )
}
