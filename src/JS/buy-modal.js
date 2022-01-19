(() => {
    const refs = {
    openModalBtnMob: document.querySelector('[order-open-mob]'),
    openModalBtn: document.querySelector('[order-open]'),
    closeModalBtn: document.querySelector('[order-close]'),
    modal: document.querySelector('[order-data]'),
  };

    refs.openModalBtnMob.addEventListener('click', toggleModal);
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
      refs.modal.classList.toggle('backdrop--hidden');
      document.body.classList.toggle('no-scroll');
  }
})();