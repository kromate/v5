import { computed, ref } from '@vue/reactivity';

const INITIAL_LENGTH = ref(6)
export const showMoreValue = ref(true)
interface IProject {
    name: string,
    desc: string,
    tags: string[],
    links: { name: string; url: string; }[],
    show: Boolean
}

// function splitArrayIntoChunksOfLen(arr: Array<IProject>, len: number) {
//     var chunks = [], i = 0, n = arr.length;
//     while (i < n) {
//         chunks.push(arr.slice(i, i += len));
//     }
//     return chunks;
// }


export const projectsArr: Array<IProject> = [
    {
        name: 'Wirepay',
        desc: 'I worked on the company`s website and user dashboard',
        tags: ['Nuxt', 'tailwind', 'typescript'],
        links: [{ name: 'live', url: 'https://dashboard.maplerad.com/' }],
        show: true
    },
    {
        name: 'Stranerd',
        desc: 'Building various tools to enable students to collaborate, innovate and achieve academic success.',
        tags: ['Vue', 'tailwind', 'Ionic'],
        links: [{ name: 'live', url: 'https://stranerd.com/' }],
        show: true
    },
    {
        name: 'Cloundenly',
        desc: 'I Worked on a suite of tools that enabled the the easy management of HR, Benefits and Payroll for Organisations',
        tags: ['Vue', 'Tailwind', 'Vuex'],
        links: [{ name: 'live', url: 'https://cloudenly.com/' },],
        show: true
    },
    {
        name: 'Gamexit',
        desc: 'A platform focused on connecting people using web based games. Create a 1v1 or tournament challenge and invite your friends ',
        tags: ['Websocket', 'WebRTC', 'Node.Js'],
        links: [{ name: 'github', url: 'https://github.com/kromate/gamexit' }, { name: 'live', url: 'https://gamexit.netlify.app/' },],
        show: true
    },
    {
        name: 'Vue3 dashboard',
        desc: 'I saw a very beautiful dashboard template in Vanilla Js and decided to recreate it in Vue',
        tags: ['Vue', 'Tailwind', 'Chart.js'],
        links: [{ name: 'github', url: 'https://github.com/kromate/vue3-vite-tailwind-dashboard' }, { name: 'live', url: 'https://vite-dashboard.netlify.app/' },],
        show: true
    },
    {
        name: 'Vue3 Animation',
        desc: 'A collection of vue 3 animations made with different libraries from GSAP to hover effects and just plain CSS animations',
        tags: ['Vue', 'GSAP', 'Tailwind'],
        links: [{ name: 'github', url: 'https://github.com/kromate/vue3-gsap-animations' }, { name: 'live', url: 'https://vue3-animations.netlify.app/' },],
        show: true
    },
    {
        name: 'Codeden',
        desc: 'This is a drag n drop vue component builder with other feature like a component library and co',
        tags: ['Vue', 'Vue-draggable', 'Tailwind'],
        links: [{ name: 'github', url: 'https://github.com/kromate/Codeden' }, { name: 'live', url: 'https://codeden.netlify.app/' },],
        show: true
    },
    {
        name: 'Script Runner',
        desc: 'A chrome extension in which you can save Javascript code in the browser and run them later in the console',
        tags: ['Chrome extension', 'Javascript'],
        links: [{ name: 'github', url: 'https://github.com/kromate/chrome-extensions/tree/main/Script%20Runner' },],
        show: true
    },
    {
        name: 'Code Formatter',
        desc: 'A chrome extension that helps you format your HTML & CSS code using prettier',
        tags: ['Chrome extension', 'Javascript'],
        links: [{ name: 'github', url: 'https://github.com/kromate/chrome-extensions/tree/main/Format%20Code' }, { name: 'live', url: 'https://chrome.google.com/webstore/detail/code-formatter/pbcmhfjddijdnkbfcbghfnoejdknfejd' },],
        show: true
    },
    {
        name: 'LegalPreneur',
        desc: 'The official website for Legalpreneur Attorneys & Consulting firm',
        tags: ['Vue', 'Vue-draggable', 'Tailwind'],
        links: [{ name: 'live', url: 'https://legalpreneurconsulting.com/' },],
        show: true
    },

    {
        name: 'Timelinx',
        desc: 'I was bored and decided to implement a design from my friend',
        tags: ['Nuxt', 'Tailwind', 'Firebase'],
        links: [{ name: 'github', url: 'https://github.com/kromate/Timeline-Creator' }, { name: 'live', url: 'https://timelinx.netlify.app/' },],
        show: true
    },
    {
        name: 'Octobus',
        desc: 'A web app in which users can get updates on buses and their schedules',
        tags: ['Google Maps', 'Firebase', 'Node.Js'],
        links: [{ name: 'github', url: 'https://github.com/kromate/Octobus' }, { name: 'live', url: 'https://octobus.netlify.app/' },],
        show: true
    },


    {
        name: 'AnimeDom',
        desc: 'I was tired of the ads on popular anime websites so I built mine using puppeteer/cheerio to scrape data and Ionic for the frontend',
        tags: ['Firebase', 'Puppeteer', 'Express'],
        links: [{ name: 'github', url: 'https://github.com/kromate/AnimeDom-Ionic' }, { name: 'live', url: 'https://animedom.netlify.app/' },],
        show: true
    },

    {
        name: 'Cloundenly-UI',
        desc: 'A list of Internal UI component used by different teams in Scelloo',
        tags: ['Vue', 'Storybook', 'Npm-package'],
        links: [{ name: 'live', url: 'https://cloudenly-ui.netlify.app/' },],
        show: true
    },
    {
        name: 'intercom clone',
        desc: 'An intercom clone that uses google spreadsheet to collect users feedback',
        tags: ['Typescript', 'Tailwind', 'library'],
        links: [{ name: 'github', url: 'https://github.com/kromate/careButton' }, { name: 'live', url: 'https://kromate.github.io/careButton/' },],
        show: true
    },
    {
        name: 'Fazzy D',
        desc: 'I Designed & Built a fashion E-commerce store for a client with features like "add to favorite", "admin Dashboard", "payment gateways" e.t.c',
        tags: ['Vue', 'Firebase', 'Cloud Storage'],
        links: [{ name: 'live', url: 'https://fazzyd.com/' },],
        show: true
    },
    {
        name: 'FaceReg',
        desc: 'A web based facial recognition system that can be used to take attendance of a class or group of people',
        tags: ['Vue', 'Faceapi.js', 'Webcam.js'],
        links: [{ name: 'github', url: 'https://github.com/kromate/faceReg' }, { name: 'live', url: 'https://fas.netlify.app/' },],
        show: true
    },
    {
        name: 'DSC Website',
        desc: 'I Contributed to the DSC Unilag website to decrease the load time and update the site for speed and efficiency',
        tags: ['HTML', 'Bootstrap', 'Jquery'],
        links: [{ name: 'github', url: 'https://github.com/DSC-Unilag/dsc-unilag.github.io' }, { name: 'live', url: 'https://dscunilag.dev/' },],
        show: true
    },
    {
        name: 'Studee',
        desc: 'A open source project I built & designed under Kromtech as a sort of student community app with features like past question and co.',
        tags: ['Vue', 'Ionic', 'firebase'],
        links: [{ name: 'github', url: 'https://github.com/KROM-TECH/Studee' }, { name: 'live', url: 'https://studee.kromtech.io/' },],
        show: true
    },
    {
        name: 'Kromtech Academic Archive',
        desc: 'This was another kromtech project I designed and built which acted as a General database for different academic materials (Books, Videos, Articles)',
        tags: ['Vue', 'firebase', 'APIs'],
        links: [{ name: 'github', url: 'https://github.com/KROM-TECH/KAA_VUE' }, { name: 'live', url: 'https://kaa.kromtech.io/' },],
        show: true
    },
    {
        name: 'SVG Charactar builder',
        desc: 'This was my attempt to make a character builder with SVGs and Javascript',
        tags: ['SVG', 'Vue', 'vue-router'],
        links: [{ name: 'github', url: 'https://github.com/kromate/SVG_SHAPE_BUILDER' }, { name: 'live', url: 'https://svgshapes.netlify.app/' },],
        show: true
    },
]

export const projects = computed(() => {
    return projectsArr.slice(0, INITIAL_LENGTH.value)
})


export const showMore = () => {
    INITIAL_LENGTH.value += (projectsArr.length - INITIAL_LENGTH.value)
    showMoreValue.value = false
}
export const showLess = () => {
    console.log(INITIAL_LENGTH);
    INITIAL_LENGTH.value -= (projectsArr.length - 6)
    console.log(INITIAL_LENGTH, 'gg');
    showMoreValue.value = true
}

