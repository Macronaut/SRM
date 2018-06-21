angular.module('gestao-app', []).controller("gestao-app-controller", function($scope) {
  $scope.arrSidebar = [
      { isActive: true, text: 'Painel de Gestão', icon: '' },
      { text: 'Ant. de Recebíveis', icon: '' },
      { text: 'Conta Digital', icon: '' }
  ]
});
