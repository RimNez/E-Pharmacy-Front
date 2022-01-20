import { Pharmacy } from "./pharmacy";
import { User } from "./user";

export class Commande {
    //@ts-ignore
    id : number;
    //@ts-ignore
    date : Date;
    //@ts-ignore
    totalPrix : number;
    //@ts-ignore
    etat : string;
    //@ts-ignore
    idUser : number;
    //@ts-ignore
    idPharmacy : number;
    //@ts-ignore
    medicaments:any=[];
    //@ts-ignore
    user : User;
    //@ts-ignore
    pharmacy : Pharmacy;
}