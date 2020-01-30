"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RequestError extends Error {
    constructor(status, error) {
        super(error);
        this.status = status;
    }
}
exports.RequestError = RequestError;
class ParameterError extends Error {
    constructor(error) {
        super(error);
    }
}
exports.ParameterError = ParameterError;
