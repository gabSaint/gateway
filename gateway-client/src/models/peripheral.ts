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
    const response = await axios.get(`/api/peripherals`);

    if (response.status === 200) {
      return response.data;
    }
    return [];
  };

  static getById = async (id: number) => {
    const response = await axios.get(`/api/peripherals/${id}`);

    if (response.status === 200) {
      return response.data;
    }
    return {} as Peripheral;
  };

  static create = async (gate_id: number, data: Peripheral) => {
    const response = await axios.post(`/api/peripherals`, data);

    if (response.status === 201) {
      return response.data;
    }
  };

  static update = async (id: number, data: Peripheral) => {
    const response = await axios.put(`/api/peripherals/${id}`, data);

    if (response.status === 200) {
      return response.data;
    }
  };

  static delete = async (id: number) => {
    const response = await axios.delete(`/api/peripherals/${id}`);

    if (response.status === 200) {
      return response.data;
    }
  };
}
