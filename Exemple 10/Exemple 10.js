module.exports = {
    name: 'kick',
    description: 'Expulser un utilisateur',
    execute(message, args) {
        const member = message.mentions.members.first();
        if (member) {
            member.kick().then(() => {
                message.channel.send(`${member.user.tag} a été expulsé.`);
            }).catch(err => {
                message.channel.send('Impossible d\'expulser cet utilisateur.');
            });
        } else {
            message.channel.send('Utilisateur non trouvé.');
        }
    },
};
