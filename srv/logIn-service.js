const cds = require('@sap/cds');

module.exports = cds.service.impl(async function () {

    this.on('GetAuthenticated', async (req) => {
        // Extract parameters from req
        const leaderName = req.data.username;

        if (!leaderName) {
            return {
                ID: '0',
                name: [],
                IsLeader: false
            }; // Return empty array if parameters are missing
        }

        const people = await SELECT.from('team.calendar.Leaders')
            .where({ name: leaderName })
            .columns(p => {
                p.ID,
                    p.name;
            });


        // Transform the data to match desired format
        const result = people.map(person => ({
            ID: person.ID,
            name: person.name.match(leaderName),
            IsLeader: true
        }));

        return result;
    });
});


