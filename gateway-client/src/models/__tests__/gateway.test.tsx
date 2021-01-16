import axios from "axios";
import { useParams } from "react-router-dom";

import Gateway from "models/gateway";
import Peripheral from "models/peripheral";

describe("Gateways axios calls", () => {
  describe("GetAll", () => {
    let data: Gateway[];

    beforeEach(() => {
      data = [new Gateway(1, "testSerial", "testName", "127.0.0.1")];
      // @ts-ignore
      axios.get.mockImplementationOnce(() =>
        Promise.resolve({ status: 200, data })
      );
    });

    it("calls axios with correct url", async () => {
      await Gateway.getAll();
      expect(axios.get).toHaveBeenCalledWith("/api/gateways");
    });

    it("returns data on correct status code", async () => {
      const response = await Gateway.getAll();

      expect(axios.get).toHaveBeenCalled();
      expect(response).toEqual(data);
    });
  });

  describe("GetById", () => {
    let data: Gateway;

    beforeEach(() => {
      data = new Gateway(1, "testSerial", "testName", "127.0.0.1");
      // @ts-ignore
      useParams.mockImplementationOnce(() => ({ id: "1" }));

      // @ts-ignore
      axios.get.mockImplementationOnce(() =>
        Promise.resolve({ status: 200, data })
      );
    });

    it("calls axios with correct url", async () => {
      await Gateway.getById(1);
      expect(axios.get).toHaveBeenCalledWith("/api/gateways/1");
    });

    it("returns data on correct status code", async () => {
      const response = await Gateway.getById(1);

      expect(axios.get).toHaveBeenCalled();
      expect(response).toEqual(data);
    });
  });

  describe("GetPeripherals", () => {
    let data: Peripheral[];

    beforeEach(() => {
      data = [
        new Peripheral(1, "ASM", new Date().toString(), "online", 2),
        new Peripheral(2, "AST", new Date().toString(), "offline", 2),
      ];

      // @ts-ignore
      useParams.mockImplementationOnce(() => ({ id: "2" }));
      // @ts-ignore
      axios.get.mockImplementationOnce(() =>
        Promise.resolve({ status: 200, data })
      );
    });

    it("calls axios with correct url", async () => {
      await Gateway.getPeripherals(2);
      expect(axios.get).toHaveBeenCalledWith("/api/gateways/2/peripherals");
    });

    it("returns data on correct status code", async () => {
      const response = await Gateway.getPeripherals(2);

      expect(axios.get).toHaveBeenCalled();
      expect(response).toEqual(data);
    });
  });

  describe("Create", () => {
    let data: Gateway;

    beforeEach(() => {
      data = new Gateway(1, "testSerial", "testName", "127.0.0.1");

      // @ts-ignore
      axios.post.mockImplementationOnce(() =>
        Promise.resolve({ status: 201, data })
      );
    });

    it("calls axios with correct url", async () => {
      await Gateway.create(data);
      expect(axios.post).toHaveBeenCalledWith("/api/gateways", data);
    });

    it("returns data on correct status code", async () => {
      const response = await Gateway.create(data);

      expect(axios.post).toHaveBeenCalled();
      expect(response).toEqual("");
    });
  });

  describe("Update", () => {
    let data: Gateway;

    beforeEach(() => {
      data = new Gateway(1, "testSerial", "testName", "127.0.0.1");
      // @ts-ignore
      useParams.mockImplementationOnce(() => ({ id: "1" }));

      // @ts-ignore
      axios.put.mockImplementationOnce(() =>
        Promise.resolve({ status: 200, data })
      );
    });

    it("calls axios with correct url", async () => {
      await Gateway.update(1, data);
      expect(axios.put).toHaveBeenCalledWith("/api/gateways/1", data);
    });

    it("returns data on correct status code", async () => {
      const response = await Gateway.update(1, data);

      expect(axios.put).toHaveBeenCalled();
      expect(response).toEqual("");
    });
  });

  describe("Delete", () => {
    let data: Gateway[];

    beforeEach(() => {
      data = [new Gateway(1, "testSerial", "testName", "127.0.0.1")];

      // @ts-ignore
      useParams.mockImplementationOnce(() => ({ id: "1" }));
      // @ts-ignore
      axios.delete.mockImplementationOnce(() =>
        Promise.resolve({ status: 200, data })
      );
    });

    it("calls axios with correct url", async () => {
      await Gateway.delete(1);
      expect(axios.delete).toHaveBeenCalledWith("/api/gateways/1");
    });

    it("returns data on correct status code", async () => {
      const response = await Gateway.delete(1);

      expect(axios.delete).toHaveBeenCalled();
      expect(response).toEqual("");
    });
  });
});
