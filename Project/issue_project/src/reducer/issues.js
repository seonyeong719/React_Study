import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import IssuesApi from "../api/issues";

const initialState = {
  issues: [],
  getAnIssuesState: {
    loading: false,
    done: false,
    err: null,
  },
};

// 썽크로 미들웨어로 빼주고, 슬라이스에 사용을 하는거 같은데,
export const getAnIssue = createAsyncThunk(`issues/getAnIssue`, async (issue) => {
  const res = await IssuesApi.getAnIssue(issue);
  return res.data;
});

export const getAnIssueSlice = createSlice({
  name: "anIssue", // 이건 슬라이스의 이름을 지정해 줌
  initialState, // 이걸 써줘야 위에 선언한 이니셜스테이트를 사용할 수 있나.?
  extraReducers: (builder) => {
    builder.addCase(getAnIssueSlice.pending, (state) => {
      state.getAnIssuesState.loading = true; // state 를 initialState라고 생각하면 됨.
    });

    builder.addCase(getAnIssueSlice.fulfilled, (state, action) => {
      state.issues = action.payload; // 이걸 왜 해주는지 잘 모르겠다. fulfiiled가 성공이니깐 성공했을때 값을 보여줘야 하니 넣은듯..?
      // reject 에서는 state.getAnIssuesState.err에서 액션 페이로드로 보내줬는데 왜 fulfiiled에서는 따로 저걸 해주지?
      // 성공했으니 initialState에 issues의 빈 배열에 성공한 것만 집어 넣어줘야 하니깐? 맞나요?

      state.getAnIssuesState.loading = false; // 로딩이 끝난 시점이니 false.
      state.getAnIssuesState.done = true; //다 했다 true.
      state.getAnIssuesState.err = null; //err 가 아니니깐 null.
    });

    builder.addCase(getAnIssueSlice.rejected, (state, action) => {
      state.getAnIssuesState.loading = false;
      state.getAnIssuesState.done = true;
      state.getAnIssuesState.err = action.payload; // reject는 실패시 값을 보여줘야 하니 action.payload 사용.
    });
  },
});
