document.addEventListener("click",function (e){
    if(e.target.classList.contains("w-100 shadow-1-strong rounded mb-sm-3")){
          const src = e.target.getAttribute("src");
          document.querySelector(".modal-img").src = src;
          const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
          myModal.show();
    }
  })