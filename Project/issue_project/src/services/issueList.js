import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import IssuesApi from "../api/issues";

const initialState = {
  issues: [],
  getIssuesState: {
    loading: false,
    done: false,
    err: null,
  },
};

export const getIssue = createAsyncThunk(`issues/getIssue`, async () => {
  const res = await IssuesApi.getIssueList();
  console.log(res.data);
  return res.data;
});

export const issueSlice = createSlice({
  name: "issue",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getIssue.pending, (state) => {
      state.getIssuesState.loading = true;
    });
    builder.addCase(getIssue.fulfilled, (state, action) => {
      state.issues = action.payload;
      state.getIssuesState.loading = false;
      state.getIssuesState.done = true;
      state.getIssuesState.err = null;
    });
    builder.addCase(getIssue.rejected, (state, action) => {
      state.getIssuesState.loading = false;
      state.getIssuesState.done = true;
      state.getIssuesState.err = action.payload;
    });
  },
});
