"use client";

import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Button from "@/components/ui/button/Button";
import BrandModal from "@/components/modal/brand-modal";

export default function BrandPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">브랜드 관리</h1>
      
      <ComponentCard title="브랜드 목록">
        <Button onClick={() => setIsModalOpen(true)}>브랜드 추가</Button>
      </ComponentCard>

      {/* ✅ `BrandModal`을 올바르게 사용 */}
      <BrandModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
