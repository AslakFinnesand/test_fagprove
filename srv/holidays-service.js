const cds = require('@sap/cds');

module.exports = cds.service.impl(async function () {

    // Implement custom handler for GetHolidays
    this.on('GetHolidays', async (req) => {
        // Extract parameters from the API call
        let year = req.data.year;          // year parameter from the request

        const holidays = await SELECT.from('team.calendar.Holidays')
            .columns(h => {
                h.ID,
                    h.date,
                    h.text,
                    h.type;
            });


        const result = holidays


        return result;
    });
});


