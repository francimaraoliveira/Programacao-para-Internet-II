const AmbientesService = require('../services/ambientesService');

test('Criar Ambiente', async () => {
  const novoAmbiente = await AmbientesService.criarAmbiente({
    descricao: 'Sala de Estar',
    cor: 'Azul',
    local: 'id_do_local', // Adapte com um ID válido de um Local existente
  });

  expect(novoAmbiente.descricao).toBe('Sala de Estar');
});
