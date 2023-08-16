

export type QueryFilter = {
    field: string,
    operator: Operators,
    value: string | number
}



export enum Operators {
    Equal="eq",
    Greater="gt",
    GreaterOrEqual="gte",
    In="in",
    Is="is",
    Less="lt",
    LessOrEqual="lte",
    NotEqual="neq"
}