export default class Peripheral {
  constructor(
    public uid: number,
    public vendor: string,
    public date: string,
    public status: "online" | "offline",
    public gatewayId: number
  ) {}
}
