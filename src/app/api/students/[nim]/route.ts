import { getStudent, updateStudent, deleteStudent } from "@/lib/studentService";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ nim: string }> }
) {
  const nim = (await params).nim;

  const student = await getStudent(nim);
  if (!student) {
    return NextResponse.json({ message: "Student Not Found" }, { status: 404 });
  }

  return NextResponse.json(student, { status: 200 });
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ nim: string }> }
) {
  const nim = (await params).nim;
  const updatedStudentData = await req.json();

  if (!nim || Array.isArray(nim)) {
    return NextResponse.json({ message: "Bad Request" }, { status: 400 });
  }

  if (!updatedStudentData) {
    return NextResponse.json({ message: "Bad Request" }, { status: 400 });
  }

  const updatedStudent = await updateStudent(
    nim,
    updatedStudentData as unknown as StudentInputs
  );
  return NextResponse.json(updatedStudent, { status: 200 });
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ nim: string }> }
) {
  const nim = (await params).nim;
  if (!nim || Array.isArray(nim)) {
    return NextResponse.json({ message: "Bad Request" }, { status: 400 });
  }

  await deleteStudent(nim);
  return NextResponse.json(null, { status: 200 });
}
