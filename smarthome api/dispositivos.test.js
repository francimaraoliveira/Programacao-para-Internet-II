const DispositivosService = require('../services/dispositivosService');

test('Criar Dispositivo', async () => {
  const novoDispositivo = await DispositivosService.criarDispositivo({
    descricao: 'Lâmpada',
    online: true,
    ligado: false,
    ambiente: 'id_do_ambiente', // Adapte com um ID válido de um Ambiente existente
    ultimaComunicacao: new Date(),
  });

  expect(novoDispositivo.descricao).toBe('Lâmpada');
});
