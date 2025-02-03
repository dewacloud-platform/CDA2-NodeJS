import prisma from "@/lib/db";

export const getStudent = async (nim: string): Promise<StudentInputs> => {
  const student = await prisma.student.findUnique({
    where: { id: nim },
  });

  if (!student) {
    throw new Error("Student not found");
  }

  return {
    id: student.id,
    firstName: student.first_name,
    lastName: student.last_name,
    dob: student.birth_date.toISOString().split("T")[0],
  };
};

export const getStudents = async (): Promise<Student[]> => {
  const students = await prisma.student.findMany();

  // Process the data
  const processedStudents = students.map((student) => {
    return {
      nim: student.id,
      fullName: `${student.first_name} ${student.last_name}`,
      age: new Date().getFullYear() - student.birth_date.getFullYear(),
    };
  });

  return processedStudents;
};

export const createStudent = async (input: StudentInputs) => {
  const birthDate = new Date(input.dob);
  const student = await prisma.student.create({
    data: {
      id: input.id,
      first_name: input.firstName,
      last_name: input.lastName,
      birth_date: birthDate,
    },
  });

  return student;
};

export const updateStudent = async (nim: string, input: StudentInputs) => {
  const birthDate = new Date(input.dob);
  const student = prisma.student.update({
    where: { id: nim },
    data: {
      first_name: input.firstName,
      last_name: input.lastName,
      birth_date: birthDate,
    },
  });

  return student;
};

export const deleteStudent = async (nim: string) => {
  await prisma.student.delete({
    where: { id: nim },
  });
  return;
};
