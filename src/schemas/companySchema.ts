import { z } from "zod";

export const companySchema = z.object({
  businessNumber: z
    .string()
    .min(10, "사업자등록번호는 10자 이상이어야 합니다.")
    .max(12, "사업자등록번호는 12자 이하여야 합니다."),
  companyName: z.string().min(2, "기업명은 최소 2자 이상 입력해야 합니다."),
  displayName: z.string().optional(),
  representativeName: z.string().min(2, "대표자명은 최소 2자 이상 입력해야 합니다."),
  businessType: z.string(),
  businessItem: z.string(),
  phoneNumber: z.string().min(10, "전화번호는 최소 10자 이상 입력해야 합니다."),
  businessAddress: z.string(),
  businessDetailAddress: z.string(), // ✅ 상세 주소 추가
  businessZipCode: z.string().min(5, "우편번호는 최소 5자 이상 입력해야 합니다."),
  shippingAddress: z.string(),
  shippingDetailAddress: z.string(), // ✅ 배송지 상세 주소 추가
  shippingZipCode: z.string().min(5, "우편번호는 최소 5자 이상 입력해야 합니다."),

  // 대표 관리자 정보
  adminName: z.string().min(2, "관리자명은 최소 2자 이상 입력해야 합니다."),
  adminEmail: z.string().email("올바른 이메일 형식이 아닙니다."),
  adminPhone: z.string().min(10, "전화번호는 최소 10자 이상 입력해야 합니다."),
});

// TypeScript에서 사용할 타입 정의
export type CompanyFormData = z.infer<typeof companySchema>;
