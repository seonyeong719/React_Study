import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import IssuesApi from "../api/issues";

const initialState = {
  issues: {},
  getAnIssuesState: {
    loading: false,
    done: false,
    err: null,
  },
};

export const getAnIssue = createAsyncThunk(`issues/getAnIssue`, async (id) => {
  const res = await IssuesApi.getAnIssue(id);
  console.log(res.data);
  return res.data;
});

export const getAnIssueSlice = createSlice({
  name: "anIssue",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAnIssue.pending, (state) => {
      state.getAnIssuesState.loading = true;
    });

    builder.addCase(getAnIssue.fulfilled, (state, action) => {
      state.issues = action.payload;
      state.getAnIssuesState.loading = false;
      state.getAnIssuesState.done = true;
      state.getAnIssuesState.err = null;
    });

    builder.addCase(getAnIssue.rejected, (state, action) => {
      state.getAnIssuesState.loading = false;
      state.getAnIssuesState.done = true;
      state.getAnIssuesState.err = action.payload;
    });
  },
});
