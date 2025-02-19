"use client";

import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import { companySchema, CompanyFormData } from "@/schemas/companySchema";
import FormField from "@/components/ui/form/formfield";
import Button from "@/components/ui/button/Button";

export default function CompanyForm() {
  const initialFormData: CompanyFormData = {
    businessNumber: "110-1234-123456",
    companyName: "북스파이더",
    displayName: "(주)북스파이더",
    representativeName: "김북스",
    businessType: "출판사",
    businessItem: "출판",
    phoneNumber: "010-1234-1234",
    businessAddress: "파주시 파주읍 날개리123",
    businessDetailAddress: "북스파이더 1층",
    businessZipCode: "13450",
    shippingAddress: "파주시 파주읍 날개리123",
    shippingDetailAddress: "북스파이더 1층",
    shippingZipCode: "13450",
    adminName: "김관리자",
    adminEmail: "kim@bookspider.com",
    adminPhone: "010-1234-1234",
  };

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<CompanyFormData>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});

  console.log(errors)
  // 주소 검색 API (우편번호 팝업 호출)
    const handleAddressSearch = (type: "business" | "shipping") => {
    console.log(`${type} 주소 검색 버튼 클릭`);

    // 예제 데이터 (API 연동 필요)
    const mockData = {
      address: "서울특별시 강남구 테헤란로 123",
      zipCode: "06100",
    };

    if (type === "business") {
      setFormData({
        ...formData,
        businessAddress: mockData.address,
        businessZipCode: mockData.zipCode,
      });
    } else if (type === "shipping") {
      setFormData({
        ...formData,
        shippingAddress: mockData.address,
        shippingZipCode: mockData.zipCode,
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const result = companySchema.safeParse(formData);
    if (!result.success) {
      const formattedErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) formattedErrors[err.path[0]] = err.message;
      });
      setErrors(formattedErrors);
      return;
    }

    console.log("저장된 데이터:", formData);
    setErrors({});
    setIsEditing(false);
  };

  const handleCancel = () => {
    setErrors({});
    setFormData(initialFormData);
    setIsEditing(false);
  };

  return (
    <ComponentCard 
      title="기본 정보"
      action={
        isEditing ? (
          <div className="flex gap-3">
            <button onClick={handleCancel} className="px-4 py-2 text-sm text-gray-700 bg-gray-200 rounded-lg">
              취소
            </button>
            <button onClick={handleSave} className="px-4 py-2 text-sm text-white bg-blue-500 rounded-lg">
              저장
            </button>
          </div>
        ) : (
          <button onClick={() => setIsEditing(true)} className="px-4 py-2 text-sm text-white bg-blue-500 rounded-lg">
            수정
          </button>
        )
      }
    >
      <div className="space-y-6">
        {/* 기업 정보 입력 */}
        <FormField label="사업자등록번호" name="businessNumber" disabled={!isEditing} value={formData.businessNumber} onChange={handleInputChange} />
        <FormField label="기업명" name="companyName" disabled={!isEditing} value={formData.companyName} onChange={handleInputChange} />
        <FormField label="기업명(출력명)" name="displayName" disabled={!isEditing} value={formData.displayName} onChange={handleInputChange} />
        <FormField label="대표자명" name="representativeName" disabled={!isEditing} value={formData.representativeName} onChange={handleInputChange} />

        {/* 사업자등록상 소재지 */}
        {!isEditing ? (
          <>
          <FormField label="사업자등록상 소재지" name="businessAddress" disabled={!isEditing} value={`${formData.businessAddress} ${formData.businessDetailAddress}`}onChange={handleInputChange} />
          <FormField label="사업자등록상 우편번호" name="businessZipCode" disabled={!isEditing} value={formData.businessZipCode || ""} onChange={handleInputChange} />       
        </>
        ) : (
          <>
            <div className="flex items-center w-full">
              <FormField label="사업자등록상 소재지" name="businessAddress" disabled={!isEditing} value={formData.businessAddress} onChange={handleInputChange} />
              <Button onClick={() => handleAddressSearch("business")} size="sm" variant="outline" className=" rounded-lg w-20 ml-5 !h-9">
                검색
              </Button>
            </div>
            <FormField label="사업자등록상 소재지(상세)" name="businessDetailAddress" disabled={!isEditing} value={formData.businessDetailAddress} onChange={handleInputChange} />
            <FormField label="사업자등록상 우편번호" name="businessZipCode" disabled={!isEditing} value={formData.businessZipCode || ""} onChange={handleInputChange} />       
            </>
        )}

        {/* 배송지 */}
        {!isEditing ? (
          <>
            <FormField label="주소(배송지)" name="shippingAddress" disabled={!isEditing} value={`${formData.shippingAddress} ${formData.shippingDetailAddress}`} onChange={handleInputChange} />
            <FormField label="우편번호(배송지)" name="shippingZipCode" disabled={!isEditing} value={formData.shippingZipCode || ""} onChange={handleInputChange} />
          </>
        ) : (
          <>
            <div className="flex items-center">
              <FormField label="주소(배송지)" name="shippingAddress" disabled={!isEditing} value={formData.shippingAddress} onChange={handleInputChange} />
              <Button onClick={() => handleAddressSearch("shipping")} size="sm" variant="outline" className=" rounded-lg w-20 ml-5 !h-9">
                검색
              </Button>
            </div>
            <FormField label="주소(배송지 상세)" name="shippingDetailAddress" disabled={!isEditing} value={formData.shippingDetailAddress} onChange={handleInputChange} />
            <FormField label="우편번호(배송지)" name="shippingZipCode" disabled={!isEditing} value={formData.shippingZipCode || ""} onChange={handleInputChange} />
          </>
        )}

        {/* 대표 관리자 정보 */}
        <ComponentCard title="대표 관리자 정보">
          <FormField label="관리자명" name="adminName" disabled={!isEditing} value={formData.adminName} onChange={handleInputChange} />
          <FormField label="이메일" name="adminEmail" disabled={!isEditing} value={formData.adminEmail} onChange={handleInputChange} />
          <FormField label="전화번호" name="adminPhone" disabled={!isEditing} value={formData.adminPhone} onChange={handleInputChange} />
        </ComponentCard>
      </div>
    </ComponentCard>
  );
}
