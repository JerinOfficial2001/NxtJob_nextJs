export const generateStyleByPercent = (percent) => {
    if (percent >= 75) {
      return "bg-[#D1FAE5] text-[#059669]";
    } else if (percent < 75 && percent > 50) {
      return "bg-[#FEE2E2] text-[#FBBD4E]";
    } else if (percent <= 50 && percent > 0) {
      return "bg-[#FEE2E2] text-[#B91C1C]";
    } else if (
      percent === null ||
      percent === undefined ||
      percent === "" ||
      percent === 0
    ) {
      return false;
    }
  };