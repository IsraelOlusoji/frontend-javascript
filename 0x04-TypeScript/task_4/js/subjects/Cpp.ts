namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp implements Subject {
    teacher: Teacher;

    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }

    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }

    getAvailableTeacher(): string {
      if (!this.teacher.experienceTeachingC) {
        return "No available teacher";
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
