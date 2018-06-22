angular.module('gestao-app', []).controller("gestao-app-controller", function($scope) {
  $scope.arrSidebar = [{ isFilter: true, text: 'Pesquise Aqui', icon: 'lupa' },
      { isActive: true, text: 'Painel de Gestão', icon: 'globo' },
      { text: 'Ant. de Recebíveis', icon: 'arroba' },
      { text: 'Conta Digital', icon: 'refresh', after: 'seta-dupla' }]
  $scope.arrShortcuts = {operacional: ['Envio', 'Envio de Duplicatas', 'Nova Operação', 'Assinatura', 'Assinatura Digital'],
    geral: ['Carteira', 'Instruções']}
    $scope.arrAlerts = [{ text: '23 Notas Canceladas' },
    { text: '13 Notas Canceladas', isAction: true },
    { text: '7 Assinaturas Digital', isAction: true }]
});
