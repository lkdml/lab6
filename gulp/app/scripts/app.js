angular.module('starter.controllers')

.controller('CancelarCtrl', function($scope, DataBachi, $ionicHistory, $state, Storage,$cordovaToast) {

  $scope.data = {};
  $scope.data.rating = {};
  $scope.data.rating.rate = 0;
  $scope.data.rating.max = 3;
  $scope.cancelarSolicitud = cancelarSolicitud;

  function validar () {
    var toastMsj;
    if (!$scope.data.motivoSelected){
      toastMsj = 'Complete Motivo';
    } else if (!$scope.data.rating.rate){
      toastMsj = "Califique al dador"
    }
    else{
      return true;
    }



    try {
      $cordovaToast
        .show(toastMsj, 'long', 'center');
    } catch (e) {
      console.log("Toast solo funciona en dispositivo movil", toastMsj);
    } finally {

    }
    return false;
  }
  function cancelarSolicitud(){
    if (!validar())return;

    $ionicHistory.nextViewOptions({
      // disableAnimate: true,
      disableBack: true
    });
    $ionicHistory.clearHistory();
    // borrar views y viaje en  localStorage
    Storage.setView("0");

    $state.go('app.viajes');

  }

});
