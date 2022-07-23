import { ref } from 'vue';

export const projects = ref([
    {
        name: 'Gamexit',
        desc: 'A platform focused on connecting people using web based games. Create a 1v1 or tournament challenge and invite your friends ',
        tags: ['Websocket', 'WebRTC', 'Node.Js'],
        links: [{ name: 'github', url: 'https://github.com/kromate/gamexit' }, { name: 'live', url: 'hhttps://gamexit.netlify.app/' },]
    },
    {
        name: 'Stranerd',
        desc: 'Building various tools to enable students to collaborate, innovate and achieve academic success.',
        tags: ['Vue', 'tailwind', 'Ionic'],
        links: [{ name: 'live', url: 'https://stranerd.com/' }]
    },
    {
        name: 'AnimeDom',
        desc: 'I was tired of the ads on popular anime websites so I built mine using puppeteer/cheerio to scrape data and Ionic for the frontend',
        tags: ['Firebase', 'Puppeteer', 'Express'],
        links: [{ name: 'github', url: 'https://github.com/kromate/AnimeDom-Ionic' }, { name: 'live', url: 'https://animedom.netlify.app/' },]
    }
])