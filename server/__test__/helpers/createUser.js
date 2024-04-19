const createUser = async (agent) => {
  const res = await agent.post("/authorization/register").send({
    firstName: "Kunal",
    email: "kunal@test.com",
    password: "test@123",
  });

  return res;
};

module.exports = { createUser };
