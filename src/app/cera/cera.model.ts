
export interface MarketingModel {
    spend: number,
    roi: number,
    spendVsGMVPCT: number,
}
export interface TrafficModel {
    uniqueVisits: number,
    conversionRate: number,
    itemsAddedToCart: number,
    bounceRate: number
}
export interface GMVModel {
    gross: number,
    net: number,
    returns: number,
    numberOfOrders: number,
    aov: number
}
export interface GMVMTDModel {
    cumulative: number,
    target: number,
    volume: number,
    varianceTcp: number
}