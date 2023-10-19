// export const getTasks = state => state.tasks;

// export const getStatusFilter = state => state.filters.status;

// export const getTasks = state => state.tasks.items;
// export const getIsLoading = state => state.tasks.isLoading;
// export const getError = state => state.tasks.error;
// export const getStatusFilter = state => state.filters.status;

export const selectTasks = state => state.tasks.items;
export const selectIsLoading = state => state.tasks.isLoading;
export const selectError = state => state.tasks.error;
export const selectStatusFilter = state => state.filters.status;
