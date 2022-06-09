(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-readmore-open]'),
    closeModalBtn: document.querySelector('[data-readmore-close]'),
    modal: document.querySelector('[data-readmore]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
      document.body.classList.toggle('no-scroll');
  }
})();