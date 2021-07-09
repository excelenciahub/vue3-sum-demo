
export default {
    state: {
        count: 0
    },
    getters: {
        getCount: (state: any) => state.count
    },
    mutations: {
        UPDATE_COUNT(state: any, value: number) {
            state.count = value;
        }
    },
    actions: {
        updateCount(ctx: any, value: number) {
            ctx.commit("UPDATE_COUNT", value)
        }
    }
}