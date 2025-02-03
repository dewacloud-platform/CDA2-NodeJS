export const routes = {
  // baseUrl: "http://localhost:8080",
  baseUrl: "/api",
  getStudents: () => `${routes.baseUrl}/students`,
  createStudent: () => `${routes.baseUrl}/students`,
  getStudent: (nim: string) => `${routes.baseUrl}/students/${nim}`,
  updateStudent: (nim: string) => `${routes.baseUrl}/students/${nim}`,
  deleteStudent: (nim: string) => `${routes.baseUrl}/students/${nim}`,
};
