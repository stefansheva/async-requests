export class RequestError extends Error{
    constructor(public status: number, error: string) {
        super(error)
    }
}

export class ParameterError extends Error{
    constructor(error: string) {
        super(error)
    }
}
