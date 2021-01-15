import axios from "axios";

export default class Peripheral {
  constructor(
    public id: number,
    public vendor: string,
    public date: string,
    public status: "online" | "offline",
    public gatewayId: number
  ) {}

  static getAll = async () => {
    const response = await axios.get(`/peripherals`);

    if (response.status === 200) {
      return response.data;
    }
    return [];
  };

  static getById = async (gate_id: number, id: number) => {
    const response = await axios.get(`/gateways/${gate_id}/peripherals/${id}`);

    if (response.status === 200) {
      return response.data;
    }
    return {} as Peripheral;
  };

  static create = async (gate_id: number, data: Peripheral) => {
    const response = await axios.post(`/gateways/${gate_id}/peripherals`, data);

    if (response.status === 201) {
      return response.data;
    }
  };

  static update = async (gate_id: number, id: number, data: Peripheral) => {
    const response = await axios.put(
      `/gateways/${gate_id}/peripherals/${id}`,
      data
    );

    if (response.status === 200) {
      return response.data;
    }
  };

  static delete = async (gate_id: number, id: number) => {
    const response = await axios.delete(
      `/gateways/${gate_id}/peripherals/${id}`
    );

    if (response.status === 200) {
      return response.data;
    }
  };
}
