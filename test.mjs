import puppeteer from 'puppeteer';
import fs from 'fs';

(async () => {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    let foundFirstError = false;
    let logLines = [];

    page.on('pageerror', error => {
        if (!foundFirstError) {
            logLines.push('--- PAGE ERROR ---');
            logLines.push(error.message);
            // Just take the first few lines of stack, no giant react traces
            logLines.push(error.stack.split('\n').slice(0, 10).join('\n'));
            foundFirstError = true;
        }
    });

    page.on('console', msg => {
        if (msg.type() === 'error' && !foundFirstError) {
            logLines.push('--- CONSOLE ERROR ---');
            logLines.push(msg.text().split('\n').slice(0, 10).join('\n'));
            foundFirstError = true;
        }
    });

    try {
        await page.goto('http://localhost:5173', { waitUntil: 'domcontentloaded', timeout: 5000 });
        await new Promise(r => setTimeout(r, 2000));
    } catch (err) {
        logLines.push("Navigation error: " + err.message);
    }

    if (!foundFirstError) {
        logLines.push("No error captured.");
    }

    fs.writeFileSync('error_utf8.txt', logLines.join('\n'), 'utf8');

    await browser.close();
})();
