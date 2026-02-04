document.addEventListener("DOMContentLoaded", function () {
  const discountRow = document.getElementById('discount-row');
  const toastEl = document.getElementById('liveToast');
  if (!discountRow || !toastEl) return;

  const productEl = document.getElementById('product');
  const titleEl = document.getElementById('discountTitle');
  const codeEl = document.getElementById('discountCode');

  const toastInstance = bootstrap.Toast.getOrCreateInstance(toastEl, {
    autohide: false
  });

  discountRow.addEventListener('click', function (e) {
    const link = e.target.closest('a.discount');
    if (!link) return;

    e.preventDefault();

    productEl.textContent = link.dataset.product ?? 'Product';
    titleEl.textContent = link.dataset.title ?? 'Discount!';
    codeEl.textContent = `Discount Code: ${link.dataset.discountCode ?? ''}`;

    toastInstance.show();
  });

  document.addEventListener('keydown', function (ev) {
    if (ev.key === "Escape") {
      toastInstance.hide();
    }
  });
});