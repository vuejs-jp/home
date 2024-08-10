import type { ActionTree, ActionContext, MutationTree } from 'vuex'

export interface State {
  show: boolean
}

export const state = () => ({
  show: false
})

export const actions: ActionTree<State, any> = {
  show (ctx: ActionContext<State, any>): void {
    ctx.commit('show')
  },

  hide (ctx: ActionContext<State, any>): void {
    ctx.commit('hide')
  }
}

export const mutations: MutationTree<State> = {
  show (state: State): void {
    state.show = true
  },

  hide (state: State): void {
    state.show = false
  }
}
