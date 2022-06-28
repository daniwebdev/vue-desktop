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

export const initContextMenu = () => {
  let hideContextMenu = (e) => {
    if (e.target.classList.contains("context")) {
      return false;
    }
    document.querySelector(".context-menu").style.left = "-9999px";
    document.querySelector(".context-menu").style.top = "-9999px";

    return true;
  };

  document.querySelectorAll("main .context").forEach((el) => {
    el.addEventListener("contextmenu", (e) => {
      e.preventDefault();

      if (!hideContextMenu(e)) {
        return;
      }
      var data = null;

      try {
        data = JSON.parse(el.getAttribute("data"));
      } catch (e) {
        data = el.getAttribute("data");
      }
      // let data = e.target.getAttribute('data');
      console.log(data);
      window.context_data = data;
      // console.log("Coordinate(X) = " + e.clientX + "<br>Coordinate(Y) = " + e.clientY);

      // console.log(innerHeight - e.clientY)
      if(((innerWidth - e.clientX) < 165)) {
        document.querySelector(".context-menu").style.left = e.clientX - 200 + "px";
      } else {
        document.querySelector(".context-menu").style.left = e.clientX - 60 + "px";
      }
      document.querySelector(".context-menu").style.top = ((innerHeight - e.clientY) < 160 ? e.clientY - 160:e.clientY - 40) + "px";
    });
  });

  document.documentElement.addEventListener("click", hideContextMenu);
};


/*
  functino for init file upload component
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
