"use client";

import { useQuery } from "react-query";
import { getStudents } from "@/api/students";
import { DataTable } from "@/components/students/data-table";
import { columns } from "@/components/students/columns";
import Image from "next/image";

export default function DemoPage() {
  const { data: students, isLoading } = useQuery({
    queryKey: ["students"],
    queryFn: getStudents,
  });

  return (
    <div className="relative container mx-auto py-10">
      {/* Content */}
      <div className="relative">
        <DataTable columns={columns} data={students || []} />
      </div>

      {/* Logo at the Bottom Right */}
      <Image
        src="/logo.png"
        width={150}
        height={150}
        alt="Dewacloud Academy Logo"
        className="fixed bottom-1 right-1 m-4" // Adjust width and height
      />
    </div>
  );
}
