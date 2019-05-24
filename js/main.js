(function (document) {
  const $tabItem1 = document.querySelector('.tab1');
  const $tabItem2 = document.querySelector('.tab2');
  const $tabItem3 = document.querySelector('.tab3');

  const $tabContent1 = document.querySelector('.tab-content-1');
  const $tabContent2 = document.querySelector('.tab-content-2');
  const $tabContent3 = document.querySelector('.tab-content-3');

  $tabItem1.addEventListener('click', function () {
    changeActiveTab(1);
  });
  $tabItem2.addEventListener('click', function () {
    changeActiveTab(2);
  });
  $tabItem3.addEventListener('click', function () {
    changeActiveTab(3);
  });

  function changeActiveTab(tabNumber) {
    switch (tabNumber) {
      case 1:
        $tabItem2.classList.remove('tab-active');
        $tabItem3.classList.remove('tab-active');
        $tabItem1.classList.add('tab-active');
        $tabContent2.classList.remove('tab-content-active');
        $tabContent3.classList.remove('tab-content-active');
        $tabContent1.classList.add('tab-content-active');
        break;

      case 2:
        $tabItem1.classList.remove('tab-active');
        $tabItem3.classList.remove('tab-active');
        $tabItem2.classList.add('tab-active');
        $tabContent1.classList.remove('tab-content-active');
        $tabContent3.classList.remove('tab-content-active');
        $tabContent2.classList.add('tab-content-active');
        break;

      case 3:
        $tabItem1.classList.remove('tab-active');
        $tabItem2.classList.remove('tab-active');
        $tabItem3.classList.add('tab-active');
        $tabContent1.classList.remove('tab-content-active');
        $tabContent2.classList.remove('tab-content-active');
        $tabContent3.classList.add('tab-content-active');
        break;

      default:
        break;
    }
  }
})(document);