import React from 'react';
import styled from "styled-components";

interface Props {
    wrapperClassName?: string
    labelClassName?: string
    className?: string
    name: string,
    label: string,
    type: string,
    required?: boolean,
}


// line-height: 2;
// text-align: left;
// display: block;
// margin-bottom: 13px;
// margin-top: 20px;

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

export default function index({
    wrapperClassName,
    labelClassName,
    className,
    name,
    label,
    type,
    required,
}: Props): JSX.Element {
    return (
        <div className={wrapperClassName}>
            <Label htmlFor={name}>{label}</Label>
            <Input name={name} type={type} />
        </div>
    );
}
