import { ActionTree, ActionContext } from 'vuex'

export interface PayloadOpen {
  title: string
}

export const actions: ActionTree<any, any> = {
  open (ctx: ActionContext<any, any>, payload: PayloadOpen): void {
    const data = {
      name: 'dialog',
      data: payload
    }

    ctx.dispatch('modal/open', data, { root: true })
  }
}
