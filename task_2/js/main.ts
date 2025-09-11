class Teacher {
  workTeacherTasks(): string {
    return "Getting to work";
  }
}
class Director {
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

function executeWork(employee: Director | Teacher) {
  if (isDirector(employee)) {
    return employee.workDirectorTasks;
  }
  return employee.workTeacherTasks;
}
