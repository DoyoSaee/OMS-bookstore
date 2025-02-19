"use client";

import React, { useState } from "react";
import Button from "@/components/ui/button/Button";
import BrandModal from "@/components/modal/brand-modal";

export default function InviteBrandPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">브랜드 초대</h1>
      <Button onClick={() => setIsModalOpen(true)}>브랜드 추가</Button>

      {/* ✅ `BrandModal`을 페이지가 아닌 컴포넌트로 사용 */}
      <BrandModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
