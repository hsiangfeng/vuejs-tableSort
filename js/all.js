var app = new Vue({
  el: '#app',
  data: {
    data: [
      {
        name: '巧呼呼蘇打水',
        price: 30,
        expiryDate: 90
      },
      {
        name: '心驚膽跳羊肉飯',
        price: 65,
        expiryDate: 2
      },
      {
        name: '郭師傅武功麵包',
        price: 32,
        expiryDate: 1
      },
      {
        name: '不太會過期的新鮮牛奶',
        price: 75,
        expiryDate: 600
      },
      {
        name: '金殺 巧粒粒',
        price: 120,
        expiryDate: 200
      }
    ],
    sortName: '',
    isRotateValue: false
  },
  // 請在此撰寫 JavaScript
  computed: {
    sortData: function () {
      var vm = this
      if (vm.isRotateValue) {
        return vm.data.sort(function sortNumber (a, b) {
          return b[vm.sortName] - a[vm.sortName]
        })
      } else if (!vm.isRotateValue) {
        return vm.data.sort(function sortNumber (a, b) {
          return a[vm.sortName] - b[vm.sortName]
        })
      }
    }
  }
})
