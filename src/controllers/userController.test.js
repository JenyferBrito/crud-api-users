const getAllFunction = require('../controllers/userController'); // Renomeia a importação
test('Deve verificar se a função getAll é definida', () => {
    expect(typeof getAllFunction).toBe('function'); 
});