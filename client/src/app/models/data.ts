
export class Data {
  observation_date: string;
  retail_sales_volume: number;
  acv_distribution: number;
  competition: number;
  eldp: number;
  trade_any_promo: number;
  tv: number;
  print: number;
  online_display: number;
  pre_roll_video: number;
  paid_search: number;
  public_relations: number;
  fsi: number;
  digital_coupon: number;
  shopper_marketing: number;

  constructor(observation_date: string,
      retail_sales_volume: number,
      acv_distribution: number,
      competition: number,
      eldp: number,
      trade_any_promo: number,
      tv: number,
      print: number,
      online_display: number,
      pre_roll_video: number,
      paid_search: number,
      public_relations: number,
      fsi: number,
      digital_coupon: number,
      shopper_marketing: number) {

    this.observation_date = observation_date;
    this.retail_sales_volume = retail_sales_volume;
    this.acv_distribution = acv_distribution;
    this.competition = competition;
    this.eldp = eldp;
    this.trade_any_promo = trade_any_promo;
    this.tv = tv;
    this.print = print;
    this.online_display = online_display;
    this.pre_roll_video = pre_roll_video;
    this.paid_search = paid_search;
    this.public_relations = public_relations;
    this.fsi = fsi;
    this.digital_coupon = digital_coupon;
    this.shopper_marketing = shopper_marketing;
  }
}