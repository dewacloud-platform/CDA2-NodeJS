import type { NextApiRequest, NextApiResponse } from "next";
import { getStudents, createStudent } from "@/lib/studentService";
import { NextResponse } from "next/server";

export async function GET() {
  const students = await getStudents();
  return NextResponse.json(students, { status: 200 });
}

export async function POST(req: Request) {
  const newStudent = await req.json();
  // Validate request body
  if (!newStudent) {
    return NextResponse.json({ message: "Bad Request" }, { status: 400 });
  }

  if (!newStudent?.id) {
    return NextResponse.json({ message: "NIM is required" }, { status: 400 });
  }

  if (!newStudent?.firstName) {
    return NextResponse.json(
      { message: "First name is required" },
      { status: 400 }
    );
  }

  if (!newStudent?.lastName) {
    return NextResponse.json(
      { message: "Last name is required" },
      { status: 400 }
    );
  }

  if (!newStudent?.dob) {
    return NextResponse.json({ message: "Age is required" }, { status: 400 });
  }

  const student = await createStudent(newStudent as StudentInputs);
  return NextResponse.json(student, { status: 201 });
}
