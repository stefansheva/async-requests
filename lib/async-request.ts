import { RequestBuilder } from './requestBuilder'
import { MethodType } from './methodType'

class Request {
    get(url:string, options?:any):Promise<string>{
        return new RequestBuilder()
            .addMethod(MethodType.GET)
            .addUrl(url)
            .addOptions(options)
            .build()
    }
    put(url:string, body:any, options?:any): Promise<string>{
        return new RequestBuilder()
            .addMethod(MethodType.PUT)
            .addUrl(url)
            .addBody(body)
            .addOptions(options)
            .build()
    }
    post(url:string, body:any, options?:any): Promise<string>{
        return new RequestBuilder()
            .addMethod(MethodType.POST)
            .addUrl(url)
            .addBody(body)
            .addOptions(options)
            .build()
    }
    patch(url:string, body:any, options?:any): Promise<string>{
        return new RequestBuilder()
            .addMethod(MethodType.POST)
            .addUrl(url)
            .addBody(body)
            .addOptions(options)
            .build()
    }
    delete(url:string, options?:any): Promise<string>{
        return new RequestBuilder()
            .addMethod(MethodType.DELETE)
            .addUrl(url)
            .addOptions(options)
            .build()
    }
}

module.exports = new Request();