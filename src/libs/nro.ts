import axios, { Axios } from "axios"
import cheerio from "cheerio";
import Path from "path";
import Fs, { write } from "fs";

export class Nro {
    getHtml = async (url: string) => {
        return axios.get(url).then((response) => {
            return response.data;
        });
    };

    parser = async(html: string) => {
        let data: string[] = [];
        const $ = cheerio.load(html);

        $('table tr td.auto-style1').each((i, elem) => {
            data.push(`https://www.nro.gov${$(elem).find('a').attr('href')}`)
        });
        return data;
    };

    downloadFile = async (fileUrl: string, downloadFolder: string) => {
        // Get the file name
        const fileName = Path.basename(fileUrl);
      
        // The path of the downloaded file on our machine
        const localFilePath = Path.resolve(__dirname, downloadFolder, fileName);
        try {
          const response = await axios({
            method: 'GET',
            url: fileUrl,
            responseType: 'stream',
          });
      
          const w = response.data.pipe(Fs.createWriteStream(localFilePath));
          w.on('finish', () => {
            console.log('Successfully downloaded file!');
          });
        } catch (err: any) { 
          throw new Error(err);
        }
      }; 
}