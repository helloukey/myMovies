const request = require("supertest");
const app = require("../../app");
const db = require("../db");

// Pass supertest agent for each test
const agent = request.agent(app);

// Setup connection to the database
beforeAll(async () => await db.connect());
beforeEach(async () => await db.clear());
afterAll(async () => await db.close());

// Test user registration
describe("POST /register", () => {
  it("should register a new user", async () => {
    const res = await agent.post("/authorization/register").send({
      firstName: "Kunal",
      email: "kunal@test.com",
      password: "test@123",
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("userId");
    expect(res.body).toHaveProperty("firstName");
    expect(res.body).toHaveProperty("token");
  });

  // Test user registration with missing email field
  it("should return 400 if any field is missing", async () => {
    const res = await agent.post("/authorization/register").send({
      firstName: "Kunal",
      email: "",
      password: "test@123",
    });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("error");
  });

  // Test user registration with missing firstName field
  it("should return 400 if firstName field is missing", async () => {
    const res = await agent.post("/authorization/register").send({
      firstName: "",
      email: "kunal@test.com",
      password: "test@123",
    });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("error");
  });

  // Test user registration with missing password field
  it("should return 400 if password field is missing", async () => {
    const res = await agent.post("/authorization/register").send({
      firstName: "Kunal",
      email: "kunal@test.com",
      password: "",
    });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("error");
  });

  // Test user registration with first name less than 3 characters
  it("should return 400 if first name is less than 3 characters", async () => {
    const res = await agent.post("/authorization/register").send({
      firstName: "Ku",
      email: "kunal@test.com",
      password: "test@123",
    });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("error");
  });

  // Test user registration with first name more than 12 characters
  it("should return 400 if first name is more than 12 characters", async () => {
    const res = await agent.post("/authorization/register").send({
      firstName: "KunalKunalKunal",
      email: "kunal@test.com",
      password: "test@123",
    });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("error");
  });

  // Test user registration with invalid email
  it("should return 400 if email is invalid", async () => {
    const res = await agent.post("/authorization/register").send({
      firstName: "Kunal",
      email: "kunal",
      password: "test@123",
    });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("error");
  });
});

// Test user login
describe("POST /login", () => {
  // Test user successful login
  it("should login an existing user", async () => {
    const registrationResponse = await agent
      .post("/authorization/register")
      .send({
        firstName: "Kunal",
        email: "kunal@test.com",
        password: "test@123",
      });
    expect(registrationResponse.statusCode).toEqual(200);
    const res = await agent.post("/authorization/login").send({
      email: "kunal@test.com",
      password: "test@123",
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("userId");
    expect(res.body).toHaveProperty("firstName");
    expect(res.body).toHaveProperty("token");
  });

  // Test user login with email not registered
  it("should return 400 if email is not registered", async () => {
    const res = await agent.post("/authorization/login").send({
      email: "kunal@test.com",
      password: "test@123",
    });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("error");
  });

  // Test user login with missing email field
  it("should return 400 if email field is missing", async () => {
    const res = await agent.post("/authorization/login").send({
      email: "",
      password: "test@123",
    });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("error");
  });

  // Test user login with missing password field
  it("should return 400 if password field is missing", async () => {
    const res = await agent.post("/authorization/login").send({
      email: "kunal@test.com",
      password: "",
    });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("error");
  });

  // Test user login with incorrect password
  it("should return 400 if password is incorrect", async () => {
    const registrationResponse = await agent
      .post("/authorization/register")
      .send({
        firstName: "Kunal",
        email: "kunal@test.com",
        password: "test@123",
      });
    expect(registrationResponse.statusCode).toEqual(200);
    const res = await agent.post("/authorization/login").send({
      email: "kunal@test.com",
      password: "test@1234",
    });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("error");
  });

  // Test user login with missing email and password
  it("should return 400 if email and password fields are missing", async () => {
    const res = await agent.post("/authorization/login").send({
      email: "",
      password: "",
    });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("error");
  });
});
