
export default interface IFlipCard{
    ImgPath?:string;
    ImgAltText?:string;
    Text:string;
    Link?:string;
    HasBackside?:boolean;
    RoutePath?:string;
    BacksideContent?:any;
    className?:string;
}