import { Request, Response } from './payload';
import { stringify as qs } from './query-string';
import { TestRailException } from './TestRailException';

export * from './payload';
export type { Request as Payload, Response as Model };

class TestRail {
  static Exception = TestRailException;
  private readonly username?: string;
  private readonly password?: string;
  private readonly baseURL: string;

  constructor(config?: { host: string; username: string; password: string }) {
    // @ts-ignore - Backward compatibility
    this.username = config?.username || config?.user;
    this.password = config?.password;
    this.baseURL = (config?.host || '') + '/index.php?/api/v2/';
  }

  // Attachments

  addAttachmentToCase(caseId: number, payload: Request.AddAttachment): Promise<Response.CreatedAttachment> {
    return this._api('POST', `add_attachment_to_case/${caseId}`, { form: { attachment: payload } });
  }

  addAttachmentToPlan(planId: number, payload: Request.AddAttachment): Promise<Response.CreatedAttachment> {
    return this._api('POST', `add_attachment_to_plan/${planId}`, { form: { attachment: payload } });
  }

  addAttachmentToPlanEntry(planId: number, entryId: string, payload: Request.AddAttachment): Promise<Response.CreatedAttachment> {
    return this._api('POST', `add_attachment_to_plan_entry/${planId}/${entryId}`, { form: { attachment: payload } });
  }

  addAttachmentToResult(resultId: number, payload: Request.AddAttachment): Promise<Response.CreatedAttachment> {
    return this._api('POST', `add_attachment_to_result/${resultId}`, { form: { attachment: payload } });
  }

  addAttachmentToRun(runId: number, payload: Request.AddAttachment): Promise<Response.CreatedAttachment> {
    return this._api('POST', `add_attachment_to_run/${runId}`, { form: { attachment: payload } });
  }

  getAttachmentsForCase(caseId: number, filters?: Request.Pagination): Promise<Response.AttachmentForCase[]> {
    return pagination('attachments', filters, (filters) => {
      return this._api('GET', `get_attachments_for_case/${caseId}`, { query: filters });
    });
  }

  getAttachmentsForPlan(planId: number, filters?: Request.Pagination): Promise<Response.AttachmentForPlan[]> {
    return pagination('attachments', filters, (filters) => {
      return this._api('GET', `get_attachments_for_plan/${planId}`, { query: filters });
    });
  }

  getAttachmentsForPlanEntry(planId: number, entryId: string): Promise<Response.AttachmentForPlanEntry[]> {
    return this._api('GET', `get_attachments_for_plan_entry/${planId}/${entryId}`);
  }

  getAttachmentsForRun(runId: number, filters?: Request.Pagination): Promise<Response.AttachmentForRun[]> {
    return pagination('attachments', filters, (filters) => {
      return this._api('GET', `get_attachments_for_run/${runId}`, { query: filters });
    });
  }

  getAttachmentsForTest(testId: number): Promise<Response.AttachmentForTest[]> {
    return this._api('GET', `get_attachments_for_test/${testId}`);
  }

  getAttachment(attachmentId: string): Promise<Blob> {
    return this._api('GET', `get_attachment/${attachmentId}`);
  }

  deleteAttachment(attachmentId: string): Promise<void> {
    return this._api('POST', `delete_attachment/${attachmentId}`);
  }

  // Cases

  getCase(caseId: number): Promise<Response.Case> {
    return this._api('GET', `get_case/${caseId}`);
  }

  getCases(projectId: number, filters?: Request.CaseFilters): Promise<Response.Case[]> {
    return pagination('cases', filters, (filters) => {
      return this._api('GET', `get_cases/${projectId}`, { query: filters });
    });
  }

  getHistoryForCase(caseId: number, filters?: Request.Pagination): Promise<Response.CaseHistory[]> {
    return pagination('history', filters, (filters) => {
      return this._api('GET', `get_history_for_case/${caseId}`, { query: filters });
    });
  }

  addCase(sectionId: number, payload: Request.AddCase): Promise<Response.Case> {
    return this._api('POST', `add_case/${sectionId}`, { json: payload });
  }

  copyCasesToSection(sectionId: number, payload: Request.CopyCasesToSection): Promise<void> {
    return this._api('POST', `copy_cases_to_section/${sectionId}`, { json: payload });
  }

  updateCase(caseId: number, payload: Request.UpdateCase): Promise<Response.Case> {
    return this._api('POST', `update_case/${caseId}`, { json: payload });
  }

  updateCases(suiteId: number, payload: Request.UpdateCases): Promise<void> {
    return this._api('POST', `update_cases/${suiteId}`, { json: payload });
  }

  moveCasesToSection(sectionId: number, payload: Request.MoveCasesToSection): Promise<void> {
    return this._api('POST', `move_cases_to_section/${sectionId}`, { json: payload });
  }

  deleteCase(caseId: number): Promise<void> {
    return this._api('POST', `delete_case/${caseId}`);
  }

  deleteCases(suiteId: number, payload: Request.DeleteCases): Promise<void> {
    return this._api('POST', `delete_cases/${suiteId}`, { json: payload });
  }

  // Case Fields

  getCaseFields(): Promise<Response.CaseField[]> {
    return this._api('GET', 'get_case_fields');
  }

  addCaseField(payload: Request.AddCaseField): Promise<Response.CaseField> {
    return this._api('POST', 'add_case_field', { json: payload });
  }

  // Case Types

  getCaseTypes(): Promise<Response.CaseType[]> {
    return this._api('GET', 'get_case_types');
  }

  // Configurations

  getConfigs(projectId: number): Promise<Response.Config[]> {
    return this._api('GET', `get_configs/${projectId}`);
  }

  addConfigGroup(projectId: number, payload: Request.AddConfigGroup): Promise<Response.Config> {
    return this._api('POST', `add_config_group/${projectId}`, { json: payload });
  }

  addConfig(configGroupId: number, payload: Request.AddConfig): Promise<Response.ConfigItem> {
    return this._api('POST', `add_config/${configGroupId}`, { json: payload });
  }

  updateConfigGroup(configGroupId: number, payload: Request.UpdateConfigGroup): Promise<Response.Config> {
    return this._api('POST', `update_config_group/${configGroupId}`, { json: payload });
  }

  updateConfig(configId: number, payload: Request.UpdateConfig): Promise<Response.ConfigItem> {
    return this._api('POST', `update_config/${configId}`, { json: payload });
  }

  deleteConfigGroup(configGroupId: number): Promise<void> {
    return this._api('POST', `delete_config_group/${configGroupId}`);
  }

  deleteConfig(configId: number): Promise<void> {
    return this._api('POST', `delete_config/${configId}`);
  }

  // Milestones

  getMilestone(milestoneId: number): Promise<Response.Milestone> {
    return this._api('GET', `get_milestone/${milestoneId}`);
  }

  getMilestones(projectId: number, filters?: Request.MilestoneFilters): Promise<Response.Milestone[]> {
    return pagination('milestones', filters, (filters) => {
      return this._api('GET', `get_milestones/${projectId}`, { query: filters });
    });
  }

  addMilestone(projectId: number, payload: Request.AddMilestone): Promise<Response.Milestone> {
    return this._api('POST', `add_milestone/${projectId}`, { json: payload });
  }

  updateMilestone(milestoneId: number, payload: Request.UpdateMilestone): Promise<Response.Milestone> {
    return this._api('POST', `update_milestone/${milestoneId}`, { json: payload });
  }

  deleteMilestone(milestoneId: number): Promise<void> {
    return this._api('POST', `delete_milestone/${milestoneId}`);
  }

  // Plans

  getPlan(planId: number): Promise<Response.Plan> {
    return this._api('GET', `get_plan/${planId}`);
  }

  getPlans(projectId: number, filters?: Request.PlanFilters): Promise<Response.PlanItem[]> {
    return pagination('plans', filters, (filters) => {
      return this._api('GET', `get_plans/${projectId}`, { query: filters });
    });
  }

  addPlan(projectId: number, payload: Request.AddPlan): Promise<Response.Plan> {
    return this._api('POST', `add_plan/${projectId}`, { json: payload });
  }

  addPlanEntry(planId: number, payload: Request.AddPlanEntry): Promise<Response.PlanEntry> {
    return this._api('POST', `add_plan_entry/${planId}`, { json: payload });
  }

  addRunToPlanEntry(planId: number, entryId: string, payload: Request.AddRunToPlanEntry): Promise<Response.PlanEntry> {
    return this._api('POST', `add_run_to_plan_entry/${planId}/${entryId}`, { json: payload });
  }

  updatePlan(planId: number, payload: Request.UpdatePlan): Promise<Response.Plan> {
    return this._api('POST', `update_plan/${planId}`, { json: payload });
  }

  updatePlanEntry(planId: number, entryId: string, payload: Request.UpdatePlanEntry): Promise<Response.PlanEntry> {
    return this._api('POST', `update_plan_entry/${planId}/${entryId}`, { json: payload });
  }

  updateRunInPlanEntry(runId: number, payload: Request.UpdateRunInPlanEntry): Promise<Response.PlanEntry> {
    return this._api('POST', `update_run_in_plan_entry/${runId}`, { json: payload });
  }

  closePlan(planId: number): Promise<Response.Plan> {
    return this._api('POST', `close_plan/${planId}`);
  }

  deletePlan(planId: number): Promise<void> {
    return this._api('POST', `delete_plan/${planId}`);
  }

  deletePlanEntry(planId: number, entryId: string): Promise<void> {
    return this._api('POST', `delete_plan_entry/${planId}/${entryId}`);
  }

  deleteRunFromPlanEntry(runId: number): Promise<void> {
    return this._api('POST', `delete_run_from_plan_entry/${runId}`);
  }

  // Priorities

  getPriorities(): Promise<Response.Priority[]> {
    return this._api('GET', 'get_priorities');
  }

  // Projects

  getProject(projectId: number): Promise<Response.Project> {
    return this._api('GET', `get_project/${projectId}`);
  }

  getProjects(filters?: Request.ProjectFilters): Promise<Response.Project[]> {
    return pagination('projects', filters, (filters) => {
      return this._api('GET', 'get_projects', { query: filters });
    });
  }

  addProject(payload: Request.AddProject): Promise<Response.Project> {
    return this._api('POST', 'add_project', { json: payload });
  }

  updateProject(projectId: number, payload: Request.UpdateProject): Promise<Response.Project> {
    return this._api('POST', `update_project/${projectId}`, { json: payload });
  }

  deleteProject(projectId: number): Promise<void> {
    return this._api('POST', `delete_project/${projectId}`);
  }

  // Reports

  getReports(projectId: number): Promise<Response.Report[]> {
    return this._api('GET', `get_reports/${projectId}`);
  }

  runReport(reportTemplateId: number): Promise<Response.ReportUrls> {
    return this._api('POST', `run_report/${reportTemplateId}`);
  }

  // Results

  getResults(testId: number, filters?: Request.ResultFilters): Promise<Response.Result[]> {
    return pagination('results', filters, (filters) => {
      return this._api('GET', `get_results/${testId}`, { query: filters });
    });
  }

  getResultsForCase(runId: number, caseId: number, filters?: Request.ResultFilters): Promise<Response.Result[]> {
    return pagination('results', filters, (filters) => {
      return this._api('GET', `get_results_for_case/${runId}/${caseId}`, { query: filters });
    });
  }

  getResultsForRun(runId: number, filters?: Request.ResultForRunFilters): Promise<Response.Result[]> {
    return pagination('results', filters, (filters) => {
      return this._api('GET', `get_results_for_run/${runId}`, { query: filters });
    });
  }

  addResult(testId: number, payload: Request.AddResult): Promise<Response.Result> {
    return this._api('POST', `add_result/${testId}`, { json: payload });
  }

  addResultForCase(runId: number, caseId: number, payload: Request.AddResult): Promise<Response.Result> {
    return this._api('POST', `add_result_for_case/${runId}/${caseId}`, { json: payload });
  }

  addResults(runId: number, payload: Request.AddResults): Promise<Response.Result[]> {
    return this._api('POST', `add_results/${runId}`, { json: payload });
  }

  addResultsForCases(runId: number, payload: Request.AddResultsForCases): Promise<Response.Result[]> {
    return this._api('POST', `add_results_for_cases/${runId}`, { json: payload });
  }

  // Result Fields

  getResultFields(): Promise<Response.ResultField[]> {
    return this._api('GET', 'get_result_fields');
  }

  // Runs

  getRun(runId: number): Promise<Response.Run> {
    return this._api('GET', `get_run/${runId}`);
  }

  getRuns(projectId: number, filters?: Request.RunFilters): Promise<Response.Run[]> {
    return pagination('runs', filters, (filters) => {
      return this._api('GET', `get_runs/${projectId}`, { query: filters });
    });
  }

  addRun(projectId: number, payload: Request.AddRun): Promise<Response.Run> {
    return this._api('POST', `add_run/${projectId}`, { json: payload });
  }

  updateRun(runId: number, payload: Request.UpdateRun): Promise<Response.Run> {
    return this._api('POST', `update_run/${runId}`, { json: payload });
  }

  closeRun(runId: number): Promise<Response.Run> {
    return this._api('POST', `close_run/${runId}`);
  }

  deleteRun(runId: number): Promise<void> {
    return this._api('POST', `delete_run/${runId}`);
  }

  // Sections

  getSection(sectionId: number): Promise<Response.Section> {
    return this._api('GET', `get_section/${sectionId}`);
  }

  getSections(projectId: number, filters?: Request.SectionFilters): Promise<Response.Section[]> {
    return pagination('sections', filters, (filters) => {
      return this._api('GET', `get_sections/${projectId}`, { query: filters });
    });
  }

  addSection(projectId: number, payload: Request.AddSection): Promise<Response.Section> {
    return this._api('POST', `add_section/${projectId}`, { json: payload });
  }

  moveSection(sectionId: number, payload: Request.MoveSection): Promise<Response.Section> {
    return this._api('POST', `move_section/${sectionId}`, { json: payload });
  }

  updateSection(sectionId: number, payload: Request.UpdateSection): Promise<Response.Section> {
    return this._api('POST', `update_section/${sectionId}`, { json: payload });
  }

  deleteSection(sectionId: number): Promise<void> {
    return this._api('POST', `delete_section/${sectionId}`);
  }

  // Shared steps

  getSharedStep(stepId: number): Promise<Response.SharedStep> {
    return this._api('GET', `get_shared_step/${stepId}`);
  }

  getSharedSteps(projectId: number, filters?: Request.SharedStepFilters): Promise<Response.SharedStep[]> {
    return pagination('shared_steps', filters, (filters) => {
      return this._api('GET', `get_shared_steps/${projectId}`, { query: filters });
    });
  }

  addSharedStep(projectId: number, payload: Request.AddSharedStep): Promise<Response.SharedStep> {
    return this._api('POST', `add_shared_step/${projectId}`, { json: payload });
  }

  updateSharedStep(stepId: number, payload: Request.UpdateSharedStep): Promise<Response.SharedStep> {
    return this._api('POST', `update_shared_step/${stepId}`, { json: payload });
  }

  deleteSharedStep(stepId: number, payload?: Request.DeleteSharedStep): Promise<void> {
    return this._api('POST', `delete_shared_step/${stepId}`, { json: payload });
  }

  // Statuses

  getStatuses(): Promise<Response.Status[]> {
    return this._api('GET', 'get_statuses');
  }

  // Suites

  getSuite(suiteId: number): Promise<Response.Suite> {
    return this._api('GET', `get_suite/${suiteId}`);
  }

  getSuites(projectId: number): Promise<Response.Suite[]> {
    return this._api('GET', `get_suites/${projectId}`);
  }

  addSuite(projectId: number, payload: Request.AddSuite): Promise<Response.Suite> {
    return this._api('POST', `add_suite/${projectId}`, { json: payload });
  }

  updateSuite(suiteId: number, payload: Request.UpdateSuite): Promise<Response.Suite> {
    return this._api('POST', `update_suite/${suiteId}`, { json: payload });
  }

  deleteSuite(suiteId: number): Promise<void> {
    return this._api('POST', `delete_suite/${suiteId}`);
  }

  // Templates

  getTemplates(projectId: number): Promise<Response.Template[]> {
    return this._api('GET', `get_templates/${projectId}`);
  }

  // Tests

  getTest(testId: number): Promise<Response.Test> {
    return this._api('GET', `get_test/${testId}`);
  }

  getTests(runId: number, filters?: Request.TestFilters): Promise<Response.Test[]> {
    return pagination('tests', filters, (filters) => {
      return this._api('GET', `get_tests/${runId}`, { query: filters });
    });
  }

  // Users

  getUser(userId: number): Promise<Response.User> {
    return this._api('GET', `get_user/${userId}`);
  }

  getCurrentUser(): Promise<Response.User> {
    return this._api('GET', `get_current_user`);
  }

  getUserByEmail(email: string): Promise<Response.User> {
    return this._api('GET', 'get_user_by_email', { query: { email } });
  }

  getUsers(filters?: Request.UserFilters): Promise<Response.User[]> {
    return this._api('GET', 'get_users', { query: filters });
  }

  // Internal

  private async _api<T>(method: string, path: string, { query, json, form }: { query?: object; json?: object; form?: object } = {}): Promise<T> {
    const headers: any = {};
    const url = this.baseURL + path + qs(query);

    // Add authentication header
    if (this.username && this.password) {
      headers.Authorization = `Basic ${base64(`${this.username}:${this.password}`)}`;
    }

    // TestRail requires 'Content-Type: application/json' for all requests except those containing form data
    if (!form) {
      headers['Content-Type'] = 'application/json';
    }

    // Determine body & request type
    let body;

    if (json) {
      body = JSON.stringify(json);
    } else if (form) {
      body = new FormData();
      for (const [key, value] of Object.entries(form)) {
        if (value.name && value.value) {
          appendToFormData(body, key, value.value, value.name);
        } else {
          appendToFormData(body, key, value);
        }
      }
    }

    while (true) {
      const response = await fetch(url, { method, body, headers });

      // Retry on 429 Too Many Requests
      if (response.status === 429) {
        const retryAfter = parseInt(response.headers.get('Retry-After') || '1') * 1000;
        await sleep(retryAfter);
        continue;
      }

      // Retry on 409 Conflict - Daily Maintenance
      if (response.status === 409) {
        await sleep(10 * 1000);
        continue;
      }

      // Content-Type based response
      const result = response.headers.get('Content-Type')?.includes('json')
        ? await response.json().catch(() => ({}))
        : await response.blob();

      if (response.ok) {
        return result;
      } else {
        throw new TestRail.Exception(result.error || 'No additional error message received');
      }
    }
  }
}

async function pagination<T>(key: string, filters: any, callback: (filters: any) => any): Promise<T[]> {
  if (filters && (filters.hasOwnProperty('limit') || filters.hasOwnProperty('offset'))) {
    const result = await callback(filters);

    return Array.isArray(result)
      ? result
      : result[key] || [];
  }

  let page = 0;
  let offset = 0;
  const limit = 250;
  const results = [];
  const ids = new Set();

  while (true) {
    offset = page++ * limit;

    let items = await pagination<T>(key, { ...filters, limit, offset }, callback);
    items = items.filter((item: any) => (ids.has(item.id) ? false : ids.add(item.id)));

    results.push(...items);

    if (items.length != limit) {
      break;
    }
  }

  return results;
}

function appendToFormData(formData: FormData, name: string, value: string | Blob, filename?: string) {
  // Browser requires the second parameter to be a Blob
  if (filename && typeof Blob !== 'undefined') {
    const blob = value instanceof Blob ? value : new Blob([value]);
    formData.append(name, blob, filename);
  } else {
    formData.append(name, value, filename);
  }
}

function base64(string: string) {
  if (typeof btoa !== 'undefined') {
    return btoa(string);
  } else {
    return Buffer.from(string).toString('base64');
  }
}

function sleep(timeout: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, timeout));
}

export default TestRail;
