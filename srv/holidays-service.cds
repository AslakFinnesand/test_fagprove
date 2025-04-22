using {team.calendar as my} from '../db/schema';


service HolidaysService @(
    requires: 'admin',
    path    : 'holidays'
) {
    @readonly
    entity Holidays as
        projection on my.Holidays {
            *,
        };

    function GetHolidays(year : Integer) returns array of Holidays;

}
