using {team.calendar as my} from '../db/schema';


service logInService @(
    requires: 'admin',
    path    : 'logIn'
) {
    @readonly
    entity LogIn as
        projection on my.Leaders {
            *,
        };

    function GetAuthenticated(username : String) returns array of LogIn;

}
