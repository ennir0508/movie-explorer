/**
 * 文字列のn文字目以降を"..."で省略する
 * @param { string } str 対象の文字列
 * @param { number } n 表示文字数
 * @returns 省略後の文字列
 */
export const truncate = (str: any, n: number) => {
  if (str != undefined) {
    return str.length > n ? str?.substr(0, n - 1) + "..." : str;
  }
};

/**
 * 対象の文字列 `str` がnullかどうか
 * @param { string } str 対象の文字列
 * @returns `null` => `true`, `null`でない => `false`
 */
export const isNull = (str: any) => {
  if (str == undefined || str == null) {
    return true;
  }
  return false;
};

/**
 * 対象の文字列 `str` が空かどうか
 * @param { string } str 対象の文字列
 * @returns `空` => `true`, `空`でない => `false`
 */
export const isEmpty = (str: any) => {
  if (isNull(str) || str === "") {
    return true;
  }
};
