export function promisify<T extends Function, R>(callbackFn: T) {
  return (...args: any[]): Promise<R> => {
    return new Promise((resolve, reject) => {
      callbackFn(...args, (err: any, result: R) => {
        if (err) return reject(err);
        resolve(result);
      });
    });
  };
}
