const app = Vue.createApp({
  // dataオブジェクト（アプリの全体状態を管理）
  data: () => ({
    // プロパティ
    newItem: '',
    tasks: []
  }),
  // 算出プロパティ（処理した結果を返す）
  computed: {
    incompleteTasks() {
      return this.tasks.filter(task => !task.isDone)
    },
    completeTasks() {
      return this.tasks.filter(task => task.isDone)
    },
  },
  methods: {
    addItem: function(event) {
      if (this.newItem === '') return // 空文字だったら処理しない
      // taskオブジェクトの作成
      let task = {
        id: Date.now(), // 一意なID
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