import { defineStore } from "pinia";

interface PostsState{
    foo:string
}
export const usePosts = defineStore("posts",{
    state:():PostsState=>({
        foo:"checking for foo"
    }),
    actions:{
        updateFoo(anything:string){
            this.foo = anything
        }
    }
})      




// import { reactive, readonly } from "vue";

// // ref number, string
// // computed
// // reactive {}, Map, Set

// interface PostsState {
//   foo: string;
// }
// export class PostsStore {
//   #state: PostsState;

//   constructor() {
//     this.#state = reactive<PostsState>({
//       foo: "foo",
//     });
//   }

//   getState() {
//     return readonly(this.#state);
//   }
//   updateFoo(foo:string){
//     this.#state.foo = foo
//   }
// }
// const store = new PostsStore()

// export function usePosts(){
//     return store
// }