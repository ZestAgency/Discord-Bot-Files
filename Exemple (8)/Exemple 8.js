module.exports = {
    name: 'addrole',
    description: 'Ajouter un rôle à un utilisateur',
    execute(message, args) {
        const role = message.guild.roles.cache.find(r => r.name === args[0]);
        const member = message.mentions.members.first();

        if (role && member) {
            member.roles.add(role);
            message.channel.send(`Le rôle ${role.name} a été ajouté à ${member.user.username}`);
        } else {
            message.channel.send('Rôle ou utilisateur introuvable.');
        }
    },
};
