import axios from "axios";

export default class Gateway {
  constructor(
    public id: number,
    public serial: string,
    public name: string,
    public address: string
  ) {}

  static getAll = async () => {
    const response = await axios.get(`/api/gateways`);

    if (response.status === 200) {
      return response.data;
    }
    return [];
  };

  static getById = async (id: number) => {
    const response = await axios.get(`/api/gateways/${id}`);

    if (response.status === 200) {
      return response.data;
    }
    return {} as Gateway;
  };

  static getPeripherals = async (id: number) => {
    const response = await axios.get(`/api/gateways/${id}/peripherals`);

    if (response.status === 200) {
      return response.data;
    }
    return [];
  };

  static create = async (data: Gateway) => {
    const response = await axios.post(`/api/gateways`, data);

    if (response.status === 201) {
      return response.data;
    }
  };

  static update = async (id: number, data: Gateway) => {
    const response = await axios.put(`/api/gateways/${id}`, data);

    if (response.status === 200) {
      return response.data;
    }
  };

  static delete = async (id: number) => {
    const response = await axios.delete(`/api/gateways/${id}`);

    if (response.status === 200) {
      return response.data;
    }
  };
}
