const Telegraf = require('telegraf'),
    bot = new Telegraf('643729529:AAHBYqdUy1BbH_QbP8R-19mqjVxbX843Qgw')

bot.start((ctx) => ctx.reply('Oi!'))
bot.hears(['Oi', 'oi'], (ctx) => ctx.reply('tudo bem?'))
bot.hears(['Tudo', 'tudo'], (ctx) => ctx.reply('que bom!'))
bot.hears(['Vsf', 'vsf'], (ctx) => ctx.reply('vai voce'))

bot.command('oldschool', (ctx) => ctx.reply('Hello'))
bot.command('modern', ({ reply }) => reply('Yo'))
bot.command('hipster', Telegraf.reply('λ'))

bot.startPolling()