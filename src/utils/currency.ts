export function formatCurrencyBRL(value: number | string): string {
    const number = typeof value === 'string' ? parseFloat(value) : value;

    if (isNaN(number)) {return 'R$ 0,00';}

    return number.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
}

export function formatCurrencyToNumber(value: string): number | null {
    const sanitizedString = value.replace('R$', '').trim();
    const numberString = sanitizedString.replace(',', '.');

    const number = parseFloat(numberString);

    return isNaN(number) ? null : number;
}
