import React, { Fragment, useState } from 'react';
import styled from "styled-components";
import Input from "../../../../../components/Form/Input";
import Header from '../../../../../components/Header';
interface Props {

}



export default function edit({ }: Props): JSX.Element {
    const [state, setstate] = useState({})
    return (
        <Fragment>
            <Header />
            <main className="p-6" >
                <div>
                    <Input name="external_code" label="Código:" type="text"/>
                </div>
            </main>

            <footer>

            </footer>
        </Fragment>
    )
}
