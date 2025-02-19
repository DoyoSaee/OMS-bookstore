export const getSupplyPrice = (retailPrice: number, supplyRate: number) => {
  return Math.floor(retailPrice * (supplyRate / 100));
};
