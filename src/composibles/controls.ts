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
  const links = document.querySelector(".links ") as HTMLDivElement
  const linksHeight = links?.offsetHeight;
  const allLinks = links.querySelectorAll(".nav-link>a");

  function scrollspy() {
    scrollspys.forEach(current => {
      let _ = current;
      let currentElementOffset = _.offsetTop;
      let scrollPosition =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (currentElementOffset <= scrollPosition + linksHeight) {
        allLinks.forEach(currentLink => {
          if (currentLink.classList.contains("!text-orange")) {
              currentLink.classList.remove("!text-orange");
          }
        });
        const currentID = current.getAttribute("id");
        if (currentID !== 'Hero') {
           const currentLink =  document?.querySelector(`a[href="/#${currentID}"]`)
             currentLink?.classList.add("!text-orange");
        }
     
      }
    });
  }

  window.addEventListener("scroll", scrollspy);
}