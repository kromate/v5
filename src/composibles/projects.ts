import { ref } from 'vue';

export const projects = ref([
    {
        name: 'Gamexit',
        desc: 'A platform focused on connecting people using web based games. Create a 1v1 or tournament challenge and invite your friends ',
        tags: ['Websocket', 'WebRTC', 'Node.Js'],
        links: [{ name: 'github', url: 'https://github.com/kromate/gamexit' }, { name: 'live', url: 'hhttps://gamexit.netlify.app/' },],
        show: true
    },
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
        name: 'AnimeDom',
        desc: 'I was tired of the ads on popular anime websites so I built mine using puppeteer/cheerio to scrape data and Ionic for the frontend',
        tags: ['Firebase', 'Puppeteer', 'Express'],
        links: [{ name: 'github', url: 'https://github.com/kromate/AnimeDom-Ionic' }, { name: 'live', url: 'https://animedom.netlify.app/' },],
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
        name: 'Cloundenly-UI',
        desc: 'A list of Internal UI component used by different teams in Scelloo',
        tags: ['Vue', 'Storybook', 'Npm-package'],
        links: [{ name: 'live', url: 'https://cloudenly-ui.netlify.app/' },],
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
])