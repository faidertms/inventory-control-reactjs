import React, { useState } from 'react';
import Select, { ValueType, OptionsType, CommonProps, ActionTypes } from 'react-select';
import styled from "styled-components";

type SelectStyle = {
    backgroundColor: string,
    opacity: string,
    [key: string]: string;
};

type Option = {
    value: string;
    label: string;
};

const selectStyle = {
    control: (styles: SelectStyle, state: CommonProps) => {
        const focusStyle = state.isFocused ? {
            color: "#495057 !important",
            backgroundColor: "#fff !important",
            borderColor: "#80bdff !important",
            outline: 0,
            boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25) !important",

        } : {};
        return ({
            ...styles,
            borderRadius: "0.7rem",
            padding: ".375rem .75rem",
            minHeight: "0px",
            outline: 0,
            boxShadow: "none",
            height: (state.getValue().length > 1) ? undefined : "calc(1.5em + .75rem)",
            flexWrap: "unset !important",
            "&:hover": { boxShadow: "none", outline: 0 },
            "&:focus": { boxShadow: "0", outline: 0, border: 'none' },
            backgroundColor: state.isDisabled ? "#e9ecef" : styles.backgroundColor,
            opacity: state.isDisabled ? 1 : styles.opacity,
            ...focusStyle,
        })
    },
    valueContainer: (styles: SelectStyle) => ({
        ...styles,
        padding: "0px",
        width: "100%",
        outline: 0,
        color: "black",
        "&:hover": { boxShadow: "none", outline: 0 },
        "&:focus": { boxShadow: "0", outline: 0 }
    }),
    input: (styles: SelectStyle) => ({
        ...styles,
        height: "26px;"
    }),
    menuPortal: (styles: SelectStyle) => ({
        ...styles,
        zIndex: 999999
    }),
};

const Label = styled.label`
    display: inline-block;
    margin-bottom: .5rem;
`;
const Wrapper = styled.div`
    margin-bottom: .5rem;
`;

type SelectProps = {
    label?: string,
    value: ValueType<Option>,
    defaultValue?: ValueType<Option>,
    options?: OptionsType<Option>,
    name: string,
    onChange: ({ }: { name: string, value: any }) => void,
    placeholder?: string,
    maxOptionsSelected?: number,
    isMulti?: boolean
    isDisabled?: boolean,
    menuPortalTarget?: HTMLElement
};

const SelectForm = ({
    label,
    placeholder,
    onChange,
    value,
    defaultValue,
    options,
    maxOptionsSelected,
    isMulti,
    isDisabled,
    menuPortalTarget,

}: SelectProps) => {
    const [maxSelected, setMaxSelected] = useState<boolean>(false);

    const onChangeSelect = (value: ValueType<Option>, { action }: ActionTypes): void => {
        if (isMulti) {

            if (action === "select-option" && maxSelected) {
                return;
            }

            if (action === "select-option" && value?.length === maxOptionsSelected) {
                setMaxSelected(true);
            }
        }

        onChange({ name, value });
    }

    const noOptionsMessage = (): string => (maxSelected ? 'Máximo atingido' : 'Sem opções');

    return (
        <Wrapper>
            <Label htmlFor={name}>
                {label}
            </Label>
            <Select
                defaultValue={defaultValue}
                value={value}
                noOptionsMessage={noOptionsMessage}
                isMulti={isMulti}
                placeholder={placeholder}
                options={maxSelected ? undefined : options}
                styles={selectStyle}
                onChange={onChangeSelect}
                isDisabled={isDisabled}
                menuPortalTarget={menuPortalTarget}
            />
        </Wrapper>
    );
}

export default SelectForm;


