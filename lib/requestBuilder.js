"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
const errors_1 = require("./errors");
const methodType_1 = require("./methodType");
class RequestBuilder {
    constructor() {
        this.method = methodType_1.MethodType.GET;
        this.url = "";
    }
    addMethod(method) {
        this.method = method;
        return this;
    }
    addUrl(url) {
        this.url = url;
        return this;
    }
    addBody(body) {
        this.body = body;
        return this;
    }
    addOptions(options) {
        this.options = options;
        return this;
    }
    constructReqMethod() {
        var requestData = {
            url: this.url,
            method: this.method,
            json: true
        };
        if (this.body) {
            requestData.body = this.body;
        }
        if (this.options) {
            requestData = Object.assign(requestData, this.options);
        }
        if (!this.url) {
            throw new errors_1.ParameterError("URL is not defined.");
        }
        if (!this.method) {
            throw new errors_1.ParameterError("Method is not defined.");
        }
        return requestData;
    }
    build() {
        return new Promise((resolve, reject) => {
            request(this.constructReqMethod(), (error, response, data) => {
                if (error) {
                    reject(new errors_1.RequestError(0, error));
                }
                else if (response.statusCode != 200) {
                    reject(new errors_1.RequestError(response.statusCode, error));
                }
                else {
                    resolve(data);
                }
            });
        });
    }
}
exports.RequestBuilder = RequestBuilder;
