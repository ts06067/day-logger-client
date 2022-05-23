export const parseDate = function (str) {
  //from YYYYMMDD
  const year = parseInt(str.substring(0, 4));
  const month = parseInt(str.substring(4, 6)) - 1; //0-indexed;
  const date = parseInt(str.substring(6, 8));
  return new Date(year, month, date);
};

export const dateTo8DStr = function (d) {
  //to YYYYMMDD
  const year = d.getFullYear();
  let month = d.getMonth() + 1;
  month = month < 10 ? "0" + month : month;
  const date = d.getDate();
  return "" + year + month + date;
};

export const onFalseError = function (e, msg) {
  if (!e) {
    throw Error("msg");
  }
};
