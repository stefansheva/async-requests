"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requestBuilder_1 = require("./requestBuilder");
const methodType_1 = require("./methodType");
class Request {
    get(url, options) {
        return new requestBuilder_1.RequestBuilder()
            .addMethod(methodType_1.MethodType.GET)
            .addUrl(url)
            .addOptions(options)
            .build();
    }
    put(url, body, options) {
        return new requestBuilder_1.RequestBuilder()
            .addMethod(methodType_1.MethodType.PUT)
            .addUrl(url)
            .addBody(body)
            .addOptions(options)
            .build();
    }
    post(url, body, options) {
        return new requestBuilder_1.RequestBuilder()
            .addMethod(methodType_1.MethodType.POST)
            .addUrl(url)
            .addBody(body)
            .addOptions(options)
            .build();
    }
    patch(url, body, options) {
        return new requestBuilder_1.RequestBuilder()
            .addMethod(methodType_1.MethodType.POST)
            .addUrl(url)
            .addBody(body)
            .addOptions(options)
            .build();
    }
    delete(url, options) {
        return new requestBuilder_1.RequestBuilder()
            .addMethod(methodType_1.MethodType.DELETE)
            .addUrl(url)
            .addOptions(options)
            .build();
    }
}
module.exports = new Request();
