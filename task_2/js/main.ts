class Teacher {}
class Director {}

function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}
