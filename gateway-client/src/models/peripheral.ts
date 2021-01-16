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
    try {
      const response = await axios.get(`/api/peripherals`);
      return response.data;
    } catch {
      return [];
    }
  };

  static getById = async (id: number) => {
    try {
      const response = await axios.get(`/api/peripherals/${id}`);
      return response.data;
    } catch {
      return {} as Peripheral;
    }
  };

  static create = async (data: Peripheral) => {
    try {
      await axios.post(`/api/peripherals`, data);
    } catch ({ response }) {
      return response.data.detail;
    }
  };

  static update = async (id: number, data: Peripheral) => {
    try {
      await axios.put(`/api/peripherals/${id}`, data);
    } catch ({ response }) {
      return response.data.detail;
    }
  };

  static delete = async (id: number) => {
    try {
      await axios.delete(`/api/peripherals/${id}`);
    } catch ({ response }) {
      return response.data.detail;
    }
  };
}
