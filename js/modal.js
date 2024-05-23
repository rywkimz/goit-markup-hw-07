document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('[data-modal]');
  const openModalBtn = document.querySelector('[data-modal-open]');
  const closeModalBtn = document.querySelector('[data-modal-close]');

  const openModal = () => {
    modal.classList.remove('is-hidden');
  };

  const closeModal = () => {
    modal.classList.add('is-hidden');
  };

  openModalBtn.addEventListener('click', openModal);
  closeModalBtn.addEventListener('click', closeModal);

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
});
