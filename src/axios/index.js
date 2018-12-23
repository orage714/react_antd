import JsnP from 'jsonp'
import axios from 'axios'
import { message } from 'antd'
export default class Axios {
    static jsonp(options) {
        return new Promise((resolve, reject) => {
            JsnP(options.url, {
                param: 'callback'
            }, function (err, response) {
                if (response.status == 'success') {
                    resolve(response)
                } else (
                    reject(response.message)
                )
            })
        })
    }
    static ajax(options) {
        return new Promise((resolve, reject) => {
            let loading;
        
            if (options.data && options.data.isShoeLoading !== false) {
                loading=document.getElementById('ajaxLoading');
                loading.style.display="block"
            }
            let baseApi = 'https://www.easy-mock.com/mock/5c1ddc21eba47d7ec5d13866/moccapi'
            axios({
                url: options.url,
                baseURL: baseApi,
                method: options.method,
                // timeout: 500,
                params: (options.data && options.data.params) || ''
            }).then((response) => {
                if (response.status == '200') {
                    resolve(response.data)
                    if (options.data && options.data.isShoeLoading !== false) {
                        loading.style.display="none"
                    }
                } else {
                    reject(response.data)
                }
            })
        })

    }
}