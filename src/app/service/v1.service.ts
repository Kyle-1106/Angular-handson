import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core"



@Injectable({
    providedIn:"root"
})

export class V1Service{
    constructor(private http:HttpClient){
    }
    //外部APIからユーザデータを取得する処理
    public getUserS(){
        return this.http.get("https://jsonplaceholder.typicode.com/users")
    }

}