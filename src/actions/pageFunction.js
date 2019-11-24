// axios 사용 x page 관리 위한 함수들

// action type
export const RESIZE = "resize";

// 페이지 크기
export const FULLNAV = 0;
export const SUBNAV = 1;

// 페이지 크기 조절
export function resize(size) {
  return {
    type: RESIZE,
    payload: size
  };
}

// nav index
export const PROJECTSPACE = 1;
export const NOTICE = 2;
export const SETTING = 3;
