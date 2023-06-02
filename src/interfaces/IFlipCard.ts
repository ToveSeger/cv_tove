import { JsxElement } from "typescript";

export default interface IFlipCard{
    ImgPath?:string;
    ImgAltText?:string;
    Text:string;
    HasBackside:boolean;
    RoutePath?:string;
    BacksideContent?:any;
}