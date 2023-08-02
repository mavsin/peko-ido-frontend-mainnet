export interface ISocialLink {
  id: number;
  icon: string;
  href: string;
}

export interface ISaleInfo {
  startAt: string;
  endAt: string;
  saleType: string;
  method: string;
  hardCap: number | string;
  priceInEth: number | string;
  personalCap?: Array<number>;
  saleDuration?: string;
}

export interface IKeyToSaleInfo {
  [key: number]: ISaleInfo;
}
