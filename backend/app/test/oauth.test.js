const request = require('supertest');
const app = require('../../server.jest');
require("../routes/oauth.routes")(app);

jest.mock("./save_json", () => ({
  save: jest.fn(),
}));

jest.mock("./usStates.json", () => [
  {
    state: "MI",
    capital: "Lansing",
    governor: "Gretchen Whitmer",
  },
  {
    state: "GA",
    capital: "Atlanta",
    governor: "Brian Kemp",
  },
]);

describe("testing-server-oauth-routes", () => {
  it("GET /api/oauth/login - success", async (done) => {
    let params = {
      email: "a9cc15ad-de55-4550-8bfb-50b58acd1818@email.com",
      password: "password123"
    };
    const response = await request(app).post("/api/oauth/login").send(params);
    expect(response.statusCode).toEqual(200);
    done();
  });
});