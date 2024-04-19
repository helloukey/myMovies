const request = require("supertest");
const app = require("../../app");
const db = require("../db");

// Pass supertest agent for each test
const agent = request.agent(app);

// Setup connection to the database
beforeAll(async () => await db.connect());
beforeEach(async () => await db.clear());
afterAll(async () => await db.close());

// Test the trending route
describe("GET /trending/:type", () => {
  it("should return 200 OK (movie)", async () => {
    const res = await agent.get("/api/trending/movie");
    expect(res.status).toBe(200);
  });
  it("should return 200 OK (show)", async () => {
    const res = await agent.get("/api/trending/tv");
    expect(res.status).toBe(200);
  });
  it("should return 500", async () => {
    const res = await agent.get("/api/trending/invalid");
    expect(res.status).toBe(500);
  });
});

// Test the single trending movie route
describe("GET /trending/movie/:id", () => {
  it("should return 200 OK", async () => {
    const res = await agent.get("/api/trending/movie/157336");
    expect(res.status).toBe(200);
  });
  it("should return 500", async () => {
    const res = await agent.get("/api/trending/movie/invalid");
    expect(res.status).toBe(500);
  });
});

// Test the single trending show route
describe("GET /trending/show/:id", () => {
  it("should return 200 OK", async () => {
    const res = await agent.get("/api/trending/show/1396");
    expect(res.status).toBe(200);
  });
  it("should return 500", async () => {
    const res = await agent.get("/api/trending/show/invalid");
    expect(res.status).toBe(500);
  });
});

// Test the movie list route
describe("GET /list/movie/:type", () => {
  it("should return 200 OK (popular)", async () => {
    const res = await agent.get("/api/list/movie/popular");
    expect(res.status).toBe(200);
  });
  it("should return 200 OK (now-playing)", async () => {
    const res = await agent.get("/api/list/movie/now_playing");
    expect(res.status).toBe(200);
  });
  it("should return 200 OK (top-rated)", async () => {
    const res = await agent.get("/api/list/movie/top_rated");
    expect(res.status).toBe(200);
  });
  it("should return 200 OK (upcoming)", async () => {
    const res = await agent.get("/api/list/movie/upcoming");
    expect(res.status).toBe(200);
  });
  it("should return 500", async () => {
    const res = await agent.get("/api/list/movie/invalid");
    expect(res.status).toBe(500);
  });
});

// Test the show list route
describe("GET /list/show/:type", () => {
  it("should return 200 OK (popular)", async () => {
    const res = await agent.get("/api/list/show/popular");
    expect(res.status).toBe(200);
  });
  it("should return 200 OK (airing-today)", async () => {
    const res = await agent.get("/api/list/show/airing_today");
    expect(res.status).toBe(200);
  });
  it("should return 200 OK (top-rated)", async () => {
    const res = await agent.get("/api/list/show/top_rated");
    expect(res.status).toBe(200);
  });
  it("should return 200 OK (on-the-air)", async () => {
    const res = await agent.get("/api/list/show/on_the_air");
    expect(res.status).toBe(200);
  });
  it("should return 500", async () => {
    const res = await agent.get("/api/list/show/invalid");
    expect(res.status).toBe(500);
  });
});

// Test the movie trending page route
describe("GET /trending/movie/page/:page", () => {
  it("should return 200 OK", async () => {
    const res = await agent.get("/api/trending/movie/page/1");
    expect(res.status).toBe(200);
  });
  it("should return 500", async () => {
    const res = await agent.get("/api/trending/movie/page/0");
    expect(res.status).toBe(500);
  });
});

// Test the movie now playing page route
describe("GET /movie/nowplaying/:page", () => {
  it("should return 200 OK", async () => {
    const res = await agent.get("/api/movie/nowplaying/1");
    expect(res.status).toBe(200);
  });
  it("should return 500", async () => {
    const res = await agent.get("/api/movie/nowplaying/0");
    expect(res.status).toBe(500);
  });
});

// Test the movie popular page route
describe("GET /movie/popular/:page", () => {
  it("should return 200 OK", async () => {
    const res = await agent.get("/api/movie/popular/1");
    expect(res.status).toBe(200);
  });
  it("should return 500", async () => {
    const res = await agent.get("/api/movie/popular/0");
    expect(res.status).toBe(500);
  });
});

// Test the movie top-rated page route
describe("GET /movie/toprated/:page", () => {
  it("should return 200 OK", async () => {
    const res = await agent.get("/api/movie/toprated/1");
    expect(res.status).toBe(200);
  });
  it("should return 500", async () => {
    const res = await agent.get("/api/movie/toprated/0");
    expect(res.status).toBe(500);
  });
});

// Test the movie upcoming page route
describe("GET /movie/upcoming/:page", () => {
  it("should return 200 OK", async () => {
    const res = await agent.get("/api/movie/upcoming/1");
    expect(res.status).toBe(200);
  });
  it("should return 500", async () => {
    const res = await agent.get("/api/movie/upcoming/0");
    expect(res.status).toBe(500);
  });
});

// Test the movie details page route
describe("GET /details/movie/:id", () => {
  it("should return 200 OK", async () => {
    const res = await agent.get("/api/details/movie/157336");
    expect(res.status).toBe(200);
  });
  it("should return 500", async () => {
    const res = await agent.get("/api/details/movie/invalid");
    expect(res.status).toBe(500);
  });
});

// Test the movie genre page route
describe("GET /movie/genre/:genre/:page", () => {
  it("should return 200 OK (action - 28)", async () => {
    const res = await agent.get("/api/movie/genre/28/1");
    expect(res.status).toBe(200);
    expect(res.body.results.length).toBeGreaterThan(0);
  });
  it("should return 200 OK (adventure - 12)", async () => {
    const res = await agent.get("/api/movie/genre/12/1");
    expect(res.status).toBe(200);
    expect(res.body.results.length).toBeGreaterThan(0);
  });
  it("should return 200 OK (animation - 16)", async () => {
    const res = await agent.get("/api/movie/genre/16/1");
    expect(res.status).toBe(200);
    expect(res.body.results.length).toBeGreaterThan(0);
  });
  it("should return 200 OK (comedy - 35)", async () => {
    const res = await agent.get("/api/movie/genre/35/1");
    expect(res.status).toBe(200);
    expect(res.body.results.length).toBeGreaterThan(0);
  });
  it("should return 200 OK (crime - 80)", async () => {
    const res = await agent.get("/api/movie/genre/80/1");
    expect(res.status).toBe(200);
    expect(res.body.results.length).toBeGreaterThan(0);
  });
  it("should return 200 OK (documentary - 99)", async () => {
    const res = await agent.get("/api/movie/genre/99/1");
    expect(res.status).toBe(200);
    expect(res.body.results.length).toBeGreaterThan(0);
  });
  it("should return 200 OK (drama - 18)", async () => {
    const res = await agent.get("/api/movie/genre/18/1");
    expect(res.status).toBe(200);
    expect(res.body.results.length).toBeGreaterThan(0);
  });
  it("should return 200 OK (family - 10751)", async () => {
    const res = await agent.get("/api/movie/genre/10751/1");
    expect(res.status).toBe(200);
    expect(res.body.results.length).toBeGreaterThan(0);
  });
  it("should return 200 OK (fantasy - 14)", async () => {
    const res = await agent.get("/api/movie/genre/14/1");
    expect(res.status).toBe(200);
    expect(res.body.results.length).toBeGreaterThan(0);
  });
  it("should return 200 OK (history - 36)", async () => {
    const res = await agent.get("/api/movie/genre/36/1");
    expect(res.status).toBe(200);
    expect(res.body.results.length).toBeGreaterThan(0);
  });
  it("should return 200 OK (horror - 27)", async () => {
    const res = await agent.get("/api/movie/genre/27/1");
    expect(res.status).toBe(200);
    expect(res.body.results.length).toBeGreaterThan(0);
  });
  it("should return 200 OK (music - 10402)", async () => {
    const res = await agent.get("/api/movie/genre/10402/1");
    expect(res.status).toBe(200);
    expect(res.body.results.length).toBeGreaterThan(0);
  });
  it("should return 200 OK (mystery - 9648)", async () => {
    const res = await agent.get("/api/movie/genre/9648/1");
    expect(res.status).toBe(200);
    expect(res.body.results.length).toBeGreaterThan(0);
  });
  it("should return 200 OK (romance - 10749)", async () => {
    const res = await agent.get("/api/movie/genre/10749/1");
    expect(res.status).toBe(200);
    expect(res.body.results.length).toBeGreaterThan(0);
  });
  it("should return 200 OK (science-fiction - 878)", async () => {
    const res = await agent.get("/api/movie/genre/878/1");
    expect(res.status).toBe(200);
    expect(res.body.results.length).toBeGreaterThan(0);
  });
  it("should return 200 OK (thriller - 53)", async () => {
    const res = await agent.get("/api/movie/genre/53/1");
    expect(res.status).toBe(200);
    expect(res.body.results.length).toBeGreaterThan(0);
  });
  it("should return 200 OK (tv movie - 10770)", async () => {
    const res = await agent.get("/api/movie/genre/10770/1");
    expect(res.status).toBe(200);
    expect(res.body.results.length).toBeGreaterThan(0);
  });
  it("should return 200 OK (war - 10752)", async () => {
    const res = await agent.get("/api/movie/genre/10752/1");
    expect(res.status).toBe(200);
    expect(res.body.results.length).toBeGreaterThan(0);
  });
  it("should return 200 OK (western - 37)", async () => {
    const res = await agent.get("/api/movie/genre/37/1");
    expect(res.status).toBe(200);
    expect(res.body.results.length).toBeGreaterThan(0);
  });
  it("should return 500 (invalid page)", async () => {
    const res = await agent.get("/api/movie/genre/invalid/0");
    expect(res.status).toBe(500);
  });
});

// Test the show trending page route
describe("GET /trending/show/page/:page", () => {
  it("should return 200 OK", async () => {
    const res = await agent.get("/api/trending/show/page/1");
    expect(res.status).toBe(200);
  });
  it("should return 500", async () => {
    const res = await agent.get("/api/trending/show/page/0");
    expect(res.status).toBe(500);
  });
});

// Test the show airing today page route
describe("GET /show/airingtoday/:page", () => {
  it("should return 200 OK", async () => {
    const res = await agent.get("/api/show/airingtoday/1");
    expect(res.status).toBe(200);
  });
  it("should return 500", async () => {
    const res = await agent.get("/api/show/airingtoday/0");
    expect(res.status).toBe(500);
  });
});

// Test the show popular page route
describe("GET /show/popular/:page", () => {
  it("should return 200 OK", async () => {
    const res = await agent.get("/api/show/popular/1");
    expect(res.status).toBe(200);
  });
  it("should return 500", async () => {
    const res = await agent.get("/api/show/popular/0");
    expect(res.status).toBe(500);
  });
});

// Test the show top-rated page route
describe("GET /show/toprated/:page", () => {
  it("should return 200 OK", async () => {
    const res = await agent.get("/api/show/toprated/1");
    expect(res.status).toBe(200);
  });
  it("should return 500", async () => {
    const res = await agent.get("/api/show/toprated/0");
    expect(res.status).toBe(500);
  });
});

// Test the show on the air page route
describe("GET /show/ontheair/:page", () => {
  it("should return 200 OK", async () => {
    const res = await agent.get("/api/show/ontheair/1");
    expect(res.status).toBe(200);
  });
  it("should return 500", async () => {
    const res = await agent.get("/api/show/ontheair/0");
    expect(res.status).toBe(500);
  });
});

// Test the show details page route
describe("GET /details/show/:id", () => {
  it("should return 200 OK", async () => {
    const res = await agent.get("/api/details/show/1396");
    expect(res.status).toBe(200);
  });
  it("should return 500", async () => {
    const res = await agent.get("/api/details/show/invalid");
    expect(res.status).toBe(500);
  });
});

// Test the show episodes page route
describe("GET /episodes/show/:id/:seasonnumber", () => {
  it("should return 200 OK", async () => {
    const res = await agent.get("/api/episodes/show/1396/1");
    expect(res.status).toBe(200);
  });
  it("should return 500", async () => {
    const res = await agent.get("/api/episodes/show/invalid/0");
    expect(res.status).toBe(500);
  });
});

// Test the show genre page route
describe("GET /show/genre/:genre/:page", () => {
  it("should return 200 OK (action - 28)", async () => {
    const res = await agent.get("/api/show/genre/28/1");
    expect(res.status).toBe(200);
    expect(res.body.results.length).toBeGreaterThan(0);
  });
  it("should return 200 OK (adventure - 12)", async () => {
    const res = await agent.get("/api/show/genre/12/1");
    expect(res.status).toBe(200);
    expect(res.body.results.length).toBeGreaterThan(0);
  });
  it("should return 200 OK (animation - 16)", async () => {
    const res = await agent.get("/api/show/genre/16/1");
    expect(res.status).toBe(200);
    expect(res.body.results.length).toBeGreaterThan(0);
  });
  it("should return 200 OK (comedy - 35)", async () => {
    const res = await agent.get("/api/show/genre/35/1");
    expect(res.status).toBe(200);
    expect(res.body.results.length).toBeGreaterThan(0);
  });
  it("should return 200 OK (crime - 80)", async () => {
    const res = await agent.get("/api/show/genre/80/1");
    expect(res.status).toBe(200);
    expect(res.body.results.length).toBeGreaterThan(0);
  });
  it("should return 200 OK (documentary - 99)", async () => {
    const res = await agent.get("/api/show/genre/99/1");
    expect(res.status).toBe(200);
    expect(res.body.results.length).toBeGreaterThan(0);
  });
  it("should return 200 OK (drama - 18)", async () => {
    const res = await agent.get("/api/show/genre/18/1");
    expect(res.status).toBe(200);
    expect(res.body.results.length).toBeGreaterThan(0);
  });
  it("should return 200 OK (family - 10751)", async () => {
    const res = await agent.get("/api/show/genre/10751/1");
    expect(res.status).toBe(200);
    expect(res.body.results.length).toBeGreaterThan(0);
  });
  it("should return 200 OK (kids - 10762)", async () => {
    const res = await agent.get("/api/show/genre/10762/1");
    expect(res.status).toBe(200);
    expect(res.body.results.length).toBeGreaterThan(0);
  });
  it("should return 200 OK (mystery - 9648)", async () => {
    const res = await agent.get("/api/show/genre/9648/1");
    expect(res.status).toBe(200);
    expect(res.body.results.length).toBeGreaterThan(0);
  });
  it("should return 200 OK (news - 10763)", async () => {
    const res = await agent.get("/api/show/genre/10763/1");
    expect(res.status).toBe(200);
    expect(res.body.results.length).toBeGreaterThan(0);
  });
  it("should return 200 OK (reality - 10764)", async () => {
    const res = await agent.get("/api/show/genre/10764/1");
    expect(res.status).toBe(200);
    expect(res.body.results.length).toBeGreaterThan(0);
  });
  it("should return 200 OK (scifi - 10765)", async () => {
    const res = await agent.get("/api/show/genre/10765/1");
    expect(res.status).toBe(200);
    expect(res.body.results.length).toBeGreaterThan(0);
  });
  it("should return 200 OK (soap - 10766)", async () => {
    const res = await agent.get("/api/show/genre/10766/1");
    expect(res.status).toBe(200);
    expect(res.body.results.length).toBeGreaterThan(0);
  });
  it("should return 200 OK (talk - 10767)", async () => {
    const res = await agent.get("/api/show/genre/10767/1");
    expect(res.status).toBe(200);
    expect(res.body.results.length).toBeGreaterThan(0);
  });
  it("should return 200 OK (war - 10768)", async () => {
    const res = await agent.get("/api/show/genre/10768/1");
    expect(res.status).toBe(200);
    expect(res.body.results.length).toBeGreaterThan(0);
  });
  it("should return 200 OK (western - 37)", async () => {
    const res = await agent.get("/api/show/genre/37/1");
    expect(res.status).toBe(200);
    expect(res.body.results.length).toBeGreaterThan(0);
  });
  it("should return 500 (invalid page)", async () => {
    const res = await agent.get("/api/show/genre/invalid/0");
    expect(res.status).toBe(500);
  });
});

// Test the person details page route
describe("GET /person/:id", () => {
  it("should return 200 OK", async () => {
    const res = await agent.get("/api/person/380");
    expect(res.status).toBe(200);
  });
  it("should return 500", async () => {
    const res = await agent.get("/api/person/invalid");
    expect(res.status).toBe(500);
  });
});

// Test the search route
describe("GET /search/:query/:page", () => {
  it("should return 200 OK", async () => {
    const res = await agent.get("/api/search/breaking%20bad/1");
    expect(res.status).toBe(200);
  });
  it("should return 500", async () => {
    const res = await agent.get("/api/search/invalid/0");
    expect(res.status).toBe(500);
  });
});
