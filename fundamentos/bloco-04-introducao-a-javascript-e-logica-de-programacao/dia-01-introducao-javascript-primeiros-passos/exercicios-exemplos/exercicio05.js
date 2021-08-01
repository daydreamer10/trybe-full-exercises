let estadoTesteJs = 'aprovado'

switch (estadoTesteJs) {
  case 'aprovado':
    console.log('Você está aprovado(a)!!!');
    break;

  case 'lista':
    console.log('Você está  na lista de Espera!!!!');
    break;

  case 'reprovado':
    console.log('Você está reprovado(a)!!!');
    break;

  default:
    console.log('Não se aplica!!!');
};
