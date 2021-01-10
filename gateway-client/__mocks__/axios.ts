const axiosMock = jest.genMockFromModule("axios");

let mockResponse = {
  data: {
    gateways: [
      { id: 1, serial: "245f84i920", name: "gateway1", address: "127.0.27.1" },
    ],
  },
};
