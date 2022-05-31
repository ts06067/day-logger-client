export const parseUniqueName = function (name) {
  const idx = name.indexOf("-");
  if (idx === -1) {
    return name;
  }
  return name.slice(0, name.indexOf("-"));
};

export const isSameDay = function (a, b) {
  // b > a
  const dateA = a.getDate();
  const dateB = b.getDate();
  const dayToMS = 60 * 60 * 24 * 1000;
  return dateA === dateB && (b - a < dayToMS || a - b < dayToMS);
};

export const getOClock = function () {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const date = now.getDate();
  return new Date(year, month, date);
};

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

export const dateTo8DStrHyphen = function (d) {
  //to YYYY-MM-DD
  const year = d.getFullYear();
  let month = d.getMonth() + 1;
  month = month < 10 ? "0" + month : month;
  const date = d.getDate();
  return "" + year + "-" + month + "-" + date;
};

export const onFalseError = function (e, msg) {
  if (!e) {
    throw Error("msg");
  }
};
