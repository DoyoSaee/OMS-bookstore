"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";

import Image from "next/image";

interface BasicTableProps<T> {
  data: T[]; // 제네릭을 활용하여 데이터 타입 적용
  onRowClick?: (row: T) => void; // 클릭 이벤트 핸들러
}

export default function BasicTable<T extends Record<string, any>>({
  data,
}: BasicTableProps<T>) {

  if (data.length === 0) return <p className="text-gray-500">데이터가 없습니다.</p>;

  const headers = Object.keys(data[0]) as (keyof T)[]; // 첫 번째 객체의 키를 헤더로 사용

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <div className="min-w-[700px]">
          <Table>
            {/* Table Header */}
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                {headers.map((header) => (
                  <TableCell
                    key={String(header)}
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                  >
                    {String(header)}
                  </TableCell>
                ))}
              </TableRow>
            </TableHeader>

            {/* Table Body */}
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {data.map((row, index) => (
                <TableRow
                  key={index}
                  className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                  {headers.map((header) => (
                    <TableCell key={String(header)} className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                      {typeof row[header] === "object" ? (
                        row[header]?.image ? (
                          <div className="flex items-center gap-3">
                            <Image width={40} height={40} src={row[header].image} alt={row[header].name} />
                            <div>
                              <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                                {row[header].name}
                              </span>
                              <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                                {row[header].orderId}
                              </span>
                            </div>
                          </div>
                        ) : (
                          JSON.stringify(row[header]) // 기타 객체 데이터를 표시
                        )
                      ) : (
                        <span>{row[header] as string | number}</span>
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
