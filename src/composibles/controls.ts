export const scrollControl = () => {
    let html = document.querySelector('html')
    let htmlPosition = html?.style
    
    const enableScroll = () => {
        if (htmlPosition) {
          htmlPosition.overflow  = "auto"
        }
    }
    const disableScroll = () => {
        if (htmlPosition) {
          htmlPosition.overflow  = "hidden"
        }
    }

    return{enableScroll, disableScroll}
}


export const scrollpsy = ()=> {
  const scrollspys = document.querySelectorAll("section");
  const links = document.querySelector(".links") as HTMLDivElement
  const linksHeight = links?.offsetHeight;
  // console.log(linksHeight);
  const allLinks = links.querySelectorAll(".nav-link");
  console.log(allLinks);
  function scrollspy() {
    scrollspys.forEach(current => {
      var _ = current;
      let currentElementOffset = _.offsetTop;
      let scrollPosition =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (currentElementOffset <= scrollPosition + linksHeight) {
        allLinks.forEach(currentLink => {
          currentLink.classList.remove("active");
        });
        const currentID = current.getAttribute("id");
        document
          .querySelector(`a[href="#${currentID}"]`)
          .classList.add("active");
      }
    });
  }
  window.addEventListener("scroll", scrollspy);
}