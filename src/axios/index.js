import JsnP from 'jsonp'
import axios from 'axios'
export default class Axios{
    static jsonp(options){
        return new Promise((resolve,reject)=>{
            JsnP(options.url,{
                param:'callback'
            },function(err,response){
                if(response.status == 'success'){
                    resolve(response)
                }else(
                    reject(response.message)
                )
            })
        })
    }
}