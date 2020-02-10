local discordia = require('discordia')
local client = discordia.Client()

client:on('ready', function()
	print("OOF")
end)

client:run('Bot TOKEN_HERE')