export const getDiscount = (discount: number) => {
  return typeof discount === "number" ? `${discount}%` : "";
};
