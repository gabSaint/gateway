import axios from "axios";

export default class Gateway {
  constructor(
    public id: number,
    public serial: string,
    public name: string,
    public address: string
  ) {}

  static getAll = async () => {
    try {
      const response = await axios.get(`/api/gateways`);
      return response.data;
    } catch {
      return [];
    }
  };

  static getById = async (id: number) => {
    try {
      const response = await axios.get(`/api/gateways/${id}`);
      return response.data;
    } catch {
      return {} as Gateway;
    }
  };

  static getPeripherals = async (id: number) => {
    try {
      const response = await axios.get(`/api/gateways/${id}/peripherals`);
      return response.data;
    } catch {
      return [];
    }
  };

  static create = async (data: Gateway) => {
    try {
      await await axios.post(`/api/gateways`, data);
    } catch ({ response }) {
      return response.data.detail;
    }
  };

  static update = async (id: number, data: Gateway) => {
    try {
      await axios.put(`/api/gateways/${id}`, data);
    } catch ({ response }) {
      return response.data.detail;
    }
  };

  static delete = async (id: number) => {
    try {
      await await axios.delete(`/api/gateways/${id}`);
    } catch ({ response }) {
      return response.data.detail;
    }
  };
}
