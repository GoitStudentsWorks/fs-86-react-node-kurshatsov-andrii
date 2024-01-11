import { createSlice } from '@reduxjs/toolkit';
import {
  deleteExercise,
  deleteProduct,
  getDiaryList,
  addDiaryProduct,
  addExercise,
} from './operations';

const contactsInitialValue = {
  isLoading: false,
  error: null,
  productsAndExercisesError: null,
  burnedCalories: 0,
  consumedCalories: 0,
  doneExercisesTime: 0,
  products: [],
  exercises: [],
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleFullfield = (state) => {
  state.isLoading = false;
  state.error = null;
};

const handleRejected = (state, payload) => {
  state.isLoading = true;
  state.error = payload.error;
};

const diary = createSlice({
  name: 'diary',
  initialState: contactsInitialValue,
  extraReducers: (builder) => {
    builder.addCase(getDiaryList.pending, handlePending);
    builder.addCase(getDiaryList.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.products = payload.products || [];
      state.exercises = payload.exercises || [];
      state.burnedCalories = payload.burnedCalories || 0;
      state.consumedCalories = payload.consumedCalories || 0;
      state.doneExercisesTime = payload.doneExercisesTime || 0;
    });
    builder.addCase(getDiaryList.rejected, (state, { payload }) => {
      state.productsAndExercisesError = payload;
      state.isLoading = false;
      state.products = [];
      state.exercises = [];
    });

    builder.addCase(addDiaryProduct.pending, handlePending);
    builder.addCase(addDiaryProduct.fulfilled, (state, action) => {
      handleFullfield(state);
      state.products = action.payload;
    });
    builder.addCase(addDiaryProduct.rejected, handleRejected);

    builder.addCase(addExercise.pending, handlePending);
    builder.addCase(addExercise.fulfilled, (state, action) => {
      handleFullfield(state);
      state.exercises = action.payload;
    });
    builder.addCase(addExercise.rejected, handleRejected);

    builder.addCase(deleteProduct.pending, handlePending);
    builder.addCase(deleteProduct.fulfilled, (state, { payload }) => {
      handleFullfield(state);
      const newProductsList = state.products.filter(
        (product) => product._id !== payload
      );
      state.products = newProductsList;
    });
    builder.addCase(deleteProduct.rejected, handleRejected);

    builder.addCase(deleteExercise.pending, handlePending);
    builder.addCase(deleteExercise.fulfilled, (state, { payload }) => {
      handleFullfield(state);
      const newExercisesList = state.exercises.filter(
        (exercise) => exercise._id !== payload
      );
      state.exercises = newExercisesList;
    });
    builder.addCase(deleteExercise.rejected, handleRejected);
  },
});

export const diaryReducer = diary.reducer;
