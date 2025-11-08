// Mocka o userService para controlarmos o que ele retorna
const userService = require('../services/userService');
jest.mock('../services/userService');

const userController = require('../controllers/userController');

describe('userController.getAll', () => {
 
  let req;
  let res;

  beforeEach(() => {
  
    res = {
      status: jest.fn().mockReturnThis(), // Permite encadear .status().json()
      json: jest.fn(),
    };
    req = {}; // A requisição (req) não precisa de nada para este teste
    // Limpa os mocks antes de cada novo teste
    jest.clearAllMocks(); 
  });

  // --- Teste 1: Caminho de Sucesso (Cobre as Linhas de Sucesso) ---
  test('Deve retornar status 200 e a lista de usuários', async () => {
    // Dados de usuários que o serviço SIMULADO vai retornar
    const mockUsers = [{ id: 1, name: 'João' }];
    
    // Configura o mock do serviço para retornar o sucesso
    userService.getAllUsers.mockResolvedValue(mockUsers);
    
    // Chama a função a ser testada
    await userController.getAll(req, res);

    // Verifica se o status 200 foi chamado
    expect(res.status).toHaveBeenCalledWith(200);
    // Verifica se o corpo JSON correto foi retornado
    expect(res.json).toHaveBeenCalledWith(mockUsers);
  });
  
  
  test('Deve retornar status 500 em caso de erro no serviço', async () => {
    const error = new Error('Erro de conexão com o banco');
    
    // Configura o mock do serviço para REJEITAR (simular erro)
    userService.getAllUsers.mockRejectedValue(error);
    
    // Chama a função a ser testada
    await userController.getAll(req, res);

    // Verifica se o status 500 foi chamado
    expect(res.status).toHaveBeenCalledWith(500);
    // Verifica se a mensagem de erro foi retornada
    expect(res.json).toHaveBeenCalledWith({ message: 'Erro ao buscar usuários.' });
  });
});