// Itens podem ser texto comum ou { pt, en } quando precisam de tradução
export function tr(value, lang) {
    return typeof value === "string" ? value : value[lang]
}
