export const CNPJ_REGEX = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;
export const CNPJ_MASK = '[00]{.}[000].[000]/[0000]-[00]';
export const CNPJ_REGEX_MESSAGE = 'CNPJ inválido';
export const CNPJ_REQUIRED_MESSAGE = 'Digite o CNPJ do estacionamento';

export const CONTACT_REGEX = /^\(\d{2}\)\s?\d{4,5}-\d{4}$/;
export const CONTACT_MASK = '{(}[00]{)} [90000]-[0000]';
export const CONTACT_REGEX_MESSAGE = 'Telefone inválido';
export const CONTACT_REQUIRED_MESSAGE = 'Digite o telefone do estacionamento';

export const ZIP_CODE_REGEX = /^\d{5}-?\d{3}$/;
export const ZIP_CODE_MASK = '[00000]-[000]';
export const ZIP_CODE_REGEX_MESSAGE = 'CEP inválido';
export const ZIP_CODE_REQUIRED_MESSAGE = 'Digite o CEP do estacionamento';
