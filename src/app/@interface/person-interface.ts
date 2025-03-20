export interface UserData {
  userName: string;
  lev: number;
  props: Array<Prop>; // prop[] //
}

export interface Prop {
  propsName: String;
  amount: number;
}
