var modal = document.getElementById('Modal');

function Modal(modal) {
}

Modal.prototype.open = function(modal) {
  this.currentModal = modal;
  this.isOpen = true;
};
