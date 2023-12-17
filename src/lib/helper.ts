export const sleep = (time: number = 1000) =>
  new Promise((resolve) => setTimeout(resolve, time));

export function debounce<T extends (...args: any[]) => void>(
  func: T,
  wait: number = 1000
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | undefined;
  return function (this: ThisParameterType<T>, ...args: Parameters<T>): void {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

export function throttle<T extends (...args: any[]) => void>(
  func: T,
  wait: number = 1000
): (...args: Parameters<T>) => void {
  let inThrottle: boolean = false;
  return function (this: ThisParameterType<T>, ...args: Parameters<T>): void {
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, wait);
    }
  };
}
