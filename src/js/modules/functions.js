// проверка поддержки webp, добавлеение класса webp или no-webp для HTML

export function isWebp() {
  // проверка поддержки webp

  function testWebp(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src = 'data:image/webp';
  }

  //  добавление класса _wrbp или _no-webp для HTML

  testWebp(function (support) {
    let className = support === true ? 'webp' : 'no-webp';
    document.documentElement.classList.add(className);
  });
}
