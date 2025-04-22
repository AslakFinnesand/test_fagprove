using {team.calendar as my} from '../db/schema';

service CalendarService @(
    requires: 'admin',
    path    : 'calendar'
) {
    
    @readonly
    entity LeaderView as
        projection on my.Leaders {
            *,

        };

    function GetLeaderAppointments(leader_ID : String, year : Integer) returns array of LeaderView;

}
