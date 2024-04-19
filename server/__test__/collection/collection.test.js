const request = require("supertest");
const app = require("../../app");
const db = require("../db");
const { createUser } = require("../helpers/createUser");

// Pass supertest agent for each test
const agent = request.agent(app);

// Setup connection to the database
beforeAll(async () => await db.connect());
beforeEach(async () => await db.clear());
afterAll(async () => await db.close());

// Test collection creation
describe("POST /collection", () => {
  // Test collection successful creation (like)
  it("should create a new collection (like)", async () => {
    const user = await createUser(agent);
    const res = await agent
      .post("/user/collection")
      .set("Authorization", `Bearer ${user.body.token}`)
      .send({
        mediaId: "1",
        title: "Interstellar",
        mediaType: "movie",
        saveType: "like",
        userId: user.body.userId,
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("singleItem");
    expect(res.body.singleItem).toHaveProperty("mediaId");
    expect(res.body.singleItem).toHaveProperty("title");
    expect(res.body.singleItem).toHaveProperty("mediaType");
    expect(res.body.singleItem).toHaveProperty("saveType");
    expect(res.body.singleItem).toHaveProperty("userId");
  });

  // Test collection successful creation (watch later)
  it("should create a new collection (watch later)", async () => {
    const user = await createUser(agent);
    const res = await agent
      .post("/user/collection")
      .set("Authorization", `Bearer ${user.body.token}`)
      .send({
        mediaId: "1",
        title: "Interstellar",
        mediaType: "movie",
        saveType: "watch later",
        userId: user.body.userId,
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("singleItem");
    expect(res.body.singleItem).toHaveProperty("mediaId");
    expect(res.body.singleItem).toHaveProperty("title");
    expect(res.body.singleItem).toHaveProperty("mediaType");
    expect(res.body.singleItem).toHaveProperty("saveType");
    expect(res.body.singleItem).toHaveProperty("userId");
  });

  // Test collection creation with missing mediaId field
  it("should return 400 if mediaId field is missing", async () => {
    const user = await createUser(agent);
    const res = await agent
      .post("/user/collection")
      .set("Authorization", `Bearer ${user.body.token}`)
      .send({
        mediaId: "",
        title: "Interstellar",
        mediaType: "movie",
        saveType: "like",
        userId: user.body.userId,
      });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("error");
  });

  // Test collection creation with missing title field
  it("should return 400 if title field is missing", async () => {
    const user = await createUser(agent);
    const res = await agent
      .post("/user/collection")
      .set("Authorization", `Bearer ${user.body.token}`)
      .send({
        mediaId: "1",
        title: "",
        mediaType: "movie",
        saveType: "like",
        userId: user.body.userId,
      });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("error");
  });

  // Test collection creation with missing mediaType field
  it("should return 400 if mediaType field is missing", async () => {
    const user = await createUser(agent);
    const res = await agent
      .post("/user/collection")
      .set("Authorization", `Bearer ${user.body.token}`)
      .send({
        mediaId: "1",
        title: "Interstellar",
        mediaType: "",
        saveType: "like",
        userId: user.body.userId,
      });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("error");
  });

  // Test collection creation with missing saveType field
  it("should return 400 if saveType field is missing", async () => {
    const user = await createUser(agent);
    const res = await agent
      .post("/user/collection")
      .set("Authorization", `Bearer ${user.body.token}`)
      .send({
        mediaId: "1",
        title: "Interstellar",
        mediaType: "movie",
        saveType: "",
        userId: user.body.userId,
      });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("error");
  });

  // Test collection creation with missing userId field
  it("should return 400 if userId field is missing", async () => {
    const user = await createUser(agent);
    const res = await agent
      .post("/user/collection")
      .set("Authorization", `Bearer ${user.body.token}`)
      .send({
        mediaId: "1",
        title: "Interstellar",
        mediaType: "movie",
        saveType: "like",
        userId: "",
      });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("error");
  });

  // Unauthorized user
  it("should return 401 if user is not authorized", async () => {
    const res = await agent.post("/user/collection").send({
      mediaId: "1",
      title: "Interstellar",
      mediaType: "movie",
      saveType: "like",
      userId: "1",
    });
    expect(res.statusCode).toEqual(401);
    expect(res.body).toHaveProperty("error");
  });

  // Test collection successful creatinon (show - like)
  it("should create a new collection (show - like)", async () => {
    const user = await createUser(agent);
    const res = await agent
      .post("/user/collection")
      .set("Authorization", `Bearer ${user.body.token}`)
      .send({
        mediaId: "1",
        title: "Breaking Bad",
        mediaType: "show",
        saveType: "like",
        userId: user.body.userId,
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("singleItem");
    expect(res.body.singleItem).toHaveProperty("mediaId");
    expect(res.body.singleItem).toHaveProperty("title");
    expect(res.body.singleItem).toHaveProperty("mediaType");
    expect(res.body.singleItem).toHaveProperty("saveType");
    expect(res.body.singleItem).toHaveProperty("userId");
  });

  // Test collection successful creatinon (show - watch later)
  it("should create a new collection (show - watch later)", async () => {
    const user = await createUser(agent);
    const res = await agent
      .post("/user/collection")
      .set("Authorization", `Bearer ${user.body.token}`)
      .send({
        mediaId: "1",
        title: "Breaking Bad",
        mediaType: "show",
        saveType: "watch later",
        userId: user.body.userId,
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("singleItem");
    expect(res.body.singleItem).toHaveProperty("mediaId");
    expect(res.body.singleItem).toHaveProperty("title");
    expect(res.body.singleItem).toHaveProperty("mediaType");
    expect(res.body.singleItem).toHaveProperty("saveType");
    expect(res.body.singleItem).toHaveProperty("userId");
  });

  // Test collection successful creatinon (person - like)
  it("should create a new collection (person - like)", async () => {
    const user = await createUser(agent);
    const res = await agent
      .post("/user/collection")
      .set("Authorization", `Bearer ${user.body.token}`)
      .send({
        mediaId: "1",
        title: "Robert De Niro",
        mediaType: "person",
        saveType: "like",
        userId: user.body.userId,
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("singleItem");
    expect(res.body.singleItem).toHaveProperty("mediaId");
    expect(res.body.singleItem).toHaveProperty("title");
    expect(res.body.singleItem).toHaveProperty("mediaType");
    expect(res.body.singleItem).toHaveProperty("saveType");
    expect(res.body.singleItem).toHaveProperty("userId");
  });

  // Test collection successful creatinon (person - watch later)
  it("should create a new collection (person - watch later)", async () => {
    const user = await createUser(agent);
    const res = await agent
      .post("/user/collection")
      .set("Authorization", `Bearer ${user.body.token}`)
      .send({
        mediaId: "1",
        title: "Robert De Niro",
        mediaType: "person",
        saveType: "watch later",
        userId: user.body.userId,
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("singleItem");
    expect(res.body.singleItem).toHaveProperty("mediaId");
    expect(res.body.singleItem).toHaveProperty("title");
    expect(res.body.singleItem).toHaveProperty("mediaType");
    expect(res.body.singleItem).toHaveProperty("saveType");
    expect(res.body.singleItem).toHaveProperty("userId");
  });
});

// Test collection deletion
describe("DELETE /collection/:id", () => {
  // Test collection successful deletion
  it("should delete a collection", async () => {
    const user = await createUser(agent);
    const collection = await agent
      .post("/user/collection")
      .set("Authorization", `Bearer ${user.body.token}`)
      .send({
        mediaId: "1",
        title: "Interstellar",
        mediaType: "movie",
        saveType: "like",
        userId: user.body.userId,
      });
    const res = await agent
      .delete(`/user/collection/${collection.body.singleItem._id}`)
      .set("Authorization", `Bearer ${user.body.token}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("singleItem");
    expect(res.body.singleItem).toHaveProperty("mediaId");
    expect(res.body.singleItem).toHaveProperty("title");
    expect(res.body.singleItem).toHaveProperty("mediaType");
    expect(res.body.singleItem).toHaveProperty("saveType");
    expect(res.body.singleItem).toHaveProperty("userId");
  });

  // Test collection deletion with invalid id
  it("should return 404 if collection is invalid", async () => {
    const user = await createUser(agent);
    const res = await agent
      .delete("/user/collection/1")
      .set("Authorization", `Bearer ${user.body.token}`);
    expect(res.statusCode).toEqual(404);
    expect(res.body).toHaveProperty("error");
  });

  // Unauthorized user
  it("should return 401 if user is not authorized", async () => {
    const res = await agent.delete("/user/collection/1");
    expect(res.statusCode).toEqual(401);
    expect(res.body).toHaveProperty("error");
  });
});

// Test all collection
describe("GET /collection", () => {
  // Test all collection
  it("should return all collection", async () => {
    const user = await createUser(agent);
    await agent
      .post("/user/collection")
      .set("Authorization", `Bearer ${user.body.token}`)
      .send({
        mediaId: "1",
        title: "Interstellar",
        mediaType: "movie",
        saveType: "like",
        userId: user.body.userId,
      });
    const res = await agent
      .get("/user/collection")
      .set("Authorization", `Bearer ${user.body.token}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("collection");
  });

  // Unauthorized user
  it("should return 401 if user is not authorized", async () => {
    const res = await agent.get("/user/collection");
    expect(res.statusCode).toEqual(401);
    expect(res.body).toHaveProperty("error");
  });
});
