import { Telegraf, Markup } from 'telegraf'
import { message } from 'telegraf/filters'

const token = '7499406759:AAFkL0XAgWH107XTzc5xlA5hWQ21T_Mqynw'
const webAppUrl = 'https://vk.com/'

const bot = new Telegraf(token)

bot.command('start', (ctx) =&gt; {
  ctx.reply(
    'Добро пожаловать! Нажмите на кнопку ниже, чтобы запустить приложение',
    Markup.keyboard([
      Markup.button.webApp('Отправить сообщение', `${webAppUrl}/feedback`),
    ])
  )
})

bot.launch()