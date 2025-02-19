"use client";

import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import Button from "@/components/ui/button/Button";

interface BrandModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// ✅ 개별 라벨 + 입력 필드 컴포넌트
function LabeledInput({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2">
      <label className="whitespace-nowrap text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <Input placeholder={`${label}을 입력하세요`} />
    </div>
  );
}

export default function BrandModal({ isOpen, onClose }: BrandModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>브랜드 추가</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {["입력 1", "입력 2", "입력 3", "입력 4"].map((label, index) => (
            <LabeledInput key={index} label={label} />
          ))}
        </div>

        <DialogFooter className="flex justify-end gap-2 mt-4">
          <Button variant="outline" onClick={onClose}>
            취소
          </Button>
          <Button variant="primary">저장</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
