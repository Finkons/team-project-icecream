(() => {
  const refs = {
    openModalBtn: document.querySelector('[readmore-modal-open]'),
    closeModalBtn: document.querySelector('[readmore-modal-close]'),
    modal: document.querySelector('[readmore-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
      document.body.classList.toggle('no-scroll');
  }
})();