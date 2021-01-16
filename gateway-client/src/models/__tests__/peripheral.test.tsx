import axios from "axios";
import { useParams } from "react-router-dom";

import Peripheral from "models/peripheral";

describe("Peripheral axios calls", () => {
  describe("getAll", () => {
    let data: Peripheral[];

    beforeEach(() => {
      data = [new Peripheral(2, "AMS", new Date().toString(), "online", 1)];
      // @ts-ignore
      axios.get.mockImplementationOnce(() =>
        Promise.resolve({ status: 200, data })
      );
    });

    it("calls axios with correct url", async () => {
      await Peripheral.getAll();
      expect(axios.get).toHaveBeenCalledWith("/api/peripherals");
    });

    it("returns data on correct status code", async () => {
      const response = await Peripheral.getAll();

      expect(axios.get).toHaveBeenCalled();
      expect(response).toEqual(data);
    });
  });

  describe("GetById", () => {
    let data: Peripheral;

    beforeEach(() => {
      data = new Peripheral(2, "AMS", new Date().toString(), "online", 1);
      // @ts-ignore
      useParams.mockImplementationOnce(() => ({ id: "1" }));

      // @ts-ignore
      axios.get.mockImplementationOnce(() =>
        Promise.resolve({ status: 200, data })
      );
    });

    it("calls axios with correct url", async () => {
      await Peripheral.getById(2);
      expect(axios.get).toHaveBeenCalledWith("/api/peripherals/2");
    });

    it("returns data on correct status code", async () => {
      const response = await Peripheral.getById(2);

      expect(axios.get).toHaveBeenCalled();
      expect(response).toEqual(data);
    });
  });

  describe("Create", () => {
    let data: Peripheral;

    beforeEach(() => {
      data = new Peripheral(2, "AMS", new Date().toString(), "online", 1);

      // @ts-ignore
      axios.post.mockImplementationOnce(() =>
        Promise.resolve({ status: 201, data })
      );
    });

    it("calls axios with correct url", async () => {
      await Peripheral.create(data);
      expect(axios.post).toHaveBeenCalledWith("/api/peripherals", data);
    });
  });

  describe("Update", () => {
    let data: Peripheral;

    beforeEach(() => {
      data = new Peripheral(2, "AMS", new Date().toString(), "online", 1);
      // @ts-ignore
      useParams.mockImplementationOnce(() => ({ id: "1" }));

      // @ts-ignore
      axios.put.mockImplementationOnce(() =>
        Promise.resolve({ status: 200, data })
      );
    });

    it("calls axios with correct url", async () => {
      await Peripheral.update(2, data);
      expect(axios.put).toHaveBeenCalledWith("/api/peripherals/2", data);
    });
  });

  describe("Delete", () => {
    let data: Peripheral[];

    beforeEach(() => {
      data = [new Peripheral(2, "AMS", new Date().toString(), "online", 1)];

      // @ts-ignore
      useParams.mockImplementationOnce(() => ({ id: "1" }));
      // @ts-ignore
      axios.delete.mockImplementationOnce(() =>
        Promise.resolve({ status: 200, data })
      );
    });

    it("calls axios with correct url", async () => {
      await Peripheral.delete(2);
      expect(axios.delete).toHaveBeenCalledWith("/api/peripherals/2");
    });
  });
});
