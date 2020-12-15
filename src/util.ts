const getYearMonth = (): string => {
  return Utilities.formatDate(new Date(), 'Asia/Tokyo', 'yyyy-MM');
}

const getMonthDate = (): string => {
  return Utilities.formatDate(new Date(), 'Asia/Tokyo', 'MM/dd');
}

export {
  getYearMonth,
  getMonthDate,
}
