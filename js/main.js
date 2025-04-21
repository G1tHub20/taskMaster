const app = Vue.createApp({
  // dataオブジェクト（アプリの全体状態を管理）
  data: () => ({
    // プロパティ
    newItem: '',
    tasks: []
  }),
  watch: {
    tasks: { // tasksの変更を監視してhandler内の関数を実行
      handler(newTasks) {
        // console.log('watch発火')
        localStorage.setItem('tasks', JSON.stringify(newTasks))
      },
      deep: true //tasksの中のオブジェクトの変更も検知
    }
  },
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
      // localStorage.setItem('tasks',JSON.stringify(this.tasks))
      this.newItem = ''
    }
  },
  // インスタンス生成直後に実行
  created() {
    const storedTasks = localStorage.getItem('tasks')
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks)
    }
  }
})

app.mount('#app')