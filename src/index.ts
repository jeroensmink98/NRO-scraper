import { Nro } from "./libs/nro";
import config from "./config";

const nro = new Nro();

async function run() {
    const data = await nro.getHtml(config.BASE_URL);
    const images = await nro.parser(data);
    
    images.forEach(async (image) => {
        await nro.downloadFile(image, '../images');
    });  
};

run();