import { ActionTree, ActionContext } from 'vuex'

export interface PayloadOpen {
  type: 'success' | 'error'
  title: string
  text: string
}

export const actions: ActionTree<any, any> = {
  open (ctx: ActionContext<any, any>, payload: PayloadOpen): void {
    const data = {
      name: 'alert',
      data: payload
    }

    ctx.dispatch('modal/open', data, { root: true })
  },

  close (ctx: ActionContext<any, any>): void {
    ctx.dispatch('modal/close', null, { root: true })
  }
}
