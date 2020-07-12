'use strict';

const puppeteer = require('puppeteer');
const { async } = require('rxjs/internal/scheduler/async');

const screenShot = async (page, num) => {
    await page.screenshot({ path: `./images/img${num}.png`, fullPage: true });
}

// console.info('teste'.indexOf('e'));

const runCode = async () => {
    let num = 0;

    const browser = await puppeteer.launch({ executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe' });
    const page = await browser.newPage();

    await page.goto('https://internet.sefaz.es.gov.br/faleconosco/index.php?teste=' + Math.random());


    await screenShot(page, num++);
    

    try {
        const categoriaFaqLink = '.categoriaFaq a';
        await page.waitForSelector(categoriaFaqLink);
        // await page.click(categoriaFaqLink);

        const titulos = await page.evaluate(
            catFaqLink => {
                const temNoticia = titulo => 
                    titulo.indexOf('NFC-E') > -1 ||
                    titulo.indexOf('NF-E') > -1||
                    titulo.indexOf('NOTA TÉCNICA') > -1||
                    titulo.indexOf('CBENEF') > -1;

                await page.click(catFaqLink);
                await page.waitForSelector('.voltar');

                const anchors = Array.from(document.querySelectorAll(catFaqLink));
                return anchors
                    .map(anchor => anchor.textContent.trim().toUpperCase())
                    .filter(temNoticia);
            }, categoriaFaqLink);
        console.log(titulos.join('\n'));


        // const mostrarPergunta = '.mostrarPergunta';
        // await page.waitForSelector(mostrarPergunta);
        // await page.click(mostrarPergunta);

        // const mostrarResposta = '.mostrarResposta';
        // await page.waitForSelector(mostrarResposta);
        // await page.click(mostrarResposta);

    } catch (error) {
        console.log(error);
    }


    await screenShot(page, num++);

    await browser.close();
}



try {
    runCode();

} catch (error) {
    console.info(error);
}












    /*
      // Wait for the results page to load and display the results.
      const resultsSelector = '.gsc-results .gsc-thumbnail-inside a.gs-title';
      await page.waitForSelector(resultsSelector);
  
      // Extract the results from the page.
      const links = await page.evaluate((resultsSelector) => {
        const anchors = Array.from(document.querySelectorAll(resultsSelector));
        return anchors.map((anchor) => {
          const title = anchor.textContent.split('|')[0].trim();
          return `${title} - ${anchor.href}`;
        });
      }, resultsSelector);
      console.log(links.join('\n'));
    */