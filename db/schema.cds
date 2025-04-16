namespace team.calendar;


entity Leaders {
  key ID       : UUID;
      pic      : String;
      name     : String;
      role     : String;
      people   : Association to many People on people.leader = $self;
}

entity People {
  key ID        : UUID;
      pic       : String;
      name      : String;
      role      : String;
      leader    : Association to one Leaders;
      travels   : Association to many Travels on travels.person = $self;
      birthDay  : Association to one BirthDay on birthDay.person = $self;
      absences  : Association to many Absences on absences.person = $self;
}

entity Travels {
  key ID       : UUID;
      start    : DateTime;
      end      : DateTime;
      title    : String;
      info     : String;
      type     : String;
      status   : String;
      person   : Association to one People;
}


entity BirthDay{
    key ID     : UUID;
      start    : DateTime;
      end      : DateTime;
      title    : String;
      info     : String;
      type     : String;
      person   : Association to one People;
}

entity Absences {
    key ID     : UUID;
      start    : DateTime;
      end      : DateTime;
      title    : String;
      info     : String;
      type     : String;
      status   : String;
      person   : Association to People;
}

entity LogIn {
  key ID       : UUID;
      pic      : String;
      name     : String;
      role     : String;
}

entity Holidays {
  key ID   : UUID;
      date : String;
      text : String;
      type : String;
}
