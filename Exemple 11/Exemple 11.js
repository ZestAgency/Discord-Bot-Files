const levels = new Map();

client.on('messageCreate', message => {
    if (message.author.bot) return;

    const userId = message.author.id;
    const xp = levels.get(userId) || 0;
    levels.set(userId, xp + 1);

    if (xp % 10 === 0) {
        message.channel.send(`${message.author.username} est maintenant niveau ${xp / 10}!`);
    }
});
