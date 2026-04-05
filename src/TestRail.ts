import type { TestRailConfig } from './TestRailConfig.ts';
import { TestRailException } from './TestRailException.ts';
import { pagination } from './internal/pagination.ts';
import type { Executor, RequestOptions } from './internal/request.ts';
import { createExecutor } from './internal/request.ts';
import type {
  AddAttachment,
  AddCase,
  AddCaseField,
  AddConfig,
  AddConfigGroup,
  AddDataset,
  AddGroup,
  AddMilestone,
  AddPlan,
  AddPlanEntry,
  AddProject,
  AddResult,
  AddResults,
  AddResultsForCases,
  AddRun,
  AddRunToPlanEntry,
  AddSection,
  AddSharedStep,
  AddSuite,
  AddUser,
  AddVariable,
  AttachmentForCase,
  AttachmentForPlan,
  AttachmentForPlanEntry,
  AttachmentForRun,
  AttachmentForTest,
  Case,
  CaseField,
  CaseFilters,
  CaseHistory,
  CaseStatus,
  CaseType,
  Config,
  ConfigItem,
  CopyCasesToSection,
  CreatedAttachment,
  Dataset,
  DeleteCases,
  DeleteSharedStep,
  Group,
  Milestone,
  MilestoneFilters,
  MoveCasesToSection,
  MoveSection,
  Pagination,
  Plan,
  PlanEntry,
  PlanFilters,
  PlanItem,
  Priority,
  Project,
  ProjectFilters,
  Report,
  ReportUrls,
  Result,
  ResultField,
  ResultFilters,
  ResultForRunFilters,
  Role,
  Run,
  RunFilters,
  Section,
  SectionFilters,
  SharedStep,
  SharedStepFilters,
  SharedStepHistory,
  Status,
  Suite,
  Template,
  Test,
  TestFilters,
  UpdateCase,
  UpdateCases,
  UpdateConfig,
  UpdateConfigGroup,
  UpdateMilestone,
  UpdatePlan,
  UpdatePlanEntry,
  UpdateProject,
  UpdateRun,
  UpdateRunInPlanEntry,
  UpdateSection,
  UpdateSharedStep,
  UpdateSuite,
  User,
  UserFilters,
  Variable,
} from './payload/index.ts';

export * from './payload/index.ts';

type Signal = { signal: AbortSignal };

export class TestRail {
  private send: Executor;

  static Exception = TestRailException;

  constructor(config?: TestRailConfig | undefined) {
    this.send = createExecutor({
      ...config,
      host: (config?.host || '') + '/index.php?/api/v2/',
    });
  }

  addAttachmentToCase(caseId: number, payload: AddAttachment, options?: Signal): Promise<CreatedAttachment> {
    return this._api(`add_attachment_to_case/${caseId}`, { ...options, form: [['attachment', payload.value, payload.name]] });
  }

  addAttachmentToPlan(planId: number, payload: AddAttachment, options?: Signal): Promise<CreatedAttachment> {
    return this._api(`add_attachment_to_plan/${planId}`, { ...options, form: [['attachment', payload.value, payload.name]] });
  }

  addAttachmentToPlanEntry(planId: number, entryId: string, payload: AddAttachment, options?: Signal): Promise<CreatedAttachment> {
    return this._api(`add_attachment_to_plan_entry/${planId}/${entryId}`, { ...options, form: [['attachment', payload.value, payload.name]] });
  }

  addAttachmentToResult(resultId: number, payload: AddAttachment, options?: Signal): Promise<CreatedAttachment> {
    return this._api(`add_attachment_to_result/${resultId}`, { ...options, form: [['attachment', payload.value, payload.name]] });
  }

  addAttachmentToRun(runId: number, payload: AddAttachment, options?: Signal): Promise<CreatedAttachment> {
    return this._api(`add_attachment_to_run/${runId}`, { ...options, form: [['attachment', payload.value, payload.name]] });
  }

  getAttachmentsForCase(caseId: number, filters?: Pagination, options?: Signal): Promise<AttachmentForCase[]> {
    return pagination('attachments', filters, (filters) => {
      return this._api(`get_attachments_for_case/${caseId}`, { ...options, query: filters });
    });
  }

  getAttachmentsForPlan(planId: number, filters?: Pagination, options?: Signal): Promise<AttachmentForPlan[]> {
    return pagination('attachments', filters, (filters) => {
      return this._api(`get_attachments_for_plan/${planId}`, { ...options, query: filters });
    });
  }

  getAttachmentsForPlanEntry(planId: number, entryId: string, options?: Signal): Promise<AttachmentForPlanEntry[]> {
    return this._api(`get_attachments_for_plan_entry/${planId}/${entryId}`, options);
  }

  getAttachmentsForRun(runId: number, filters?: Pagination, options?: Signal): Promise<AttachmentForRun[]> {
    return pagination('attachments', filters, (filters) => {
      return this._api(`get_attachments_for_run/${runId}`, { ...options, query: filters });
    });
  }

  getAttachmentsForTest(testId: number, options?: Signal): Promise<AttachmentForTest[]> {
    return this._api(`get_attachments_for_test/${testId}`, options);
  }

  getAttachment(attachmentId: string, options?: Signal): Promise<Blob> {
    return this._api(`get_attachment/${attachmentId}`, options);
  }

  deleteAttachment(attachmentId: string, options?: Signal): Promise<void> {
    return this._api(`delete_attachment/${attachmentId}`, options);
  }

  getBdd(caseId: number, options?: Signal): Promise<Blob> {
    return this._api(`get_bdd/${caseId}`, options);
  }

  addBdd(sectionId: number, payload: AddAttachment, options?: Signal): Promise<Case> {
    return this._api(`add_bdd/${sectionId}`, { ...options, form: [['attachment', payload.value, payload.name]] });
  }

  getCase(caseId: number, options?: Signal): Promise<Case> {
    return this._api(`get_case/${caseId}`, options);
  }

  getCases(projectId: number, filters?: CaseFilters, options?: Signal): Promise<Case[]> {
    return pagination('cases', filters, (filters) => {
      return this._api(`get_cases/${projectId}`, { ...options, query: filters });
    });
  }

  getHistoryForCase(caseId: number, filters?: Pagination, options?: Signal): Promise<CaseHistory[]> {
    return pagination('history', filters, (filters) => {
      return this._api(`get_history_for_case/${caseId}`, { ...options, query: filters });
    });
  }

  addCase(sectionId: number, payload: AddCase, options?: Signal): Promise<Case> {
    return this._api(`add_case/${sectionId}`, { ...options, json: payload });
  }

  copyCasesToSection(sectionId: number, payload: CopyCasesToSection, options?: Signal): Promise<void> {
    return this._api(`copy_cases_to_section/${sectionId}`, { ...options, json: payload });
  }

  updateCase(caseId: number, payload: UpdateCase, options?: Signal): Promise<Case> {
    return this._api(`update_case/${caseId}`, { ...options, json: payload });
  }

  updateCases(suiteId: number, payload: UpdateCases, options?: Signal): Promise<void> {
    return this._api(`update_cases/${suiteId}`, { ...options, json: payload });
  }

  moveCasesToSection(sectionId: number, payload: MoveCasesToSection, options?: Signal): Promise<void> {
    return this._api(`move_cases_to_section/${sectionId}`, { ...options, json: payload });
  }

  deleteCase(caseId: number, options?: Signal): Promise<void> {
    return this._api(`delete_case/${caseId}`, options);
  }

  deleteCases(suiteId: number, payload: DeleteCases, options?: Signal): Promise<void> {
    return this._api(`delete_cases/${suiteId}`, { ...options, json: payload });
  }

  getCaseFields(options?: Signal): Promise<CaseField[]> {
    return this._api('get_case_fields', options);
  }

  addCaseField(payload: AddCaseField, options?: Signal): Promise<CaseField> {
    return this._api('add_case_field', { ...options, json: payload });
  }

  getCaseTypes(options?: Signal): Promise<CaseType[]> {
    return this._api('get_case_types', options);
  }

  getConfigs(projectId: number, options?: Signal): Promise<Config[]> {
    return this._api(`get_configs/${projectId}`, options);
  }

  addConfigGroup(projectId: number, payload: AddConfigGroup, options?: Signal): Promise<Config> {
    return this._api(`add_config_group/${projectId}`, { ...options, json: payload });
  }

  addConfig(configGroupId: number, payload: AddConfig, options?: Signal): Promise<ConfigItem> {
    return this._api(`add_config/${configGroupId}`, { ...options, json: payload });
  }

  updateConfigGroup(configGroupId: number, payload: UpdateConfigGroup, options?: Signal): Promise<Config> {
    return this._api(`update_config_group/${configGroupId}`, { ...options, json: payload });
  }

  updateConfig(configId: number, payload: UpdateConfig, options?: Signal): Promise<ConfigItem> {
    return this._api(`update_config/${configId}`, { ...options, json: payload });
  }

  deleteConfigGroup(configGroupId: number, options?: Signal): Promise<void> {
    return this._api(`delete_config_group/${configGroupId}`, options);
  }

  deleteConfig(configId: number, options?: Signal): Promise<void> {
    return this._api(`delete_config/${configId}`, options);
  }

  getDataset(datasetId: number, options?: Signal): Promise<Dataset> {
    return this._api(`get_dataset/${datasetId}`, options);
  }

  getDatasets(projectId: number, filters?: Pagination, options?: Signal): Promise<Dataset[]> {
    return pagination('datasets', filters, (filters) => {
      return this._api(`get_datasets/${projectId}`, { ...options, query: filters });
    });
  }

  addDataset(projectId: number, payload: AddDataset, options?: Signal): Promise<Group> {
    return this._api(`add_dataset/${projectId}`, { ...options, json: payload });
  }

  updateDataset(datasetId: number, payload: AddDataset, options?: Signal): Promise<Group> {
    return this._api(`update_dataset/${datasetId}`, { ...options, json: payload });
  }

  deleteDataset(datasetId: number, options?: Signal): Promise<void> {
    return this._api(`delete_dataset/${datasetId}`, options);
  }

  getGroup(groupId: number, options?: Signal): Promise<Group> {
    return this._api(`get_group/${groupId}`, options);
  }

  getGroups(filters?: Pagination, options?: Signal): Promise<Group[]> {
    return pagination('groups', filters, (filters) => {
      return this._api('get_groups', { ...options, query: filters });
    });
  }

  addGroup(payload: AddGroup, options?: Signal): Promise<Group> {
    return this._api('add_group', { ...options, json: payload });
  }

  updateGroup(groupId: number, payload: AddGroup, options?: Signal): Promise<Group> {
    return this._api(`update_group/${groupId}`, { ...options, json: payload });
  }

  deleteGroup(groupId: number, options?: Signal): Promise<void> {
    return this._api(`delete_group/${groupId}`, options);
  }

  getMilestone(milestoneId: number, options?: Signal): Promise<Milestone> {
    return this._api(`get_milestone/${milestoneId}`, options);
  }

  getMilestones(projectId: number, filters?: MilestoneFilters, options?: Signal): Promise<Milestone[]> {
    return pagination('milestones', filters, (filters) => {
      return this._api(`get_milestones/${projectId}`, { ...options, query: filters });
    });
  }

  addMilestone(projectId: number, payload: AddMilestone, options?: Signal): Promise<Milestone> {
    return this._api(`add_milestone/${projectId}`, { ...options, json: payload });
  }

  updateMilestone(milestoneId: number, payload: UpdateMilestone, options?: Signal): Promise<Milestone> {
    return this._api(`update_milestone/${milestoneId}`, { ...options, json: payload });
  }

  deleteMilestone(milestoneId: number, options?: Signal): Promise<void> {
    return this._api(`delete_milestone/${milestoneId}`, options);
  }

  getPlan(planId: number, options?: Signal): Promise<Plan> {
    return this._api(`get_plan/${planId}`, options);
  }

  getPlans(projectId: number, filters?: PlanFilters, options?: Signal): Promise<PlanItem[]> {
    return pagination('plans', filters, (filters) => {
      return this._api(`get_plans/${projectId}`, { ...options, query: filters });
    });
  }

  addPlan(projectId: number, payload: AddPlan, options?: Signal): Promise<Plan> {
    return this._api(`add_plan/${projectId}`, { ...options, json: payload });
  }

  addPlanEntry(planId: number, payload: AddPlanEntry, options?: Signal): Promise<PlanEntry> {
    return this._api(`add_plan_entry/${planId}`, { ...options, json: payload });
  }

  addRunToPlanEntry(planId: number, entryId: string, payload: AddRunToPlanEntry, options?: Signal): Promise<PlanEntry> {
    return this._api(`add_run_to_plan_entry/${planId}/${entryId}`, { ...options, json: payload });
  }

  updatePlan(planId: number, payload: UpdatePlan, options?: Signal): Promise<Plan> {
    return this._api(`update_plan/${planId}`, { ...options, json: payload });
  }

  updatePlanEntry(planId: number, entryId: string, payload: UpdatePlanEntry, options?: Signal): Promise<PlanEntry> {
    return this._api(`update_plan_entry/${planId}/${entryId}`, { ...options, json: payload });
  }

  updateRunInPlanEntry(runId: number, payload: UpdateRunInPlanEntry, options?: Signal): Promise<PlanEntry> {
    return this._api(`update_run_in_plan_entry/${runId}`, { ...options, json: payload });
  }

  closePlan(planId: number, options?: Signal): Promise<Plan> {
    return this._api(`close_plan/${planId}`, options);
  }

  deletePlan(planId: number, options?: Signal): Promise<void> {
    return this._api(`delete_plan/${planId}`, options);
  }

  deletePlanEntry(planId: number, entryId: string, options?: Signal): Promise<void> {
    return this._api(`delete_plan_entry/${planId}/${entryId}`, options);
  }

  deleteRunFromPlanEntry(runId: number, options?: Signal): Promise<void> {
    return this._api(`delete_run_from_plan_entry/${runId}`, options);
  }

  getPriorities(options?: Signal): Promise<Priority[]> {
    return this._api('get_priorities', options);
  }

  getProject(projectId: number, options?: Signal): Promise<Project> {
    return this._api(`get_project/${projectId}`, options);
  }

  getProjects(filters?: ProjectFilters, options?: Signal): Promise<Project[]> {
    return pagination('projects', filters, (filters) => {
      return this._api('get_projects', { ...options, query: filters });
    });
  }

  addProject(payload: AddProject, options?: Signal): Promise<Project> {
    return this._api('add_project', { ...options, json: payload });
  }

  updateProject(projectId: number, payload: UpdateProject, options?: Signal): Promise<Project> {
    return this._api(`update_project/${projectId}`, { ...options, json: payload });
  }

  deleteProject(projectId: number, options?: Signal): Promise<void> {
    return this._api(`delete_project/${projectId}`, options);
  }

  getReports(projectId: number, options?: Signal): Promise<Report[]> {
    return this._api(`get_reports/${projectId}`, options);
  }

  runReport(reportTemplateId: number, options?: Signal): Promise<ReportUrls> {
    return this._api(`run_report/${reportTemplateId}`, options);
  }

  getResults(testId: number, filters?: ResultFilters, options?: Signal): Promise<Result[]> {
    return pagination('results', filters, (filters) => {
      return this._api(`get_results/${testId}`, { ...options, query: filters });
    });
  }

  getResultsForCase(runId: number, caseId: number, filters?: ResultFilters, options?: Signal): Promise<Result[]> {
    return pagination('results', filters, (filters) => {
      return this._api(`get_results_for_case/${runId}/${caseId}`, { ...options, query: filters });
    });
  }

  getResultsForRun(runId: number, filters?: ResultForRunFilters, options?: Signal): Promise<Result[]> {
    return pagination('results', filters, (filters) => {
      return this._api(`get_results_for_run/${runId}`, { ...options, query: filters });
    });
  }

  addResult(testId: number, payload: AddResult, options?: Signal): Promise<Result> {
    return this._api(`add_result/${testId}`, { ...options, json: payload });
  }

  addResultForCase(runId: number, caseId: number, payload: AddResult, options?: Signal): Promise<Result> {
    return this._api(`add_result_for_case/${runId}/${caseId}`, { ...options, json: payload });
  }

  addResults(runId: number, payload: AddResults, options?: Signal): Promise<Result[]> {
    return this._api(`add_results/${runId}`, { ...options, json: payload });
  }

  addResultsForCases(runId: number, payload: AddResultsForCases, options?: Signal): Promise<Result[]> {
    return this._api(`add_results_for_cases/${runId}`, { ...options, json: payload });
  }

  getResultFields(options?: Signal): Promise<ResultField[]> {
    return this._api('get_result_fields', options);
  }

  getRoles(filters?: Pagination, options?: Signal): Promise<Role[]> {
    return pagination('roles', filters, (filters) => {
      return this._api('get_roles', { ...options, query: filters });
    });
  }

  getRun(runId: number, options?: Signal): Promise<Run> {
    return this._api(`get_run/${runId}`, options);
  }

  getRuns(projectId: number, filters?: RunFilters, options?: Signal): Promise<Run[]> {
    return pagination('runs', filters, (filters) => {
      return this._api(`get_runs/${projectId}`, { ...options, query: filters });
    });
  }

  addRun(projectId: number, payload: AddRun, options?: Signal): Promise<Run> {
    return this._api(`add_run/${projectId}`, { ...options, json: payload });
  }

  updateRun(runId: number, payload: UpdateRun, options?: Signal): Promise<Run> {
    return this._api(`update_run/${runId}`, { ...options, json: payload });
  }

  closeRun(runId: number, options?: Signal): Promise<Run> {
    return this._api(`close_run/${runId}`, options);
  }

  deleteRun(runId: number, options?: Signal): Promise<void> {
    return this._api(`delete_run/${runId}`, options);
  }

  getSection(sectionId: number, options?: Signal): Promise<Section> {
    return this._api(`get_section/${sectionId}`, options);
  }

  getSections(projectId: number, filters?: SectionFilters, options?: Signal): Promise<Section[]> {
    return pagination('sections', filters, (filters) => {
      return this._api(`get_sections/${projectId}`, { ...options, query: filters });
    });
  }

  addSection(projectId: number, payload: AddSection, options?: Signal): Promise<Section> {
    return this._api(`add_section/${projectId}`, { ...options, json: payload });
  }

  moveSection(sectionId: number, payload: MoveSection, options?: Signal): Promise<Section> {
    return this._api(`move_section/${sectionId}`, { ...options, json: payload });
  }

  updateSection(sectionId: number, payload: UpdateSection, options?: Signal): Promise<Section> {
    return this._api(`update_section/${sectionId}`, { ...options, json: payload });
  }

  deleteSection(sectionId: number, options?: Signal): Promise<void> {
    return this._api(`delete_section/${sectionId}`, options);
  }

  getSharedStep(stepId: number, options?: Signal): Promise<SharedStep> {
    return this._api(`get_shared_step/${stepId}`, options);
  }

  getSharedSteps(projectId: number, filters?: SharedStepFilters, options?: Signal): Promise<SharedStep[]> {
    return pagination('shared_steps', filters, (filters) => {
      return this._api(`get_shared_steps/${projectId}`, { ...options, query: filters });
    });
  }

  getSharedStepHistory(stepId: number, filters?: Pagination, options?: Signal): Promise<SharedStepHistory[]> {
    return pagination('step_history', filters, (filters) => {
      return this._api(`get_shared_step_history/${stepId}`, { ...options, query: filters });
    });
  }

  addSharedStep(projectId: number, payload: AddSharedStep, options?: Signal): Promise<SharedStep> {
    return this._api(`add_shared_step/${projectId}`, { ...options, json: payload });
  }

  updateSharedStep(stepId: number, payload: UpdateSharedStep, options?: Signal): Promise<SharedStep> {
    return this._api(`update_shared_step/${stepId}`, { ...options, json: payload });
  }

  deleteSharedStep(stepId: number, payload?: DeleteSharedStep, options?: Signal): Promise<void> {
    return this._api(`delete_shared_step/${stepId}`, { ...options, json: payload });
  }

  getStatuses(options?: Signal): Promise<Status[]> {
    return this._api('get_statuses', options);
  }

  getCaseStatuses(filters?: Pagination, options?: Signal): Promise<CaseStatus[]> {
    return pagination('case_statuses', filters, (filters) => {
      return this._api('get_case_statuses', { ...options, query: filters });
    });
  }

  getSuite(suiteId: number, options?: Signal): Promise<Suite> {
    return this._api(`get_suite/${suiteId}`, options);
  }

  getSuites(projectId: number, filters?: Pagination, options?: Signal): Promise<Suite[]> {
    return pagination('suites', filters, (filters) => {
      return this._api(`get_suites/${projectId}`, { ...options, query: filters });
    });
  }

  addSuite(projectId: number, payload: AddSuite, options?: Signal): Promise<Suite> {
    return this._api(`add_suite/${projectId}`, { ...options, json: payload });
  }

  updateSuite(suiteId: number, payload: UpdateSuite, options?: Signal): Promise<Suite> {
    return this._api(`update_suite/${suiteId}`, { ...options, json: payload });
  }

  deleteSuite(suiteId: number, options?: Signal): Promise<void> {
    return this._api(`delete_suite/${suiteId}`, options);
  }

  getTemplates(projectId: number, options?: Signal): Promise<Template[]> {
    return this._api(`get_templates/${projectId}`, options);
  }

  getTest(testId: number, options?: Signal): Promise<Test> {
    return this._api(`get_test/${testId}`, options);
  }

  getTests(runId: number, filters?: TestFilters, options?: Signal): Promise<Test[]> {
    return pagination('tests', filters, (filters) => {
      return this._api(`get_tests/${runId}`, { ...options, query: filters });
    });
  }

  getUser(userId: number, options?: Signal): Promise<User> {
    return this._api(`get_user/${userId}`, options);
  }

  getCurrentUser(options?: Signal): Promise<User> {
    return this._api(`get_current_user`, options);
  }

  getUserByEmail(email: string, options?: Signal): Promise<User> {
    return this._api('get_user_by_email', { ...options, query: { email } });
  }

  getUsers(filters?: UserFilters, options?: Signal): Promise<User[]> {
    return pagination('users', filters, (filters) => {
      return this._api('get_users', { ...options, query: filters });
    });
  }

  addUser(payload: AddUser, options?: Signal): Promise<User> {
    return this._api('add_user', { ...options, json: payload });
  }

  updateUser(userId: number, payload: AddUser, options?: Signal): Promise<User> {
    return this._api(`update_user/${userId}`, { ...options, json: payload });
  }

  getVariables(projectId: number, filters?: Pagination, options?: Signal): Promise<Variable[]> {
    return pagination('variables', filters, (filters) => {
      return this._api(`get_variables/${projectId}`, { ...options, query: filters });
    });
  }

  addVariable(projectId: number, payload: AddVariable, options?: Signal): Promise<Variable> {
    return this._api(`add_variable/${projectId}`, { ...options, json: payload });
  }

  updateVariable(variableId: number, payload: AddVariable, options?: Signal): Promise<Variable> {
    return this._api(`update_variable/${variableId}`, { ...options, json: payload });
  }

  deleteVariable(variableId: number, options?: Signal): Promise<void> {
    return this._api(`delete_variable/${variableId}`, options);
  }

  private async _api<T>(path: string, options?: Pick<RequestOptions, "query" | "json" | "form" | "signal">): Promise<T> {
    const response = await this.send(path, {
      method: path.startsWith('get_') ? 'GET' : 'POST',
      query: options?.query,
      json: options?.json,
      form: options?.form,
      signal: options?.signal,
    });

    const result: any = response.headers.get('Content-Type')?.includes('json')
      ? await response.json().catch(() => ({}))
      : await response.blob();

    if (response.ok) {
      return result;
    } else {
      throw new TestRailException(
        result?.error ||
        `No additional error message received: ${response.status} ${response.statusText}`,
      );
    }
  }
}
