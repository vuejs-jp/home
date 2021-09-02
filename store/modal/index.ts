import type { ActionTree, ActionContext, MutationTree } from 'vuex'

export interface State {
  name: string | null
  data: Record<string, any>
}

export interface PayloadOpen {
  name: string
  data?: Record<string, any>
}

export const state: () => State = () => ({
  name: null,
  data: {}
})

export const actions: ActionTree<State, any> = {
  open (ctx: ActionContext<State, any>, payload: PayloadOpen): void {
    ctx.dispatch('backdrop/show', null, { root: true })

    ctx.commit('open', payload)
  },

  close (ctx: ActionContext<State, any>): void {
    ctx.commit('close')

    ctx.dispatch('backdrop/hide', null, { root: true })
  }
}

export const mutations: MutationTree<State> = {
  open (state: State, payload: PayloadOpen): void {
    state.name = payload.name
    state.data = payload.data || {}
  },

  close (state: State): void {
    state.name = null
    state.data = {}
  }
}
