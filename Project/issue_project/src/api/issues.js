import { Axios } from "./@core";

const PATH = "/repos/angular/angular-cli/issues";

const IssuesApi = {
  getIssueList(issue) {
    return Axios.get(PATH, {
      params: {
        per_page: issue.perPage,
        page: issue.offset,
        sort: issue.sortState,
      },
    });
  },
  getAnIssue(id) {
    return Axios.get(PATH + `/${id}`);
  },
};

export default IssuesApi;
