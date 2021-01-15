import axios from "__mocks__/axios";

import Gateway from "models/gateway";
import { useParams } from "__mocks__/react-router-dom";
import Peripheral from "models/peripheral";

describe("Gateways axios calls", () => {
  describe("getAll", () => {
    let data: Gateway[];

    beforeEach(() => {
      data = [new Gateway(1, "testSerial", "testName", "127.0.0.1")];
      axios.get.mockImplementationOnce(() =>
        Promise.resolve({ status: 200, data })
      );
    });

    it("calls axios with correct url", async () => {
      await Gateway.getAll();
      expect(axios.get).toHaveBeenCalledWith("/gateways");
    });

    it("returns data on correct status code", async () => {
      const response = await Gateway.getAll();

      expect(axios.get).toHaveBeenCalled();
      expect(response).toEqual(data);
    });
  });

  describe("getById", () => {
    let data: Gateway;

    beforeEach(() => {
      data = new Gateway(1, "testSerial", "testName", "127.0.0.1");
      useParams.mockImplementationOnce(() => ({ id: "1" }));

      axios.get.mockImplementationOnce(() =>
        Promise.resolve({ status: 200, data })
      );
    });

    it("calls axios with correct url", async () => {
      await Gateway.getById(1);
      expect(axios.get).toHaveBeenCalledWith("/gateways/1");
    });

    it("returns data on correct status code", async () => {
      const response = await Gateway.getById(1);

      expect(axios.get).toHaveBeenCalled();
      expect(response).toEqual(data);
    });
  });

  describe("getPeripherals", () => {
    let data: Peripheral[];

    beforeEach(() => {
      data = [
        new Peripheral(1, "ASM", new Date().toString(), "online", 2),
        new Peripheral(2, "AST", new Date().toString(), "offline", 2),
      ];

      useParams.mockImplementationOnce(() => ({ id: "2" }));
      axios.get.mockImplementationOnce(() =>
        Promise.resolve({ status: 200, data })
      );
    });

    it("calls axios with correct url", async () => {
      await Gateway.getPeripherals(2);
      expect(axios.get).toHaveBeenCalledWith("/gateways/2/peripherals");
    });

    it("returns data on correct status code", async () => {
      const response = await Gateway.getPeripherals(2);

      expect(axios.get).toHaveBeenCalled();
      expect(response).toEqual(data);
    });
  });

  describe("create", () => {
    let data: Gateway;

    beforeEach(() => {
      data = new Gateway(1, "testSerial", "testName", "127.0.0.1");

      axios.post.mockImplementationOnce(() =>
        Promise.resolve({ status: 201, data })
      );
    });

    it("calls axios with correct url", async () => {
      await Gateway.create(data);
      expect(axios.post).toHaveBeenCalledWith("/gateways", data);
    });

    it("returns data on correct status code", async () => {
      const response = await Gateway.create(data);

      expect(axios.post).toHaveBeenCalled();
      expect(response).toEqual(data);
    });
  });

  describe("update", () => {
    let data: Gateway;

    beforeEach(() => {
      data = new Gateway(1, "testSerial", "testName", "127.0.0.1");
      useParams.mockImplementationOnce(() => ({ id: "1" }));

      axios.put.mockImplementationOnce(() =>
        Promise.resolve({ status: 200, data })
      );
    });

    it("calls axios with correct url", async () => {
      await Gateway.update(1, data);
      expect(axios.put).toHaveBeenCalledWith("/gateways/1", data);
    });

    it("returns data on correct status code", async () => {
      const response = await Gateway.update(1, data);

      expect(axios.put).toHaveBeenCalled();
      expect(response).toEqual(data);
    });
  });

  describe("delete", () => {
    let data: Gateway[];

    beforeEach(() => {
      data = [new Gateway(1, "testSerial", "testName", "127.0.0.1")];

      useParams.mockImplementationOnce(() => ({ id: "1" }));
      axios.delete.mockImplementationOnce(() =>
        Promise.resolve({ status: 200, data })
      );
    });

    it("calls axios with correct url", async () => {
      await Gateway.delete(1);
      expect(axios.delete).toHaveBeenCalledWith("/gateways/1");
    });

    it("returns data on correct status code", async () => {
      const response = await Gateway.delete(1);

      expect(axios.delete).toHaveBeenCalled();
      expect(response).toEqual(data);
    });
  });
});
