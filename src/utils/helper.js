export const parseUniqueName = function (name) {
  const idx = name.indexOf("-");
  if (idx === -1) {
    return name;
  }
  return name.slice(0, name.indexOf("-"));
};

export const isSameDay = function (a, b) {
  // b > a
  const yearA = a.getFullYear();
  const yearB = b.getFullYear();
  const monthA = a.getMonth();
  const monthB = b.getMonth();
  const dateA = a.getDate();
  const dateB = b.getDate();

  return yearA === yearB && monthA === monthB && dateA === dateB;
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

export const dateTo8DStrSlash = function (d) {
  //to YYYY/MM/DD
  const year = d.getFullYear();
  let month = d.getMonth() + 1;
  const date = d.getDate();
  return "" + month + "/" + date + "/" + year;
};

export const onFalseError = function (e, msg) {
  if (!e) {
    throw Error("msg");
  }
};
