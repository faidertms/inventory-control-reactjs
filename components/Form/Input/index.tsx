import React from 'react';
import styled from "styled-components";

interface Props {
    name: string,
    label: string,
    type: string,
    onChange: (event) => void,
    required?: boolean,
}

const Input = styled.input`
    display: block;
    width: 100%;
    height: calc(1.5em + .75rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`
const Label = styled.label`
    display: inline-block;
    margin-bottom: .5rem;
`
const Wrapper =  styled.div`
    margin-bottom: .5rem;
`
export default function index({
    name,
    label,
    type,
    onChange,
    required,
}: Props): JSX.Element {
    return (
        <Wrapper>
            <Label htmlFor={name} >{label}</Label>
            <Input name={name} type={type} onChange={onChange} />
        </Wrapper>
    );
}
