const app = Vue.createApp({
  // dataオブジェクト（アプリの全体状態を管理）
  data: () => ({
    // プロパティ
    newItem: '',
    tasks: []
  }),
  methods: {
    addItem: function(event) {
      if (this.newItem === '') return // 空文字だったら処理しない
      // taskオブジェクトの作成
      let task = {
        item: this.newItem,
        isDone: false,
        deadLine: ''
      }
      // tasks配列に追加
      this.tasks.push(task)
      this.newItem = ''
    }
  }
})

app.mount('#app')