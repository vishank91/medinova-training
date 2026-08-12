import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { environment } from '../../environments/environment';

@Service()
export class ApiCallingService {
    http = inject(HttpClient)
    env = environment
    header1 = new HttpHeaders({                 //For Those APIs In Which Payload Doesn't Contains File Field
        "content-type": "application/json",
        "authorization": "Bearer YourToken"
    })
    header2 = new HttpHeaders({                  //For Those APIs In Which Payload Contains File Field
        "authorization": "Bearer YourToken"
    })

    createRecord(collection: any, data: any) {
        return this.http.post(`${this.env.SITE_BACKEND_SERVER}/${collection}`, data, {
            headers: this.header1
        })
    }

    createMultipartRecord(collection: any, data: any) {
        return this.http.post(`${this.env.SITE_BACKEND_SERVER}/${collection}`, data, {
            headers: this.header2
        })
    }

    getRecord(collection: any) {
        return this.http.get(`${this.env.SITE_BACKEND_SERVER}/${collection}`, {
            headers: this.header1
        })
    }

    updateRecord(collection: any, data: any) {
        return this.http.put(`${this.env.SITE_BACKEND_SERVER}/${collection}/${data.id}`, data, {
            headers: this.header1
        })
    }

    updateMultipartRecord(collection: any, data: any) {
        return this.http.put(`${this.env.SITE_BACKEND_SERVER}/${collection}/${data.id}`, data, {
            headers: this.header2
        })
    }

    deleteRecord(collection: any, data: any) {
        return this.http.delete(`${this.env.SITE_BACKEND_SERVER}/${collection}/${data.id}`, {
            headers: this.header1
        })
    }
}
