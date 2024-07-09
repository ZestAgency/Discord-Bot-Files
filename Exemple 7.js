module.exports = {
    name: 'help',
    description: 'Liste des commandes disponibles',
    execute(message, args) {
        const commands = message.client.commands.map(cmd => cmd.name).join(', ');
        message.channel.send(`Commandes disponibles : ${commands}`);
    },
};
