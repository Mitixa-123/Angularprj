export interface student
{
    id: number;
    name: string;
    phone: string;
    age: number;
    languages:Array<string>;
}

export interface order
{
    
    OrderType: string;
    Price: number;
    Volume: number;
}

export interface orderbook
{
    BuyOrders:Array<order>;
    CreatedTimestampUtc:number;
    SellOrders:Array<order>;
}

export interface pricetype
{
    
    bid: string;
    ask: string;
    last: string;
}
export interface Latestprice
{
    status:string;
    prices:{
        bid: pricetype;
        ask: pricetype;
        last: pricetype;
    }
    
}