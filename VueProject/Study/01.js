
const App = {
    data() {
      return {
        posts: [
          { id: 1, title: 'My journey with Vue' },
          { id: 2, title: 'Blogging with Vue' },
          { id: 3, title: 'Why Vue is so fun' }
        ]
      }
    },
    mounted() {
        console.log(this.posts);
    }
  }
  
  window.onload = function() {
    const app = Vue.createApp(App)
  
    let vm = app.component('blog-post', {
        props: ['title'],
        template: `<h4>{{ posts }}</h4>`
    })

    // console.log(vm.title);
    
    app.mount('#blog-posts-demo')
  };
  






