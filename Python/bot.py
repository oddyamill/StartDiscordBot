import discord

class Client(discord.Client):
    async def on_ready(self):
        print('OFF')

client = Client()
client.run('TOKEN_HERE')