interface Teacher {
    firstName: string;
    lastName: string;
    readonly fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    readonly location: string;
    [key: string]: any;
  }

interface Directors extends Teacher {
  numberOfReports: number;
}
  
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

const createTeacher = (props: Omit<Teacher, "yearsOfExperience"> & { yearsOfExperience?: number }): Teacher => {
  const teacher: Teacher = {
      ...props,
      fullTimeEmployee: props.fullTimeEmployee ?? true, // Default to true if not provided
      location: props.location ?? "Unknown",
      firstName: "",
      lastName: ""
  };

  return teacher;
};

interface PrintTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  const firstInitial = firstName.charAt(0).toUpperCase();
  const formattedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);

  return `${firstInitial}. ${formattedLastName}`;
};

interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClass;
  }
  
interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}
  
const StudentClass: StudentClassConstructor = class StudentClass implements StudentClass {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
};
  