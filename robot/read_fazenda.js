'use strict';

const puppeteer = require('puppeteer');
const { async } = require('rxjs/internal/scheduler/async');

const screenShot = async (page, num) => {
    await page.screenshot({ path: `./images/fazenda${num}.png`, fullPage: true });
}

// console.info('teste'.indexOf('e'));

var b = 32;

const runCode = async () => {
    let num = 0;

    const browser = await puppeteer.launch({ executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe' });
    const page = await browser.newPage();

    await page.goto('http://www.nfe.fazenda.gov.br/portal/informe.aspx?ehCTG=false&page=0&pagesize=15&ctrl='+Math.random());


    await screenShot(page, num++);

    let a = '<a href="http://www.nfe.fazenda.gov.br/portal/exibirArquivo.aspx?conteudo=heuMWX0urg0=" target="_blank">TABELA cBenef_X_CST, atualizada em 31/01/2020</a>';
    let b = a.match(/href="([^"]*)/);
    console.log(b[1]);
    
    
    try {
        const divInforme = '.divInforme';
        await page.waitForSelector(divInforme);

        const noticias = await page.evaluate(
            divInf => {
                const temNoticia = obj => {
                    titulo = obj.check;

                    return titulo.indexOf('CBENEF_X_CST') > -1;

                   return titulo.indexOf('NFC-E') > -1 ||
                    titulo.indexOf('NF-E') > -1||
                    titulo.indexOf('CBENEF_X_CST') > -1||
                    titulo.indexOf('NOTA TÉCNICA') > -1||
                    titulo.indexOf('CBENEF') > -1;
                }

                const getLinks = string => {
                    // links = string.match(/<a[^>]*>([^<]+)<\/a>/)
                    let href = string.match(/href="([^"]*)/) || [];
                    if (href[1] != undefined) {
                        string = `${href[1]}  *****  ${string}`;
                    }

                    return string;
                }

                const anchors = Array.from(document.querySelectorAll(divInf));
                console.log(anchors.length);

                return anchors
                    .map(anchor => anchor.textContent.trim())
                    .map(getLinks)
                    .map(string => string.replace(/(<([^>]+)>)/ig,""))
                    .map(string => { return { check: string.toUpperCase(), string: string }; })
                    .filter(temNoticia)
                    .map(obj => obj.string);
            }, divInforme);
        console.log(noticias.length);
        console.log('NOTÍCIA: '+noticias.join('\n\nNOTÍCIA: '));

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










