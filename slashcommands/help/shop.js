const { MessageEmbed } = require('discord.js')
const { hyperlink } = require('@discordjs/builders');
const run = async (client, interaction) => {
	const shopEmbed = new MessageEmbed()
		.setColor('#faa152')
		.setTitle('Hướng dẫn Shop')
		.setURL('http://www.ragefiresmp.ga/')
		.setAuthor({ name: 'RageFireSMP', iconURL: 'https://cdn.discordapp.com/avatars/848871888360046634/7f95245e645714ed89256fa5f8f01ffe.webp?size=160', url: 'http://www.ragefiresmp.ga/' })
		.setDescription(`🏦 /shop : Mở shop để mua/bán vật phẩm\nLưu ý: Khi sử dụng /shop đưa trỏ chuột vào 1 vật phẩm thì chuột trái để mua/chuột phải để bán\n🏦 /sellall "Tên vật phẩm" : bán tất cả vật phẩm trong túi đồ của bạn (Tên vật phẩm là vật phẩm bạn cần bán nếu không có sẽ bán hết đồ)\n🏦 /sellall hand : bán tất cả vật phẩm trên tay bạn\n🏦 /sellgui : Mở 1 gui bán đồ bạn có thể đưa đồ vào đó rồi đóng gui sẽ tự động bán hết đồ bạn để vào đó\n🏦 /withdraw ($) : Rút ra 1 số tiền nhất định\n🏦 /deposit hoặc ấn chuột phải : Phải có 1 banknotes trên tay chuyển tiền vào trong tài khoản\n🏦 /trade "tên người chơi" : Trao đổi vật phẩm hoặc tiền với người chơi khác\nThêm thông tin tại: ${hyperlink('Thông tin','https://gpplugins.gitbook.io/economyshopgui/basics/commands')}`)
		.setThumbnail('https://cdn.discordapp.com/avatars/848871888360046634/7f95245e645714ed89256fa5f8f01ffe.webp?size=160')
		.addFields(
			{ name: 'Tham gia trên Java', value: hyperlink('mc.ragefiresmp.ga','http://www.ragefiresmp.ga/'), inline: true },
			{ name: 'Tham gia trên bedrock', value: hyperlink('mc.ragefiresmp.ga:19132','http://www.ragefiresmp.ga/'), inline: true },
		)
		.setImage('https://cdn.discordapp.com/avatars/848871888360046634/7f95245e645714ed89256fa5f8f01ffe.webp?size=160')
		.setTimestamp()
		.setFooter({ text: 'RageFireSMP', iconURL: 'https://cdn.discordapp.com/avatars/848871888360046634/7f95245e645714ed89256fa5f8f01ffe.webp?size=160' });
	interaction.reply({ embeds: [shopEmbed] }).catch((err) => {console.log(err)})
}
module.exports = {
	name: "shop",
	category: "help",
	description: 'Xem hướng dẫn các lệnh shop',
	permissions: [],
	devOnly: false, run
}