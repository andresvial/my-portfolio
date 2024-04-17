"use client";

import { ArrowDownToLine } from "lucide-react";
import Link from "next/link";

export const DownloadCVButton = () => {
  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "../../public/documents/curriculum.pdf";
    link.download = "curriculum.pdf";
    link.click();
  };

  return (
    <Link
      href="/documents/curriculum.pdf"
      download="Curriculum-Andres-Vial.pdf"
      target="_blank"
    >
      <button className="space-x-2 flex flex-row items-center justify-center px-4 py-2 text-white font-medium bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform duration-300 ease-in-out">
        <ArrowDownToLine />
        <span>Descargar Curriculum</span>
      </button>
    </Link>
  );
};
