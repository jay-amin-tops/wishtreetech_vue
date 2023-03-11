import { Post, thisMonth, thisWeek, today } from "@/posts";
import { defineStore } from "pinia";

interface PostsState{
    ids:string[],
    all:Map<string, Post>
}
export const usePosts = defineStore("posts",{
    state:():PostsState=>({
        ids:[today.id,thisWeek.id,thisMonth.id],
        all:new Map([
            [today.id, today],
            [thisWeek.id, thisWeek],
            [thisMonth.id, thisMonth],
        ])
    }),
    actions:{
        // ... 
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