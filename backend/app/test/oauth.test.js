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
      email: "484338a2-dab2-4827-a8e4-1f0b9d996695@email.com",
      password: "password123"
    };
    const response = await request(app).post("/api/oauth/login").send(params);
    expect(response.statusCode).toEqual(200);
    done();
  });
});