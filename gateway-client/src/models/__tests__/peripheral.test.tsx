import axios from "__mocks__/axios";
import { useParams } from "__mocks__/react-router-dom";

import Peripheral from "models/peripheral";

describe("Peripheral axios calls", () => {
  describe("getAll", () => {
    let data: Peripheral[];

    beforeEach(() => {
      data = [new Peripheral(2, "AMS", new Date().toString(), "online", 1)];
      axios.get.mockImplementationOnce(() =>
        Promise.resolve({ status: 200, data })
      );
    });

    it("calls axios with correct url", async () => {
      await Peripheral.getAll();
      expect(axios.get).toHaveBeenCalledWith("/peripherals");
    });

    it("returns data on correct status code", async () => {
      const response = await Peripheral.getAll();

      expect(axios.get).toHaveBeenCalled();
      expect(response).toEqual(data);
    });
  });

  describe("getById", () => {
    let data: Peripheral;

    beforeEach(() => {
      data = new Peripheral(2, "AMS", new Date().toString(), "online", 1);
      useParams.mockImplementationOnce(() => ({ id: "1" }));

      axios.get.mockImplementationOnce(() =>
        Promise.resolve({ status: 200, data })
      );
    });

    it("calls axios with correct url", async () => {
      await Peripheral.getById(2);
      expect(axios.get).toHaveBeenCalledWith("/peripherals/2");
    });

    it("returns data on correct status code", async () => {
      const response = await Peripheral.getById(2);

      expect(axios.get).toHaveBeenCalled();
      expect(response).toEqual(data);
    });
  });

  describe("create", () => {
    let data: Peripheral;

    beforeEach(() => {
      data = new Peripheral(2, "AMS", new Date().toString(), "online", 1);

      axios.post.mockImplementationOnce(() =>
        Promise.resolve({ status: 201, data })
      );
    });

    it("calls axios with correct url", async () => {
      await Peripheral.create(1, data);
      expect(axios.post).toHaveBeenCalledWith("/gateways/1/peripherals", data);
    });

    it("returns data on correct status code", async () => {
      const response = await Peripheral.create(1, data);

      expect(axios.post).toHaveBeenCalled();
      expect(response).toEqual(data);
    });
  });

  describe("update", () => {
    let data: Peripheral;

    beforeEach(() => {
      data = new Peripheral(2, "AMS", new Date().toString(), "online", 1);
      useParams.mockImplementationOnce(() => ({ id: "1" }));

      axios.put.mockImplementationOnce(() =>
        Promise.resolve({ status: 200, data })
      );
    });

    it("calls axios with correct url", async () => {
      await Peripheral.update(2, data);
      expect(axios.put).toHaveBeenCalledWith("/peripherals/2", data);
    });

    it("returns data on correct status code", async () => {
      const response = await Peripheral.update(2, data);

      expect(axios.put).toHaveBeenCalled();
      expect(response).toEqual(data);
    });
  });

  describe("delete", () => {
    let data: Peripheral[];

    beforeEach(() => {
      data = [new Peripheral(2, "AMS", new Date().toString(), "online", 1)];

      useParams.mockImplementationOnce(() => ({ id: "1" }));
      axios.delete.mockImplementationOnce(() =>
        Promise.resolve({ status: 200, data })
      );
    });

    it("calls axios with correct url", async () => {
      await Peripheral.delete(2);
      expect(axios.delete).toHaveBeenCalledWith("/peripherals/2");
    });

    it("returns data on correct status code", async () => {
      const response = await Peripheral.delete(2);

      expect(axios.delete).toHaveBeenCalled();
      expect(response).toEqual(data);
    });
  });
});
