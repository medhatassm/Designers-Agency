// * Image With Effect //

//Effect Image
window.onload = () => {
  setTimeout(() => {
    document.querySelector(".image3D").style.transform = "scale3d(7 , 7 , 1)";
  }, 2000);
  setTimeout(() => {
    document.querySelector(".image3D").style.display = "none";
    document.body.style.setProperty("overflow", "auto");
  }, 2500);
};

//===================================================================================================================

// * Landing Page Customize //  // * Skills Progress Bar //

//Select Skill Selector
let ourSkills = document.querySelector(".skills");

//Header Color Swipe
window.onscroll = () => {
  // console.log(window.pageYOffset);
  if (window.scrollY > 40) {
    document.querySelector(".header_area").classList.add("header_area_color");
    document.querySelector(".setting_box").style.backgroundColor = "#232323";
    document.querySelector(".setting_box .setting_icon").style.backgroundColor =
      "#232323";
  } else {
    document
      .querySelector(".header_area")
      .classList.remove("header_area_color");
    document.querySelector(".setting_box").style.backgroundColor =
      "rgba(0, 0, 0, 0.5)";
    document.querySelector(".setting_box .setting_icon").style.backgroundColor =
      "rgba(0, 0, 0, 0.5)";
  }

  // // Skills Offset Top
  // let skillsOffsetTop = ourSkills.offsetTop;

  // // Outer Height
  // let skillsOuterHeight = ourSkills.offsetHeight;

  // // Windows Height
  // let windowHeight = this.innerHeight;

  // Windows Scroll Top
  let windowScrollTop = this.scrollY;

  // console.log(windowScrollTop);

  if (windowScrollTop > 600) {
    let allSkills = document.querySelectorAll(
      ".skill_box .skill_progress span"
    );
    allSkills.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  }
};

//Toggle Spin Class on Icon
let icon = document.querySelector(".setting_icon i");
icon.addEventListener("click", () => {
  icon.classList.toggle("fa-spin");
  document.querySelector(".setting_box").classList.toggle("display");
});
//Select Landing Page Element
let landing_page = document.querySelector(".landing_page");

//===================================================================================================================

// * Option Slide Customize //

// Check if there is local sotrage color option
let mainColor = localStorage.getItem("color_option");

if (mainColor != null) {
  // Local Storage color_option not null
  document.documentElement.style.setProperty("--main-color", mainColor);

  //Remove Active class from all children
  document.querySelectorAll(".colors_list li").forEach((li) => {
    li.classList.remove("active");

    //Add Active Class
    if (li.dataset.color === mainColor) {
      li.classList.add("active");
    }
  });
}

//Switch Colors
const colorsLi = document.querySelectorAll(".colors_list li");
//Loop For Every Li
colorsLi.forEach((li) => {
  //Click on Every Li
  li.addEventListener("click", (e) => {
    //Set Color On Root
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );

    //Set Color on local Storage
    localStorage.setItem("color_option", e.target.dataset.color);

    //Remove Active class from all children
    e.target.parentElement.querySelectorAll(".active").forEach((li) => {
      li.classList.remove("active");
    });

    e.target.classList.add("active");
  });
});

//===================================================================================================================

// * Stop The Video //

let video = document.querySelector("video");

let stopeCheckBox = document.querySelector("#SVideo");
if (localStorage.getItem("video_status") != null) {
  let statues = localStorage.getItem("video_status");
  if (statues === "true") {
    stopeCheckBox.click();
    video.play();
  } else {
    video.pause();
  }
} else {
  stopeCheckBox.click();
}

stopeCheckBox.addEventListener("click", () => {
  stopeCheckBox.checked === false ? video.pause() : video.play();
  localStorage.setItem("video_status", stopeCheckBox.checked);
});

//===================================================================================================================

// * Hide & Show Bullet //

let navBullets = document.querySelector(".nav_bullets");
let hideBulletBtn = document.querySelector("#Bullet");

if (localStorage.getItem("bullet_status") != null) {
  let navStatues = localStorage.getItem("bullet_status");
  if (navStatues === "true") {
    hideBulletBtn.click();
    navBullets.style.display = "block";
  } else {
    navBullets.style.display = "none";
  }
} else {
  hideBulletBtn.click();
}

hideBulletBtn.addEventListener("click", () => {
  hideBulletBtn.checked === false
    ? (navBullets.style.display = "none")
    : (navBullets.style.display = "block");
  localStorage.setItem("bullet_status", hideBulletBtn.checked);
});

//===================================================================================================================

// * Create PopUp With Image //
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach((img) => {
  img.addEventListener("click", () => {
    //Create Overlay Element
    let overlay = document.createElement("div");

    //Add Class To Overlay
    overlay.className = "popup_overlay";

    //Append Overlay To The Body
    document.body.appendChild(overlay);

    //Create The Popup
    let popupBox = document.createElement("div");

    // Add Class to The Popup Box
    popupBox.className = "popup_box";

    // Crete The Close Span
    let closeButton = document.createElement("span");

    //Create The Close Button Text
    let closeButtonText = document.createTextNode("X");

    closeButton.appendChild(closeButtonText);

    closeButton.className = "close_btn";

    popupBox.appendChild(closeButton);

    if (img.alt !== null) {
      // Create Heading
      let imgHeading = document.createElement("h3");

      //Create Text For Heading
      let imgText = document.createTextNode(img.alt);

      //Append The Text To The Heading
      imgHeading.appendChild(imgText);

      popupBox.appendChild(imgHeading);
    }

    //Create The Image
    let popupImage = document.createElement("img");

    // Set Image Source
    popupImage.src = img.src;

    // Add Image To Popup Box
    popupBox.appendChild(popupImage);

    //Append Popup Box to Body
    document.body.appendChild(popupBox);
  });
});

// Close Popup
document.addEventListener("click", (e) => {
  if (
    e.target.className == "close_btn" ||
    e.target.className == "popup_overlay"
  ) {
    //Remove The Current Popup
    document.querySelector(".popup_box").remove();

    //Remove Overlay
    document.querySelector(".popup_overlay").remove();
  }
});

//===================================================================================================================

// * Bullets Events // // * Link Events //

const allBullets = document.querySelectorAll(".nav_bullets .bullet");
const allLinks = document.querySelectorAll(".links a");

function goToSection(element) {
  element.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}

goToSection(allBullets);
goToSection(allLinks);
//===================================================================================================================
