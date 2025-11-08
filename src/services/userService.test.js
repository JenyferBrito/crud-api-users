const userService = require('./userService');

test('Deve retornar lista de usuários', async () => {
  const result = await userService.getAllUsers();
  expect(Array.isArray(result)).toBe(true);
});
