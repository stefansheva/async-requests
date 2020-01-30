import * as request from 'request'
import { RequestError, ParameterError } from './errors'
import { MethodType } from './methodType'

export class RequestBuilder{
    private method: MethodType = MethodType.GET;
    private url: string = "";
    private body: any;
    private options: any;

    public addMethod(method:MethodType){
        this.method = method;
        return this;
    }
    public addUrl(url:string){
        this.url = url;
        return this;
    }
    public addBody(body:any){
        this.body = body;
        return this;
    }
    public addOptions(options?:any){
        this.options = options;
        return this;
    }

    private constructReqMethod(){
        var requestData:any = {
            url: this.url,
            method: this.method,
            json: true
        }
        if(this.body){
            requestData.body = this.body; 
        }
        if(this.options){
            requestData =  (<any>Object).assign(requestData, this.options);
        }
        if(!this.url){
            throw new ParameterError("URL is not defined.");
        }
        if(!this.method){
            throw new ParameterError("Method is not defined.");
        }
        return requestData;
    }

    build<T>():Promise<T>{
        return new Promise<T>((resolve:any, reject:any)=>{
            request(this.constructReqMethod(), (error:any, response:any, data:any) => {
                if(error){
                    reject(new RequestError(0, error));
                }else if(response.statusCode != 200){
                    reject(new RequestError(response.statusCode, error));
                }else{
                    resolve(data);
                }
            });
        });
    }
}