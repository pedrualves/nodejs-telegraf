const Telegraf = require('telegraf'),
    bot = new Telegraf(process.env.TOKEN),
    http = require('http'),
    port = process.env.PORT || 3000,
    server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Works');
    });

bot.start((ctx) => ctx.reply('Oi!'))
bot.hears(['Oi', 'oi'], (ctx) => ctx.reply('tudo bem?'))
bot.hears(['Tudo', 'tudo'], (ctx) => ctx.reply('que bom!'))
bot.hears(['Vsf', 'vsf'], (ctx) => ctx.reply('vai voce'))

bot.command('oldschool', (ctx) => ctx.reply('Hello'))
bot.command('modern', ({ reply }) => reply('Yo'))
bot.command('hipster', Telegraf.reply('λ'))

bot.startPolling()

server.listen(port, hostname, () => {
    console.log(`Server running at ${port}`);
});
