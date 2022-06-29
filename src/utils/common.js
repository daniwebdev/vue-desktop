export function searchToggleSuggestion() {
  
  console.log("searchToggleSuggestion");

  document
    .querySelector(".search-panel input")
    .addEventListener("keyup", function (e) {
      var is_suggestion_active = document
        .querySelector(".search-suggestion")
        .classList.contains("active");
      if (e.keyCode === 13) {
        //enter key
        // this.search();
      }

      if (is_suggestion_active) {
        //suggestion is active
      } else {
        //show suggestion
        document.querySelector(".search-suggestion").classList.add("active");
      }
    });

  //mounse over input search
  document
    .querySelector(".search-panel input")
    .addEventListener("change", function () {
      document.querySelector(".search-suggestion").classList.remove("active");
    });
}

/* 
Initialize context menu (rightclick)
*/
export const destroyContextMenu = () => {

}
export const initContextMenu = (targetElement='main .context', contextSelector='.context-menu', callbackOnClick=undefined) => {
  /* helper */
  let hideContextMenu = (e) => {

   
    if (e.target.classList.contains("context") || document.querySelector(contextSelector) == null) {
      return false;
    }

    document.querySelector(contextSelector).style.left = "-9999px";
    document.querySelector(contextSelector).style.top = "-9999px";

    return true;
  };

  document.documentElement.addEventListener("click", hideContextMenu);


  document.querySelectorAll(targetElement).forEach((el) => {

    /* add event (rightclick) every element */
    el.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      var data = null;

      if (!hideContextMenu(e)) {
        return;
      }

      try {
        data = JSON.parse(el.getAttribute("data"));
      } catch (e) {
        data = el.getAttribute("data");
      }
      
      console.log(data, 'common.js');

      window.context_data = data;

      if(callbackOnClick != undefined) {
        callbackOnClick(data);
      }

      // console.log(e.clientX, e.clientY)
      var menuContainer = document.querySelector(contextSelector);

      // console.log(menuContainer.clientHeight, menuContainer.clientWidth)

      if(((innerWidth - e.clientX) < menuContainer.clientWidth)) {
        // alert('dfasd');
        document.querySelector(contextSelector).style.left = e.clientX - 200 + "px";
      } else {
        document.querySelector(contextSelector).style.left = e.clientX - 60 + "px";
      }
      document.querySelector(contextSelector).style.top = ((innerHeight - e.clientY) < (menuContainer.clientHeight + 40) ? e.clientY - (menuContainer.clientHeight + 40) : e.clientY - 40) + "px";
    });
  });

};


/*
  function for init file upload component
*/
export const initFileUpload = (container=null) => {
  
  container.querySelectorAll(".form-file").forEach(el => {
    el.addEventListener("click", () => {
      // this.querySelector('input[type="file"]').click();
      // let _target = e.target;
      let _target = el;
      console.log(_target.classList);
      _target.querySelector('input[type="file"]').click();

      _target.querySelector('input[type="file"]').addEventListener("change", function (eF) {
          // console.log(eF.target.files);
          let file_url = URL.createObjectURL(eF.target.files[0]);

          _target.style.backgroundImage = `url(${file_url})`;
          _target.style.backgroundSize = "cover";
        });
    });
  })
}
