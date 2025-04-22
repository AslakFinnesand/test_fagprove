const cds = require('@sap/cds');

module.exports = cds.service.impl(async function () {



    // Implement custom handler for CalendarView
    this.on('READ', 'CalendarView', async (req) => {
        // Get the people data with their appointments
        const people = await SELECT.from('team.calendar.People').columns(p => {
            p.ID,
                p.pic,
                p.name,
                p.role,
                p.appointments(a => {
                    a.ID,
                        a.start,
                        a.end,
                        a.title,
                        a.info,
                        a.type,
                        a.pic,
                        a.tentative;
                });
        });

        // Transform the data to match desired format
        const result = people.map(person => ({
            ID: person.ID,
            pic: person.pic,
            name: person.name,
            role: person.role,
            appointments: person.appointments || []
        }));

        return result;
    }),


        // Implement custom handler for LeaderView
        this.on('GetLeaderAppointments', async (req) => {

            // Extract parameters from the API call
            const leaderId = req.data.leader_ID; // leader_ID is passed in the request
            const year = req.data.year;          // year parameter from the request

            if (!leaderId || !year) {
                return [];
            }

            // Get the people data with their appointments
            const people = await SELECT.from('team.calendar.People')
                .where({ leader_ID: leaderId })
                .columns(p => {
                    p.ID,
                        p.name,
                        p.role,
                        p.travels(t => {
                            t.ID,
                                t.start,
                                t.end,
                                t.title,
                                t.info,
                                t.type,
                                t.status;
                        }),
                        p.birthDay(b => {
                            b.ID,
                                b.start,
                                b.end,
                                b.title,
                                b.info,
                                b.type;
                        }),
                        p.absences(ab => {
                            ab.ID,
                                ab.start,
                                ab.end,
                                ab.title,
                                ab.info,
                                ab.type,
                                ab.status;
                        });
                });



            // Transform the data to combine all events into appointments
            const resulta = people.map(person => {

                const travelEvents = (person.travels || [])
                    .filter(travel => new Date(travel.start).getFullYear() === parseInt(year, 10))
                    .map(travel => ({
                        ...travel,
                        color: "#FFB343",
                        pic: "sap-icon://heatmap-chart",
                        eventType: 'travel'
                    }));

                const birthdayEvents = (person.birthDay || [])
                    .map(bday => ({
                        ...bday,
                        color: "#6395ee",
                        pic: "sap-icon://Netweaver-business-client",
                        eventType: 'birthday'
                    }));

                const absenceEvents = (person.absences || [])
                    .filter(absence => new Date(absence.start).getFullYear() === parseInt(year, 10))
                    .map(absence => ({
                        ...absence,
                        pic: "sap-icon://travel-itinerary",
                        color: "#adebb3",
                        eventType: 'absence'
                    }));


                // Combine all events into a single appointments array
                const allAppointments = [
                    ...travelEvents,
                    ...birthdayEvents,
                    ...absenceEvents,
                ];

                // Sort all appointments by start date
                allAppointments.sort((a, b) => new Date(a.start) - new Date(b.start));

                return {
                    ID: person.ID,
                    name: person.name,
                    role: person.role,
                    appointments: allAppointments
                };
            });

            const legendItems = [
                {
                    text: "Travel",
                    color: "#FFB343"
                },
                {
                    text: "Birthday",
                    color: "#6395ee"
                },
                {
                    text: "Absence",
                    color: "#adebb3"
                },
                {
                    text: "Appointments",
                    color: "#39998e"
                },
            ];
            const legendAppointmentItems = [
                {
                    text: "Travel",
                    color: "#FFB343"
                },
                {
                    text: "Birthday",
                    color: "#6395ee"
                },
                {
                    text: "Absence",
                    color: "#adebb3"
                },
            ];
            const result = {
                startDate: Date(year),
                people: resulta,
                legendItems,
                legendAppointmentItems
            };

            return result;
        });
});


