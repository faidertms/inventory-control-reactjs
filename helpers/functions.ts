
import differenceInSeconds from 'date-fns/differenceInSeconds';
import dateFnsParse from 'date-fns/parse';
import dateFnsFormat from 'date-fns/format';
import { DateUtils } from 'react-day-picker';

export const create_UUID = (): string => {
    var dt: number = new Date().getTime();
    var uuid: string = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r: number = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c === 'x' ? r : ((r & 0x3) | 0x8)).toString(16);
    });
    return uuid;
};

export const cpfMask = (value: string): string => {
    return value
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1');
};

export const cnpjMask = (value: string): string => {
    return value
        .replace(/\D/g, '')
        .replace(/^(\d{2})(\d)/, "$1.$2")
        .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
        .replace(/\.(\d{3})(\d)/, ".$1/$2")
        .replace(/(\d{4})(\d)/, "$1-$2");
};

export const cpfCnpj = (value: string): string => (value.length <= 14 ? cpfMask(value) : cnpjMask(value));



export const convertToSlug = (text: string): string => {
    const a: string = 'àáäâãèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;'
    const b: string = 'aaaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------'
    const p: RegExp = new RegExp(a.split('').join('|'), 'g')
    return text.toString().toLowerCase().trim()
        .replace(p, c => b.charAt(a.indexOf(c))) // Replace special chars
        .replace(/&/g, '-and-') // Replace & with 'and'
        .replace(/[\s\W-]+/g, '-') // Replace spaces, non-word characters and dashes with a single dash (-)
};


function buildFormData(formData: FormData, data: any, parentKey: string = "") {
    if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File)) {
        Object.keys(data).forEach(key => {
            buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
        });
    } else {
        const value = (data == null) ? '' : data;
        formData.append(parentKey, value);
    }
};

export function jsonToFormData(data: object, metodo: string) {
    const formData = new FormData();
    formData.append('_method', metodo);
    buildFormData(formData, data);
    return formData;
};

export const parseDate = (str: string = "", format: string, locale?: string): Date | undefined => {
    const parsed = dateFnsParse(str, format, new Date());
    return DateUtils.isDate(parsed) ? parsed : undefined;
};

export const formatDate = (date: Date | undefined, format: string, locale?: string): string => {
    return date ? dateFnsFormat(date, format) : "";
};
