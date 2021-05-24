import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})

export class DummyProfiles {
    profiles = [
        {
            full_name: "Ruchir Gavshinde",
            college:"Acropolis Institute of Technology and Research",
            is_college_student:true,
            devcoins:130,
            username:'ruchiiiir',
            profile_picture:"https://images.pexels.com/photos/3990673/pexels-photo-3990673.png?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {
            full_name: "Mukul Malviya",
            college:"IPS Academy",
            is_college_student:true,
            devcoins:520,
            username:'mukul_mlv',
            profile_picture:"https://images.pexels.com/photos/2853540/pexels-photo-2853540.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {
            full_name: "Mohit Patel",
            college:"Acropolis Institute of Technology and Research",
            institution:"Clinikk Pvt. Ltd, Banglore",
            is_college_student:false,
            devcoins:235,
            username:'mohittt',
            profile_picture:"https://images.pexels.com/photos/2853251/pexels-photo-2853251.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        {
            full_name: "Mukul Borkar",
            college:"Acropolis Institute of Technology and Research",
            is_college_student:true,
            devcoins:650,
            username:'borkar_07',
            profile_picture:"https://images.pexels.com/photos/2932802/pexels-photo-2932802.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {
            full_name: "Mahim Panchal",
            college:"DAVV Indore",
            is_college_student:true,
            devcoins:150,
            username:'panchal_10',
            profile_picture:"https://images.pexels.com/photos/3475637/pexels-photo-3475637.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
    ]
}