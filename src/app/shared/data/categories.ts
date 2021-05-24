import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})

export class DummyCategories {
    data = [
       {
           name:"Machine Learning",
           alias:"machine_learning"
       },
       {
           name:"Web Development",
           alias:"web_development"
       },
       {
           name:"Natural Languauge Processing",
           alias:"nlp"
       },
       {
           name:"Frontend Development",
           alias:"frontend_development"
       },
       {
           name:"Data Analytics",
           alias:"data_analytics"
       }
    ]
}