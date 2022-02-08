// Bootstrap Docs / Components / Tooltips https://getbootstrap.com/docs/5.0/components/tooltips/

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// Bootstrap Docs / Components / Toasts https://getbootstrap.com/docs/5.0/components/toasts/

var toastElList = [].slice.call(document.querySelectorAll('.toast'))
var toastList = toastElList.map(function (toastEl) {
  return new bootstrap.Toast(toastEl)
})

const BUTTON = document.getElementById('button');
const TOAST = document.getElementById('toast');

BUTTON.addEventListener('click', function () {
  var a = new bootstrap.Toast(TOAST);
  a.show();
});
