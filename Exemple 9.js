const axios = require('axios');

module.exports = {
    name: 'weather',
    description: 'Obtenir la météo actuelle',
    async execute(message, args) {
        const city = args.join(' ');
        const apiKey = 'YOUR_API_KEY';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        try {
            const response = await axios.get(url);
            const { temp } = response.data.main;
            message.channel.send(`Il fait actuellement ${temp}°C à ${city}.`);
        } catch (error) {
            message.channel.send('Impossible de récupérer les données météo.');
        }
    },
};
