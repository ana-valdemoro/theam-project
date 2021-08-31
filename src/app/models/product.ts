export class Product {
    modelId : string;
    name: string;
    type: string;
    sku: string;
    description: string;
    url: string;
    color:string;
    composition: string;
    care: string;
    originalPrice: number;
    finalPrice: number;
    finalPriceType: string;
    currency: string;
    images: string[];
    sizes: Size[];

}
export class Size{
    variantId: string;
    name: string;
    stockQty : string;
}
export class Filter{
    filterName: string;
    label: string;
    options: any[];
    type:string;
}
export class ProductAPIResponse{
    results: Product[];
    filters: Filter[];
    resultCount: number;
}
