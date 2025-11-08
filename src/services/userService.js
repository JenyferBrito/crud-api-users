const userModel = {
  // Função que simula a busca de todos os usuários no banco
  async findAll() {
  
    return [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' },
    ];
  }
};

const userService = {
  // A função que o Controller chama e que o seu teste está verificando
  async getAllUsers() {
    
    const users = await userModel.findAll();
   
    return users; 
  }
};

module.exports = userService;