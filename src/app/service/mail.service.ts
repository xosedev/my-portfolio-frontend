import { AxiosRequestConfig } from "axios";
import { GenericResponse } from "../model/generic-response.model";
import { Mail } from "../model/mail.model";
import instance from "../config/config.api";

class MailService {
   
    async sendMail(mail: Mail) {
        const genericResponse: GenericResponse = {}
        var config: AxiosRequestConfig= {
            method: 'post',
            url: '/mail/send-mail',
            data: mail
        }

        return await instance(config).then(function (response){
            if (response.status === 200) {
                 genericResponse.data = response
            }
            return genericResponse
        }).catch(function (error){
            console.log(error);
            
            throw new Error("Error to send Email");
        })
    }
}
export default new MailService()