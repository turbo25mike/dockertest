import { Address } from './address';

export interface Order
{
    Id: string;
    FirstName: string;
    LastName: string;
    Address: Address;
    ItemId: string; 
    Quantity: number;
}