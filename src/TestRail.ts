import { Readable } from 'stream';

class TestRailException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'TestRailException';
  }
}

class TestRail {
  static default = TestRail;
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

  addAttachmentToPlan(planId: number, payload: TestRail.Payload.AddAttachment): Promise<TestRail.Model.CreatedAttachment> {
    return this._api('POST', `add_attachment_to_plan/${planId}`, { form: { attachment: payload } });
  }

  addAttachmentToPlanEntry(planId: number, entryId: string, payload: TestRail.Payload.AddAttachment): Promise<TestRail.Model.CreatedAttachment> {
    return this._api('POST', `add_attachment_to_plan_entry/${planId}/${entryId}`, { form: { attachment: payload } });
  }

  addAttachmentToResult(resultId: number, payload: TestRail.Payload.AddAttachment): Promise<TestRail.Model.CreatedAttachment> {
    return this._api('POST', `add_attachment_to_result/${resultId}`, { form: { attachment: payload } });
  }

  addAttachmentToRun(runId: number, payload: TestRail.Payload.AddAttachment): Promise<TestRail.Model.CreatedAttachment> {
    return this._api('POST', `add_attachment_to_run/${runId}`, { form: { attachment: payload } });
  }

  getAttachmentsForCase(caseId: number): Promise<TestRail.Model.AttachmentForCase[]> {
    return this._api('GET', `get_attachments_for_case/${caseId}`);
  }

  getAttachmentsForPlan(planId: number): Promise<TestRail.Model.AttachmentForPlan[]> {
    return this._api('GET', `get_attachments_for_plan/${planId}`);
  }

  getAttachmentsForPlanEntry(planId: number, entryId: string): Promise<TestRail.Model.AttachmentForPlanEntry[]> {
    return this._api('GET', `get_attachments_for_plan_entry/${planId}/${entryId}`);
  }

  getAttachmentsForRun(runId: number): Promise<TestRail.Model.AttachmentForRun[]> {
    return this._api('GET', `get_attachments_for_run/${runId}`);
  }

  getAttachmentsForTest(testId: number): Promise<TestRail.Model.AttachmentForTest[]> {
    return this._api('GET', `get_attachments_for_test/${testId}`);
  }

  getAttachment(attachmentId: number): Promise<Blob> {
    return this._api('GET', `get_attachment/${attachmentId}`);
  }

  deleteAttachment(attachmentId: number): Promise<void> {
    return this._api('POST', `delete_attachment/${attachmentId}`);
  }

  // Cases

  getCase(caseId: number): Promise<TestRail.Model.Case> {
    return this._api('GET', `get_case/${caseId}`);
  }

  getCases(projectId: number, filters?: TestRail.Payload.CaseFilters): Promise<TestRail.Model.Case[]> {
    return this._api('GET', `get_cases/${projectId}`, { query: filters });
  }

  getHistoryForCase(caseId: number): Promise<TestRail.Model.CaseHistory[]> {
    return this._api('GET', `get_history_for_case/${caseId}`);
  }

  addCase(sectionId: number, payload: TestRail.Payload.AddCase): Promise<TestRail.Model.Case> {
    return this._api('POST', `add_case/${sectionId}`, { json: payload });
  }

  updateCase(caseId: number, payload: TestRail.Payload.UpdateCase): Promise<TestRail.Model.Case> {
    return this._api('POST', `update_case/${caseId}`, { json: payload });
  }

  updateCases(suiteId: number, payload: TestRail.Payload.UpdateCases): Promise<void> {
    return this._api('POST', `update_cases/${suiteId}`, { json: payload });
  }

  deleteCase(caseId: number): Promise<void> {
    return this._api('POST', `delete_case/${caseId}`);
  }

  deleteCases(suiteId: number, payload: TestRail.Payload.DeleteCases): Promise<void> {
    return this._api('POST', `delete_cases/${suiteId}`, { json: payload });
  }

  // Case Fields

  getCaseFields(): Promise<TestRail.Model.CaseField[]> {
    return this._api('GET', 'get_case_fields');
  }

  addCaseField(payload: TestRail.Payload.AddCaseField): Promise<TestRail.Model.CaseField> {
    return this._api('POST', 'add_case_field', { json: payload });
  }

  // Case Types

  getCaseTypes(): Promise<TestRail.Model.CaseType[]> {
    return this._api('GET', 'get_case_types');
  }

  // Configurations

  getConfigs(projectId: number): Promise<TestRail.Model.Config[]> {
    return this._api('GET', `get_configs/${projectId}`);
  }

  addConfigGroup(projectId: number, payload: TestRail.Payload.AddConfigGroup): Promise<TestRail.Model.Config> {
    return this._api('POST', `add_config_group/${projectId}`, { json: payload });
  }

  addConfig(configGroupId: number, payload: TestRail.Payload.AddConfig): Promise<TestRail.Model.ConfigItem> {
    return this._api('POST', `add_config/${configGroupId}`, { json: payload });
  }

  updateConfigGroup(configGroupId: number, payload: TestRail.Payload.UpdateConfigGroup): Promise<TestRail.Model.Config> {
    return this._api('POST', `update_config_group/${configGroupId}`, { json: payload });
  }

  updateConfig(configId: number, payload: TestRail.Payload.UpdateConfig): Promise<TestRail.Model.ConfigItem> {
    return this._api('POST', `update_config/${configId}`, { json: payload });
  }

  deleteConfigGroup(configGroupId: number): Promise<void> {
    return this._api('POST', `delete_config_group/${configGroupId}`);
  }

  deleteConfig(configId: number): Promise<void> {
    return this._api('POST', `delete_config/${configId}`);
  }

  // Milestones

  getMilestone(milestoneId: number): Promise<TestRail.Model.Milestone> {
    return this._api('GET', `get_milestone/${milestoneId}`);
  }

  getMilestones(projectId: number, filters?: TestRail.Payload.MilestoneFilters): Promise<TestRail.Model.Milestone[]> {
    return this._api('GET', `get_milestones/${projectId}`, { query: filters });
  }

  addMilestone(projectId: number, payload: TestRail.Payload.AddMilestone): Promise<TestRail.Model.Milestone> {
    return this._api('POST', `add_milestone/${projectId}`, { json: payload });
  }

  updateMilestone(milestoneId: number, payload: TestRail.Payload.UpdateMilestone): Promise<TestRail.Model.Milestone> {
    return this._api('POST', `update_milestone/${milestoneId}`, { json: payload });
  }

  deleteMilestone(milestoneId: number): Promise<void> {
    return this._api('POST', `delete_milestone/${milestoneId}`);
  }

  // Plans

  getPlan(planId: number): Promise<TestRail.Model.Plan> {
    return this._api('GET', `get_plan/${planId}`);
  }

  getPlans(projectId: number, filters?: TestRail.Payload.PlanFilters): Promise<TestRail.Model.PlanItem[]> {
    return this._api('GET', `get_plans/${projectId}`, { query: filters });
  }

  addPlan(projectId: number, payload: TestRail.Payload.AddPlan): Promise<TestRail.Model.Plan> {
    return this._api('POST', `add_plan/${projectId}`, { json: payload });
  }

  addPlanEntry(planId: number, payload: TestRail.Payload.AddPlanEntry): Promise<TestRail.Model.PlanEntry> {
    return this._api('POST', `add_plan_entry/${planId}`, { json: payload });
  }

  addRunToPlanEntry(planId: number, entryId: string, payload: TestRail.Payload.AddRunToPlanEntry): Promise<TestRail.Model.PlanEntry> {
    return this._api('POST', `add_run_to_plan_entry/${planId}/${entryId}`, { json: payload });
  }

  updatePlan(planId: number, payload: TestRail.Payload.UpdatePlan): Promise<TestRail.Model.Plan> {
    return this._api('POST', `update_plan/${planId}`, { json: payload });
  }

  updatePlanEntry(planId: number, entryId: string, payload: TestRail.Payload.UpdatePlanEntry): Promise<TestRail.Model.PlanEntry> {
    return this._api('POST', `update_plan_entry/${planId}/${entryId}`, { json: payload });
  }

  updateRunInPlanEntry(planId: number, runId: number, payload: TestRail.Payload.UpdateRunInPlanEntry): Promise<TestRail.Model.PlanEntry> {
    return this._api('POST', `update_run_in_plan_entry/${planId}/${runId}`, { json: payload });
  }

  closePlan(planId: number): Promise<TestRail.Model.Plan> {
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

  getPriorities(): Promise<TestRail.Model.Priority[]> {
    return this._api('GET', 'get_priorities');
  }

  // Projects

  getProject(projectId: number): Promise<TestRail.Model.Project> {
    return this._api('GET', `get_project/${projectId}`);
  }

  getProjects(filters?: TestRail.Payload.ProjectFilters): Promise<TestRail.Model.Project[]> {
    return this._api('GET', 'get_projects', { query: filters });
  }

  addProject(payload: TestRail.Payload.AddProject): Promise<TestRail.Model.Project> {
    return this._api('POST', 'add_project', { json: payload });
  }

  updateProject(projectId: number, payload: TestRail.Payload.UpdateProject): Promise<TestRail.Model.Project> {
    return this._api('POST', `update_project/${projectId}`, { json: payload });
  }

  deleteProject(projectId: number): Promise<void> {
    return this._api('POST', `delete_project/${projectId}`);
  }

  // Reports

  getReports(projectId: number): Promise<TestRail.Model.Report[]> {
    return this._api('GET', `get_reports/${projectId}`);
  }

  runReport(reportTemplateId: number): Promise<TestRail.Model.ReportUrls> {
    return this._api('POST', `run_report/${reportTemplateId}`);
  }

  // Results

  getResults(testId: number, filters?: TestRail.Payload.ResultFilters): Promise<TestRail.Model.Result[]> {
    return this._api('GET', `get_results/${testId}`, { query: filters });
  }

  getResultsForCase(runId: number, caseId: number, filters?: TestRail.Payload.ResultFilters): Promise<TestRail.Model.Result[]> {
    return this._api('GET', `get_results_for_case/${runId}/${caseId}`, { query: filters });
  }

  getResultsForRun(runId: number, filters?: TestRail.Payload.ResultForRunFilters): Promise<TestRail.Model.Result[]> {
    return this._api('GET', `get_results_for_run/${runId}`, { query: filters });
  }

  addResult(testId: number, payload: TestRail.Payload.AddResult): Promise<TestRail.Model.Result> {
    return this._api('POST', `add_result/${testId}`, { json: payload });
  }

  addResultForCase(runId: number, caseId: number, payload: TestRail.Payload.AddResult): Promise<TestRail.Model.Result> {
    return this._api('POST', `add_result_for_case/${runId}/${caseId}`, { json: payload });
  }

  addResults(runId: number, payload: TestRail.Payload.AddResults): Promise<TestRail.Model.Result[]> {
    return this._api('POST', `add_results/${runId}`, { json: payload });
  }

  addResultsForCases(runId: number, payload: TestRail.Payload.AddResultsForCases): Promise<TestRail.Model.Result[]> {
    return this._api('POST', `add_results_for_cases/${runId}`, { json: payload });
  }

  // Result Fields

  getResultFields(): Promise<TestRail.Model.ResultField[]> {
    return this._api('GET', 'get_result_fields');
  }

  // Runs

  getRun(runId: number): Promise<TestRail.Model.Run> {
    return this._api('GET', `get_run/${runId}`);
  }

  getRuns(projectId: number, filters?: TestRail.Payload.RunFilters): Promise<TestRail.Model.Run[]> {
    return this._api('GET', `get_runs/${projectId}`, { query: filters });
  }

  addRun(projectId: number, payload: TestRail.Payload.AddRun): Promise<TestRail.Model.Run> {
    return this._api('POST', `add_run/${projectId}`, { json: payload });
  }

  updateRun(runId: number, payload: TestRail.Payload.UpdateRun): Promise<TestRail.Model.Run> {
    return this._api('POST', `update_run/${runId}`, { json: payload });
  }

  closeRun(runId: number): Promise<TestRail.Model.Run> {
    return this._api('POST', `close_run/${runId}`);
  }

  deleteRun(runId: number): Promise<void> {
    return this._api('POST', `delete_run/${runId}`);
  }

  // Sections

  getSection(sectionId: number): Promise<TestRail.Model.Section> {
    return this._api('GET', `get_section/${sectionId}`);
  }

  getSections(projectId: number, filters?: TestRail.Payload.SectionFilters): Promise<TestRail.Model.Section[]> {
    return this._api('GET', `get_sections/${projectId}`, { query: filters });
  }

  addSection(projectId: number, payload: TestRail.Payload.AddSection): Promise<TestRail.Model.Section> {
    return this._api('POST', `add_section/${projectId}`, { json: payload });
  }

  updateSection(sectionId: number, payload: TestRail.Payload.UpdateSection): Promise<TestRail.Model.Section> {
    return this._api('POST', `update_section/${sectionId}`, { json: payload });
  }

  deleteSection(sectionId: number): Promise<void> {
    return this._api('POST', `delete_section/${sectionId}`);
  }

  // Statuses

  getStatuses(): Promise<TestRail.Model.Status[]> {
    return this._api('GET', 'get_statuses');
  }

  // Suites

  getSuite(suiteId: number): Promise<TestRail.Model.Suite> {
    return this._api('GET', `get_suite/${suiteId}`);
  }

  getSuites(projectId: number): Promise<TestRail.Model.Suite[]> {
    return this._api('GET', `get_suites/${projectId}`);
  }

  addSuite(projectId: number, payload: TestRail.Payload.AddSuite): Promise<TestRail.Model.Suite> {
    return this._api('POST', `add_suite/${projectId}`, { json: payload });
  }

  updateSuite(suiteId: number, payload: TestRail.Payload.UpdateSuite): Promise<TestRail.Model.Suite> {
    return this._api('POST', `update_suite/${suiteId}`, { json: payload });
  }

  deleteSuite(suiteId: number): Promise<void> {
    return this._api('POST', `delete_suite/${suiteId}`);
  }

  // Templates

  getTemplates(projectId: number): Promise<TestRail.Model.Template[]> {
    return this._api('GET', `get_templates/${projectId}`);
  }

  // Tests

  getTest(testId: number): Promise<TestRail.Model.Test> {
    return this._api('GET', `get_test/${testId}`);
  }

  getTests(runId: number, filters?: TestRail.Payload.TestFilters): Promise<TestRail.Model.Test[]> {
    return this._api('GET', `get_tests/${runId}`, { query: filters });
  }

  // Users

  getUser(userId: number): Promise<TestRail.Model.User> {
    return this._api('GET', `get_user/${userId}`);
  }

  getCurrentUser(): Promise<TestRail.Model.User> {
    return this._api('GET', `get_current_user`);
  }

  getUserByEmail(email: string): Promise<TestRail.Model.User> {
    return this._api('GET', 'get_user_by_email', { query: { email } });
  }

  getUsers(filters?: TestRail.Payload.UserFilters): Promise<TestRail.Model.User[]> {
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
      const contentType = response.headers.get('Content-Type') || '';
      const result = contentType.includes('json')
        ? await response
            .clone()
            .json()
            .catch(() => response.text())
        : await response.blob();

      if (response.ok) {
        return result;
      } else {
        throw new TestRail.Exception(result.error || 'No additional error message received');
      }
    }
  }
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

function qs(object?: any): string {
  return object ? '&' + new URLSearchParams(object) : '';
}

function sleep(timeout: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, timeout));
}

declare namespace TestRail {
  interface UnknownObject {
    [key: string]: unknown;
  }

  namespace Payload {
    type AddAttachment =
      | Blob
      | Readable
      | {
          name: string;
          value: string | Blob | Readable;
        };

    interface AddCase extends UnknownObject {
      title?: string;
      template_id?: number;
      type_id?: number;
      priority_id?: number;
      estimate?: string;
      milestone_id?: number;
      refs?: string;
    }

    interface UpdateCase extends AddCase {
      section_id?: number;
    }

    interface UpdateCases extends UpdateCase {
      case_ids?: number[];
    }

    interface DeleteCases extends UnknownObject {
      case_ids?: number[];
    }

    interface AddCaseField extends UnknownObject {
      type?: string;
      name?: string;
      label?: string;
      description?: string;
      include_all?: boolean;
      template_ids?: number[];
      configs?: AddCaseField.CaseFieldConfig[];
    }

    namespace AddCaseField {
      interface CaseFieldConfig extends UnknownObject {
        context?: Context;
        options?: Options;
      }

      interface Context extends UnknownObject {
        is_global?: boolean;
        project_ids?: number[];
      }

      interface Options extends UnknownObject {
        default_value?: string;
        format?: string;
        has_actual?: boolean;
        has_expected?: boolean;
        is_required?: boolean;
        items?: string;
        rows?: string;
      }
    }

    interface AddConfigGroup extends UnknownObject {
      name?: string;
    }

    type UpdateConfigGroup = AddConfigGroup;

    type AddConfig = AddConfigGroup;

    type UpdateConfig = AddConfigGroup;

    interface AddMilestone extends UnknownObject {
      name?: string;
      description?: string;
      due_on?: number;
      parent_id?: number;
      refs?: string;
      start_on?: number;
    }

    interface UpdateMilestone extends AddMilestone {
      is_completed?: boolean;
      is_started?: boolean;
    }

    interface AddPlanEntry extends UnknownObject {
      suite_id?: number;
      name?: string;
      description?: string;
      assignedto_id?: number;
      include_all?: boolean;
      case_ids?: number[];
      config_ids?: number[];
      refs?: string;
      runs?: AddRunToPlanEntry[];
    }

    interface AddRunToPlanEntry extends UnknownObject {
      config_ids?: number[];
      description?: string;
      assignedto_id?: number;
      include_all?: boolean;
      case_ids?: number[];
      refs?: string;
    }

    interface AddPlan extends UpdatePlan {
      entries?: AddPlanEntry[];
    }

    interface UpdatePlan extends UnknownObject {
      name?: string;
      description?: string;
      milestone_id?: number;
    }

    interface UpdatePlanEntry extends UnknownObject {
      name?: string;
      description?: string;
      assignedto_id?: number;
      include_all?: boolean;
      case_ids?: number[];
      refs?: string;
    }

    interface UpdateRunInPlanEntry extends UnknownObject {
      description?: string;
      assignedto_id?: number;
      include_all?: boolean;
      case_ids?: number[];
      refs?: string;
    }

    interface AddProject extends UnknownObject {
      name?: string;
      announcement?: string;
      show_announcement?: string;
      suite_mode?: number;
    }

    type UpdateProject = AddProject;

    interface AddResults extends UnknownObject {
      results?: AddResultForTest[];
    }

    interface AddResultsForCases extends UnknownObject {
      results?: AddResultForCase[];
    }

    interface AddResultForCase extends AddResult {
      case_id?: number;
    }

    interface AddResultForTest extends AddResult {
      test_id?: number;
    }

    interface AddResult extends UnknownObject {
      status_id?: number;
      comment?: string;
      version?: string;
      elapsed?: string;
      defects?: string;
      assignedto_id?: number;
    }

    interface AddRun extends UpdateRun {
      suite_id?: number;
      assignedto_id?: number;
    }

    interface UpdateRun extends UnknownObject {
      name?: string;
      description?: string;
      milestone_id?: number;
      include_all?: boolean;
      case_ids?: number[];
      refs?: string;
    }

    interface AddSection extends UpdateSection {
      parent_id?: number;
      suite_id?: number;
    }

    interface UpdateSection extends UnknownObject {
      description?: string;
      name?: string;
    }

    interface AddSuite extends UnknownObject {
      name?: string;
      description?: string;
    }

    type UpdateSuite = AddSuite;

    interface CaseFilters extends UnknownObject {
      suite_id?: number;
      created_after?: number;
      created_before?: number;
      created_by?: string;
      filter?: string;
      limit?: number;
      milestone_id?: string;
      offset?: number;
      priority_id?: string;
      refs_filter?: string;
      section_id?: number;
      template_id?: string;
      type_id?: string;
      updated_after?: number;
      updated_before?: number;
      updated_by?: string;
    }

    interface MilestoneFilters extends UnknownObject {
      is_completed?: number;
      is_started?: number;
    }

    interface PlanFilters extends UnknownObject {
      created_after?: number;
      created_before?: number;
      created_by?: string;
      is_completed?: number;
      limit?: number;
      offset?: number;
      milestone_id?: string;
    }

    interface ProjectFilters extends UnknownObject {
      is_completed?: number;
    }

    interface ResultFilters extends UnknownObject {
      defects_filter?: string;
      limit?: number;
      offset?: number;
      status_id?: string;
    }

    interface ResultForRunFilters extends UnknownObject {
      created_after?: number;
      created_before?: number;
      created_by?: string;
      defects_filter?: string;
      limit?: number;
      offset?: number;
      status_id?: string;
    }

    interface RunFilters extends UnknownObject {
      created_after?: number;
      created_before?: number;
      created_by?: string;
      is_completed?: number;
      limit?: number;
      offset?: number;
      milestone_id?: string;
      refs_filter?: string;
      suite_id?: string;
    }

    interface SectionFilters extends UnknownObject {
      suite_id?: number;
    }

    interface TestFilters extends UnknownObject {
      status_id?: string;
    }

    interface UserFilters extends UnknownObject {
      project_id?: number;
    }
  }

  namespace Model {
    interface CreatedAttachment extends UnknownObject {
      attachment_id: number;
    }

    interface AttachmentForPlan extends Attachment {
      entity_attachments_id: number;
      icon_name: string;
    }

    interface AttachmentForPlanEntry extends Attachment {
      entity_attachments_id: number;
      icon_name: string;
    }

    interface AttachmentForRun extends Attachment {
      entity_attachments_id: number;
      icon_name: string;
    }

    interface AttachmentForTest extends Attachment {
      case_id: number;
      result_id: number;
    }

    interface AttachmentForCase extends Attachment {
      case_id: number;
    }

    interface Attachment extends UnknownObject {
      case_id?: number;
      created_on: number;
      entity_attachments_id?: number;
      icon_name?: string;
      id: number;
      name: string;
      project_id: number;
      result_id?: number;
      size: number;
      user_id: number;
    }

    interface Case extends UnknownObject {
      created_by: number;
      created_on: number;
      display_order: number;
      estimate?: string;
      estimate_forecast?: string;
      id: number;
      milestone_id?: number;
      priority_id: number;
      refs?: string;
      section_id: number;
      suite_id: number;
      template_id: number;
      title: string;
      type_id: number;
      updated_by: number;
      updated_on: number;
    }

    interface CaseHistory extends UnknownObject {
      changes: Change[];
      created_on: number;
      id?: number;
      type_id: number;
      user_id: number;
    }

    interface Change extends UnknownObject {
      field: String;
      label?: string;
      new_text?: string;
      new_value?: string | number | number[];
      old_ignore?: boolean;
      old_text?: string;
      old_value?: string | number | number[];
      options?: Option;
      type_id: number;
    }

    interface CaseField extends UnknownObject {
      configs: CaseField.CaseFieldConfig[];
      description?: string;
      display_order: number;
      id: number;
      include_all: boolean;
      is_active: boolean;
      label: string;
      name: string;
      system_name: string;
      template_ids: number[];
      type_id: number;
    }

    namespace CaseField {
      interface CaseFieldConfig extends UnknownObject {
        context: Context;
        id: string;
        options: Options;
      }

      interface Options {
        default_value?: string;
        format?: string;
        has_actual?: boolean;
        has_expected?: boolean;
        is_required: boolean;
        items?: string;
        rows?: string;
      }
    }

    interface CaseType extends UnknownObject {
      id: number;
      is_default: boolean;
      name: string;
    }

    interface Config extends UnknownObject {
      configs: ConfigItem[];
      id: number;
      name: string;
      project_id: number;
    }

    interface ConfigItem extends UnknownObject {
      group_id: number;
      id: number;
      name: string;
    }

    interface Milestone extends UnknownObject {
      completed_on?: number;
      description?: string;
      due_on?: number;
      id: number;
      is_completed: boolean;
      is_started: boolean;
      milestones?: Milestone[];
      name: string;
      parent_id?: number;
      project_id: number;
      refs?: string;
      start_on?: number;
      started_on?: number;
      url: string;
    }

    interface Plan extends UnknownObject {
      assignedto_id?: number;
      blocked_count: number;
      completed_on?: number;
      created_by: number;
      created_on: number;
      custom_status1_count: number;
      custom_status2_count: number;
      custom_status3_count: number;
      custom_status4_count: number;
      custom_status5_count: number;
      custom_status6_count: number;
      custom_status7_count: number;
      description?: string;
      entries: PlanEntry[];
      failed_count: number;
      id: number;
      is_completed: boolean;
      milestone_id?: number;
      name: string;
      passed_count: number;
      project_id: number;
      retest_count: number;
      untested_count: number;
      url: string;
    }

    interface PlanEntry extends UnknownObject {
      description?: string;
      id: string;
      include_all: boolean;
      name: string;
      refs?: string;
      runs: PlanEntryRun[];
      suite_id: number;
    }

    interface PlanEntryRun extends UnknownObject {
      assignedto_id?: number;
      blocked_count: number;
      completed_on?: number;
      config?: string;
      config_ids: number[];
      created_by: number;
      created_on: number;
      custom_status1_count: number;
      custom_status2_count: number;
      custom_status3_count: number;
      custom_status4_count: number;
      custom_status5_count: number;
      custom_status6_count: number;
      custom_status7_count: number;
      description?: string;
      entry_id: string;
      entry_index: number;
      failed_count: number;
      id: number;
      include_all: boolean;
      is_completed: boolean;
      milestone_id?: number;
      name: string;
      passed_count: number;
      plan_id: number;
      project_id: number;
      refs?: string;
      retest_count: number;
      suite_id: number;
      untested_count: number;
      url: string;
    }

    interface PlanItem extends UnknownObject {
      assignedto_id?: number;
      blocked_count: number;
      completed_on?: number;
      created_by: number;
      created_on: number;
      custom_status1_count: number;
      custom_status2_count: number;
      custom_status3_count: number;
      custom_status4_count: number;
      custom_status5_count: number;
      custom_status6_count: number;
      custom_status7_count: number;
      description?: string;
      failed_count: number;
      id: number;
      is_completed: boolean;
      milestone_id?: number;
      name: string;
      passed_count: number;
      project_id: number;
      retest_count: number;
      untested_count: number;
      url: string;
    }

    interface Priority extends UnknownObject {
      id: number;
      is_default: boolean;
      name: string;
      priority: number;
      short_name: string;
    }

    interface Project extends UnknownObject {
      announcement?: string;
      completed_on?: number;
      id: number;
      is_completed: boolean;
      name: string;
      show_announcement: boolean;
      suite_mode: number;
      url: string;
    }

    interface Report extends UnknownObject {
      activities_daterange?: string;
      activities_daterange_from?: string;
      activities_daterange_to?: string;
      activities_include?: boolean;
      activities_limit?: number;
      activities_statuses_ids?: number[];
      activities_statuses_include?: string;
      cases_columns: { [id: string]: number };
      cases_filters?: string;
      cases_groupby?: string;
      cases_include_comparison?: boolean;
      cases_include_coverage?: boolean;
      cases_include_details?: boolean;
      cases_include_new?: boolean;
      cases_include_norefs?: boolean;
      cases_include_refs?: boolean;
      cases_include_summary?: boolean;
      cases_include_updated?: boolean;
      cases_limit?: number;
      changes_daterange?: string;
      changes_daterange_from?: string;
      changes_daterange_to?: string;
      content_hide_links: boolean;
      defects_ids?: string;
      defects_include?: string;
      description?: string;
      history_daterange?: string;
      history_daterange_from?: string;
      history_daterange_to?: string;
      history_include?: boolean;
      history_limit?: number;
      id: number;
      milestones_active_include?: boolean;
      milestones_completed_include?: boolean;
      milestones_completed_limit?: number;
      milestones_id?: number;
      name: string;
      notify_attachment: string;
      notify_attachment_html_format: boolean;
      notify_attachment_pdf_format: boolean;
      notify_attachment_recipients: string;
      notify_link: boolean;
      notify_link_recipients?: string;
      notify_user: boolean;
      plans_id?: number;
      progress_include?: boolean;
      references_ids?: string;
      references_include?: string;
      results_include?: string;
      runs_active_include?: boolean;
      runs_completed_include?: boolean;
      runs_completed_limit?: number;
      runs_filters?: { [id: string]: any };
      runs_ids?: number[];
      runs_include?: string;
      runs_limit?: number;
      runs_sections_ids?: number[];
      runs_sections_include?: string;
      runs_suites_id?: string;
      runs_suites_ids?: string;
      runs_suites_include?: string;
      sections_ids?: string;
      sections_include?: string;
      status_include?: boolean;
      statuses_ids?: number[];
      statuses_include?: string;
      suites_ids?: string;
      suites_include?: string;
      tests_columns?: { [id: string]: number };
      tests_filters?: string;
      tests_groupby?: string;
      tests_include?: boolean;
      tests_include_details?: boolean;
      tests_include_summary?: string;
      tests_limit?: number;
    }

    interface ReportUrls extends UnknownObject {
      report_html: string;
      report_pdf: string;
      report_url: string;
    }

    interface Result extends UnknownObject {
      assignedto_id?: number;
      attachment_ids: number[];
      comment?: string;
      created_by: number;
      created_on: number;
      defects?: string;
      elapsed?: string;
      id: number;
      status_id?: number;
      test_id: number;
      version?: string;
    }

    interface ResultField extends UnknownObject {
      configs: FieldConfig[];
      description?: string;
      display_order: number;
      id: number;
      include_all: boolean;
      is_active: boolean;
      label: string;
      name: string;
      system_name: string;
      template_ids: number[];
      type_id: number;
    }

    interface FieldConfig extends UnknownObject {
      context: Context;
      id: string;
      options: Option;
    }

    interface Context extends UnknownObject {
      is_global: boolean;
      project_ids?: number[];
    }

    interface Option extends UnknownObject {
      default_value?: string;
      format?: string;
      has_actual?: boolean;
      has_expected?: boolean;
      is_required: boolean;
      items?: string;
      rows?: string;
    }

    interface Run extends UnknownObject {
      assignedto_id?: number;
      blocked_count: number;
      completed_on?: number;
      config?: string;
      config_ids: number[];
      created_by: number;
      created_on: number;
      updated_on: number;
      custom_status1_count: number;
      custom_status2_count: number;
      custom_status3_count: number;
      custom_status4_count: number;
      custom_status5_count: number;
      custom_status6_count: number;
      custom_status7_count: number;
      description?: string;
      failed_count: number;
      id: number;
      include_all: boolean;
      is_completed: boolean;
      milestone_id?: number;
      name: string;
      passed_count: number;
      plan_id?: number;
      project_id: number;
      refs?: string;
      retest_count: number;
      suite_id: number;
      untested_count: number;
      url: string;
    }

    interface Section extends UnknownObject {
      depth: number;
      description?: string;
      display_order: number;
      id: number;
      name: string;
      parent_id?: number;
      suite_id: number;
    }

    interface Status extends UnknownObject {
      color_bright: number;
      color_dark: number;
      color_medium: number;
      id: number;
      is_final: boolean;
      is_system: boolean;
      is_untested: boolean;
      label: string;
      name: string;
    }

    interface Suite extends UnknownObject {
      completed_on?: number;
      description?: string;
      id: number;
      is_baseline: boolean;
      is_completed: boolean;
      is_master: boolean;
      name: string;
      project_id: number;
      url: string;
    }

    interface Template extends UnknownObject {
      id: number;
      is_default: boolean;
      name: string;
    }

    interface Test extends UnknownObject {
      assignedto_id?: number;
      case_id: number;
      estimate?: string;
      estimate_forecast?: string;
      id: number;
      milestone_id?: number;
      priority_id: number;
      refs?: string;
      run_id: number;
      status_id: number;
      template_id: number;
      title: string;
      type_id: number;
    }

    interface User extends UnknownObject {
      email: string;
      id: number;
      is_active: boolean;
      name: string;
      role: string;
      role_id: number;
    }
  }
}

export default TestRail;
