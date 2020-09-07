
import differenceInSeconds from 'date-fns/differenceInSeconds';
import dateFnsParse from 'date-fns/parse';
import dateFnsFormat from 'date-fns/format';
import { DateUtils } from 'react-day-picker';


export const create_UUID = () => {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}

export const formatarValor = (valor, formatter, qtdDecimal = 2) => {
    switch (formatter) {
        case "dinheiro":
            valor = valor ? valor : 0
            const nuberFormat = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: qtdDecimal });
            return nuberFormat.format(valor);
        case "porcentagem":
            valor = valor ? valor : 0
            return `${(valor * 1).toFixed(2)}%`
        case "porcentagemDecimal":
            valor = valor ? valor : 0
            return `${(valor * 100).toFixed(2)}%`
        default:
            return valor;
    }
}

export const calcularDiferencaDeTempo = (final, inicio, formato) => {
    if (typeof final === 'string' || final instanceof String) {
        final = dateFnsParse(final, formato, new Date());
    }
    if (typeof inicio === 'string' || inicio instanceof String) {
        inicio = dateFnsParse(inicio, formato, new Date());
    }
    let totalSeconds = differenceInSeconds(final, inicio);
    let diff = Math.floor((totalSeconds / (60 * 60)) % 24) + "H ";
    diff += Math.floor((totalSeconds / 60) % 60) + "M ";
    diff += Math.floor((totalSeconds) % 60) + "S ";

    return diff;
}

export const cores = [
    '#017E29', // verde escuro
    '#0049B8', // azul escuro
    '#009EFF', // azul claro
    '#FF000A', // vermelho escuro
    '#FF9400', // laranja Escuro
    '#B35D01', // MARROM

    '#01D140', // verde claro
    '#FF38B0', // rosa
    '#FFC700', //Amarelo claro,
    '#252526',
    '#95a5a6', // cinza claro

    '#B38B4F',
    '#8D02FF', // roxo
    '#626266',
    '#B38B4F',
    '#FFCC75', //laranja claro
    '#00DFFF', // azul Medio
    '#FF5648', // vermelho claro
];


export const selectStyle = {
    control: (styles, state) => {
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
    valueContainer: styles => ({
        ...styles,
        padding: "0px",
        width: "100%",
        outline: 0,
        color: "black",
        "&:hover": { boxShadow: "none", outline: 0 },
        "&:focus": { boxShadow: "0", outline: 0 }
    }),
    input: styles => ({
        ...styles,
        height: "26px;"
    }),
    menuPortal: styles => ({
        ...styles,
        zIndex: "999999"
    }),
};

export const convertToSlug = (text) => {
    const a = 'àáäâãèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;'
    const b = 'aaaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------'
    const p = new RegExp(a.split('').join('|'), 'g')
    return text.toString().toLowerCase().trim()
        .replace(p, c => b.charAt(a.indexOf(c)))
        .replace(/&/g, '-and-')
        .replace(/[\s\W-]+/g, '-')
}

function buildFormData(formData, data, parentKey) {
    if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File)) {
        Object.keys(data).forEach(key => {
            buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
        });
    } else {
        const value = (data == null) ? '' : data;
        formData.append(parentKey, value);
    }
}

export function transformarArrayEmObjeto(dados = [], key = 'id') {
    const objeto = {};
    dados.forEach(elemento => {
        objeto[elemento[key]] = elemento;
    });
    return objeto;
}

export function montarDiaDaSemanaSelect(inicio, fim) {
    const semana = [];
    for (let indice = inicio; indice <= fim; indice++) {
        const diaDaSemana = pt_br.weekdaysLong[indice];
        semana.push({ value: indice, label: diaDaSemana });
    }
    return semana;
}

export function jsonToFormData(data, metodo) {
    const formData = new FormData();
    formData.append('_method', metodo);
    buildFormData(formData, data);
    return formData;
}

export const parseDate = (str, format = formatoData, locale) => {
    const parsed = dateFnsParse(str, format, new Date());
    return DateUtils.isDate(parsed) ? parsed : undefined;
}

export const formatDate = (date, format = formatoData, locale) => {
    return date ? dateFnsFormat(date, format, new Date()) : date;
}

export const formatoData = 'dd/MM/yyyy';
export const formatLaravelTimestamp = 'yyyy-MM-dd HH:mm:ss';
export const formatLaravelDate = 'yyyy-MM-dd';
export const pt_br = {
    months: [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ],
    labels: { nextMonth: 'Próximo mês', previousMonth: 'Mês anterior' },
    firstDayOfWeek: 1,
    weekdaysShort: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'],
    weekdaysLong: ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'],
};
