

function openSlideMenu() {
    document.getElementById('side-menu').style.width = '250px';
}

function closeSlideMenu() {
    document.getElementById('side-menu').style.width = '0';
}



  const modal = document.querySelector('#my-modal');
  const modalBtn = document.querySelector('#modal-btn');
  const closeBtn = document.querySelector('.close');
    
    // Events
    modalBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', outsideClick);
    
    // Open
    function openModal() {
      modal.style.display = 'block';
    }
    
    // Close
    function closeModal() {
      modal.style.display = 'none';
    }
    
    // Close If Outside Click
    function outsideClick(e) {
      if (e.target == modal) {
        modal.style.display = 'none';
      }
  }

  var container = document.getElementById("image-container");
            function change_img(image) {
                container.src = image.src;
            } 