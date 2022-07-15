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