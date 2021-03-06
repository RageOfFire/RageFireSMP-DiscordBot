const { MessageEmbed } = require('discord.js')
const { hyperlink } = require('@discordjs/builders');
module.exports = {
	name: "kd",
	category: "help",
	description: 'Xem hướng dẫn các lệnh sử dụng tiền đặc biệt',
	permissions: [],
	devOnly: false,
	run: async ({ client, message, args }) => {
		const kdEmbed = new MessageEmbed()
		.setColor('#faa152')
		.setTitle('Hướng dẫn khóa khối')
		.setURL('https://www.crystalgemcraft.xyz/')
		.setAuthor({ name: 'CrytalGemCraft', iconURL: 'https://cdn.discordapp.com/avatars/848871888360046634/7f95245e645714ed89256fa5f8f01ffe.webp?size=160', url: 'https://www.crystalgemcraft.xyz/' })
		.setDescription(`✔️ Khi vote cho server hãy đảm bảo rằng tên bạn dùng để vote giống với trong server đối với
		Người chơi bedrock(bản điện thoại) thêm dấu **.** ở đầu tên.
		✔️ Khi vote cho server bạn sẽ nhận được ngẫu nhiên 1 loại key nào đó + tiền + levels
		✔️ /vote ToggleReminders : Bật/tắt thông báo khi bạn có lượt vote khả dụng mới
		✔️ /vote Shop : Mở shop mua bằng điểm vote (mỗi khi vote sẽ được 1 điểm)
		✔️ /vote URL : Hiện tất cả các trang vote khả dụng
		✔️ /vote Points : Xem điểm hiện tại của bạn dùng để mua trong /vote Shop
		✔️ /vote : Mở gui vote
		✔️ /vote Top (All/Monthly/Weekly/Daily) : Xem bảng xếp hạng người chơi đã vote theo thứ tự (Tất cả/Tháng/Tuần/Ngày)
		✔️ Thêm thông tin tại: ${hyperlink('Thông tin','https://github.com/BenCodez/VotingPlugin/wiki/Commands-&-Permissions')}`)
		.setThumbnail('https://cdn.discordapp.com/avatars/848871888360046634/7f95245e645714ed89256fa5f8f01ffe.webp?size=160')
		.addFields(
			{ name: 'Tham gia trên Java', value: hyperlink('mc.crystalgemcraft.xyz','https://www.crystalgemcraft.xyz/'), inline: true },
			{ name: 'Tham gia trên bedrock', value: hyperlink('mc.crystalgemcraft.xyz:19132','https://www.crystalgemcraft.xyz/'), inline: true },
		)
		.setImage('https://cdn.discordapp.com/avatars/848871888360046634/7f95245e645714ed89256fa5f8f01ffe.webp?size=160')
		.setTimestamp()
		.setFooter({ text: 'CrytalGemCraft', iconURL: 'https://cdn.discordapp.com/avatars/848871888360046634/7f95245e645714ed89256fa5f8f01ffe.webp?size=160' });
	message.reply({ embeds: [kdEmbed] }).catch((err) => {console.log(err)})
}
}