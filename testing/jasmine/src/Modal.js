function Modal() {
}
var modal = document.getElementById('Modal');
Modal.prototype.open = function(modal) {
  this.currentModal = modal;
  this.isOpen = true;
};
