import React from 'react';
import styled from "styled-components";

const TextArea = styled.textarea`
    display: block;
    width: 100%;
    height: calc(5.0rem + .75rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    outline: none;
    &:focus {
        border-color: #60A5FA;
    }
`;
const Label = styled.label`
    display: inline-block;
    margin-bottom: .5rem;
`;
const Wrapper = styled.div`
    margin-bottom: .5rem;
`;

interface Props {
    name: string,
    label: string,
    placeholder?: string,
    value?: string | number,
    defaultValue?: string | number,
    maxLength?: number,
    onChange: ({ }: { name: string, value: any, event: React.ChangeEvent<HTMLTextAreaElement> }) => void,
    required?: boolean,
    readOnly?: boolean
};

export default function TextAreaForm({
    name,
    label,
    onChange,
    placeholder,
    value,
    defaultValue,
    maxLength,
    readOnly,
}: Props): JSX.Element {

    const onChangeInput = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
        const { name, value } = event.target;
        onChange({ value, name, event });
    }
    return (
        <Wrapper>
            <Label htmlFor={name} >{label}</Label>
            <TextArea
                name={name}
                onChange={onChangeInput}
                placeholder={placeholder}
                value={value}
                defaultValue={defaultValue}
                maxLength={maxLength}
                readOnly={readOnly}
            />
        </Wrapper>
    );
}
