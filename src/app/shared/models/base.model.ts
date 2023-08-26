export interface Response<T>
{
    data?: T,
    message: string,
    statusCode: number
}

export interface Selection<T> {
    name: string,
    value: T
}