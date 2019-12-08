export function getSystemInfo() {
  return new Promise(resolve => {
    my.getSystemInfo({
      success: (res) => {
        resolve(res);
      }
    })
  })
}