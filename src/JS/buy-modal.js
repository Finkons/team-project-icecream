(() => {
    const refs = {
    openModalBtnMob: document.querySelector('[data-order-open-mob]'),
    openModalBtn: document.querySelector('[data-order-open]'),
    closeModalBtn: document.querySelector('[data-order-close]'),
    modal: document.querySelector('[data-order-data]'),
  };

    refs.openModalBtnMob.addEventListener('click', toggleModal);
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
      refs.modal.classList.toggle('backdrop--hidden');
      document.body.classList.toggle('no-scroll');
  }
})();