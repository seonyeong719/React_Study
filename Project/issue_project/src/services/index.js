import { combineReducers } from "@reduxjs/toolkit";
import { issueSlice } from "./issueList";
import { getAnIssueSlice } from "./issueDetail";

// 바로 store에 할당 해줘도 되지만, 리듀서를 한번에 모아서 써줌.
export const rootReducer = combineReducers({
  issue: issueSlice.reducer,
  anIssue: getAnIssueSlice.reducer,
});
