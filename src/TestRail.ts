import type { TestRailCtx } from './TestRailCtx';
import { TestRailException } from './TestRailException';
import * as methods from './groups';
import type { AddAttachment, AddCase, AddCaseField, AddConfig, AddConfigGroup, AddDataset, AddGroup, AddMilestone, AddPlan, AddPlanEntry, AddProject, AddResult, AddResults, AddResultsForCases, AddRun, AddRunToPlanEntry, AddSection, AddSharedStep, AddSuite, AddUser, AddVariable, AttachmentForCase, AttachmentForPlan, AttachmentForPlanEntry, AttachmentForRun, AttachmentForTest, Case, CaseField, CaseFilters, CaseHistory, CaseStatus, CaseType, Config, ConfigItem, CopyCasesToSection, CreatedAttachment, Dataset, DeleteCases, DeleteSharedStep, Group, Milestone, MilestoneFilters, MoveCasesToSection, MoveSection, Pagination, Plan, PlanEntry, PlanFilters, PlanItem, Priority, Project, ProjectFilters, Report, ReportUrls, Request, Response, Result, ResultField, ResultFilters, ResultForRunFilters, Role, Run, RunFilters, Section, SectionFilters, SharedStep, SharedStepFilters, SharedStepHistory, Status, Suite, Template, Test, TestFilters, UpdateCase, UpdateCases, UpdateConfig, UpdateConfigGroup, UpdateMilestone, UpdatePlan, UpdatePlanEntry, UpdateProject, UpdateRun, UpdateRunInPlanEntry, UpdateSection, UpdateSharedStep, UpdateSuite, User, UserFilters, Variable } from './payload';

export * from './payload';
export type { Request as Payload, Response as Model };

type Signal = { signal: AbortSignal };

export default class TestRail {
  static Exception = TestRailException;
  private readonly ctx: TestRailCtx;

  constructor(config?: { host: string; username: string; password: string } & Pick<TestRailCtx, 'signal' | 'implementations'>) {
    this.ctx = {
      baseURL: (config?.host || '') + '/index.php?/api/v2/',
      // @ts-ignore - Backward compatibility
      ...(config?.user && { username: config.user }),
      ...(config?.username && { username: config.username }),
      ...(config?.password && { password: config.password }),
      ...(config?.signal && { signal: config.signal }),
      ...(config?.implementations && { implementations: config.implementations }),
    };
  }

  addAttachmentToCase(caseId: number, payload: AddAttachment, options?: Signal): Promise<CreatedAttachment> {
    return this.withCtx(options, (ctx) => methods.addAttachmentToCase(ctx, caseId, payload));
  }

  addAttachmentToPlan(planId: number, payload: AddAttachment, options?: Signal): Promise<CreatedAttachment> {
    return this.withCtx(options, (ctx) => methods.addAttachmentToPlan(ctx, planId, payload));
  }

  addAttachmentToPlanEntry(planId: number, entryId: string, payload: AddAttachment, options?: Signal): Promise<CreatedAttachment> {
    return this.withCtx(options, (ctx) => methods.addAttachmentToPlanEntry(ctx, planId, entryId, payload));
  }

  addAttachmentToResult(resultId: number, payload: AddAttachment, options?: Signal): Promise<CreatedAttachment> {
    return this.withCtx(options, (ctx) => methods.addAttachmentToResult(ctx, resultId, payload));
  }

  addAttachmentToRun(runId: number, payload: AddAttachment, options?: Signal): Promise<CreatedAttachment> {
    return this.withCtx(options, (ctx) => methods.addAttachmentToRun(ctx, runId, payload));
  }

  getAttachmentsForCase(caseId: number, filters?: Pagination, options?: Signal): Promise<AttachmentForCase[]> {
    return this.withCtx(options, (ctx) => methods.getAttachmentsForCase(ctx, caseId, filters));
  }

  getAttachmentsForPlan(planId: number, filters?: Pagination, options?: Signal): Promise<AttachmentForPlan[]> {
    return this.withCtx(options, (ctx) => methods.getAttachmentsForPlan(ctx, planId, filters));
  }

  getAttachmentsForPlanEntry(planId: number, entryId: string, options?: Signal): Promise<AttachmentForPlanEntry[]> {
    return this.withCtx(options, (ctx) => methods.getAttachmentsForPlanEntry(ctx, planId, entryId));
  }

  getAttachmentsForRun(runId: number, filters?: Pagination, options?: Signal): Promise<AttachmentForRun[]> {
    return this.withCtx(options, (ctx) => methods.getAttachmentsForRun(ctx, runId, filters));
  }

  getAttachmentsForTest(testId: number, options?: Signal): Promise<AttachmentForTest[]> {
    return this.withCtx(options, (ctx) => methods.getAttachmentsForTest(ctx, testId));
  }

  getAttachment(attachmentId: string, options?: Signal): Promise<Blob> {
    return this.withCtx(options, (ctx) => methods.getAttachment(ctx, attachmentId));
  }

  deleteAttachment(attachmentId: string, options?: Signal): Promise<void> {
    return this.withCtx(options, (ctx) => methods.deleteAttachment(ctx, attachmentId));
  }

  getBdd(caseId: number, options?: Signal): Promise<Blob> {
    return this.withCtx(options, (ctx) => methods.getBdd(ctx, caseId));
  }

  addBdd(sectionId: number, payload: AddAttachment, options?: Signal): Promise<Case> {
    return this.withCtx(options, (ctx) => methods.addBdd(ctx, sectionId, payload));
  }

  getCase(caseId: number, options?: Signal): Promise<Case> {
    return this.withCtx(options, (ctx) => methods.getCase(ctx, caseId));
  }

  getCases(projectId: number, filters?: CaseFilters, options?: Signal): Promise<Case[]> {
    return this.withCtx(options, (ctx) => methods.getCases(ctx, projectId, filters));
  }

  getHistoryForCase(caseId: number, filters?: Pagination, options?: Signal): Promise<CaseHistory[]> {
    return this.withCtx(options, (ctx) => methods.getHistoryForCase(ctx, caseId, filters));
  }

  addCase(sectionId: number, payload: AddCase, options?: Signal): Promise<Case> {
    return this.withCtx(options, (ctx) => methods.addCase(ctx, sectionId, payload));
  }

  copyCasesToSection(sectionId: number, payload: CopyCasesToSection, options?: Signal): Promise<void> {
    return this.withCtx(options, (ctx) => methods.copyCasesToSection(ctx, sectionId, payload));
  }

  updateCase(caseId: number, payload: UpdateCase, options?: Signal): Promise<Case> {
    return this.withCtx(options, (ctx) => methods.updateCase(ctx, caseId, payload));
  }

  updateCases(suiteId: number, payload: UpdateCases, options?: Signal): Promise<void> {
    return this.withCtx(options, (ctx) => methods.updateCases(ctx, suiteId, payload));
  }

  moveCasesToSection(sectionId: number, payload: MoveCasesToSection, options?: Signal): Promise<void> {
    return this.withCtx(options, (ctx) => methods.moveCasesToSection(ctx, sectionId, payload));
  }

  deleteCase(caseId: number, options?: Signal): Promise<void> {
    return this.withCtx(options, (ctx) => methods.deleteCase(ctx, caseId));
  }

  deleteCases(suiteId: number, payload: DeleteCases, options?: Signal): Promise<void> {
    return this.withCtx(options, (ctx) => methods.deleteCases(ctx, suiteId, payload));
  }

  getCaseFields(options?: Signal): Promise<CaseField[]> {
    return this.withCtx(options, (ctx) => methods.getCaseFields(ctx));
  }

  addCaseField(payload: AddCaseField, options?: Signal): Promise<CaseField> {
    return this.withCtx(options, (ctx) => methods.addCaseField(ctx, payload));
  }

  getCaseTypes(options?: Signal): Promise<CaseType[]> {
    return this.withCtx(options, (ctx) => methods.getCaseTypes(ctx));
  }

  getConfigs(projectId: number, options?: Signal): Promise<Config[]> {
    return this.withCtx(options, (ctx) => methods.getConfigs(ctx, projectId));
  }

  addConfigGroup(projectId: number, payload: AddConfigGroup, options?: Signal): Promise<Config> {
    return this.withCtx(options, (ctx) => methods.addConfigGroup(ctx, projectId, payload));
  }

  addConfig(configGroupId: number, payload: AddConfig, options?: Signal): Promise<ConfigItem> {
    return this.withCtx(options, (ctx) => methods.addConfig(ctx, configGroupId, payload));
  }

  updateConfigGroup(configGroupId: number, payload: UpdateConfigGroup, options?: Signal): Promise<Config> {
    return this.withCtx(options, (ctx) => methods.updateConfigGroup(ctx, configGroupId, payload));
  }

  updateConfig(configId: number, payload: UpdateConfig, options?: Signal): Promise<ConfigItem> {
    return this.withCtx(options, (ctx) => methods.updateConfig(ctx, configId, payload));
  }

  deleteConfigGroup(configGroupId: number, options?: Signal): Promise<void> {
    return this.withCtx(options, (ctx) => methods.deleteConfigGroup(ctx, configGroupId));
  }

  deleteConfig(configId: number, options?: Signal): Promise<void> {
    return this.withCtx(options, (ctx) => methods.deleteConfig(ctx, configId));
  }

  getDataset(datasetId: number, options?: Signal): Promise<Dataset> {
    return this.withCtx(options, (ctx) => methods.getDataset(ctx, datasetId));
  }

  getDatasets(projectId: number, filters?: Pagination, options?: Signal): Promise<Dataset[]> {
    return this.withCtx(options, (ctx) => methods.getDatasets(ctx, projectId, filters));
  }

  addDataset(projectId: number, payload: AddDataset, options?: Signal): Promise<Group> {
    return this.withCtx(options, (ctx) => methods.addDataset(ctx, projectId, payload));
  }

  updateDataset(datasetId: number, payload: AddDataset, options?: Signal): Promise<Group> {
    return this.withCtx(options, (ctx) => methods.updateDataset(ctx, datasetId, payload));
  }

  deleteDataset(datasetId: number, options?: Signal): Promise<void> {
    return this.withCtx(options, (ctx) => methods.deleteDataset(ctx, datasetId));
  }

  getGroup(groupId: number, options?: Signal): Promise<Group> {
    return this.withCtx(options, (ctx) => methods.getGroup(ctx, groupId));
  }

  getGroups(filters?: Pagination, options?: Signal): Promise<Group[]> {
    return this.withCtx(options, (ctx) => methods.getGroups(ctx, filters));
  }

  addGroup(payload: AddGroup, options?: Signal): Promise<Group> {
    return this.withCtx(options, (ctx) => methods.addGroup(ctx, payload));
  }

  updateGroup(groupId: number, payload: AddGroup, options?: Signal): Promise<Group> {
    return this.withCtx(options, (ctx) => methods.updateGroup(ctx, groupId, payload));
  }

  deleteGroup(groupId: number, options?: Signal): Promise<void> {
    return this.withCtx(options, (ctx) => methods.deleteGroup(ctx, groupId));
  }

  getMilestone(milestoneId: number, options?: Signal): Promise<Milestone> {
    return this.withCtx(options, (ctx) => methods.getMilestone(ctx, milestoneId));
  }

  getMilestones(projectId: number, filters?: MilestoneFilters, options?: Signal): Promise<Milestone[]> {
    return this.withCtx(options, (ctx) => methods.getMilestones(ctx, projectId, filters));
  }

  addMilestone(projectId: number, payload: AddMilestone, options?: Signal): Promise<Milestone> {
    return this.withCtx(options, (ctx) => methods.addMilestone(ctx, projectId, payload));
  }

  updateMilestone(milestoneId: number, payload: UpdateMilestone, options?: Signal): Promise<Milestone> {
    return this.withCtx(options, (ctx) => methods.updateMilestone(ctx, milestoneId, payload));
  }

  deleteMilestone(milestoneId: number, options?: Signal): Promise<void> {
    return this.withCtx(options, (ctx) => methods.deleteMilestone(ctx, milestoneId));
  }

  getPlan(planId: number, options?: Signal): Promise<Plan> {
    return this.withCtx(options, (ctx) => methods.getPlan(ctx, planId));
  }

  getPlans(projectId: number, filters?: PlanFilters, options?: Signal): Promise<PlanItem[]> {
    return this.withCtx(options, (ctx) => methods.getPlans(ctx, projectId, filters));
  }

  addPlan(projectId: number, payload: AddPlan, options?: Signal): Promise<Plan> {
    return this.withCtx(options, (ctx) => methods.addPlan(ctx, projectId, payload));
  }

  addPlanEntry(planId: number, payload: AddPlanEntry, options?: Signal): Promise<PlanEntry> {
    return this.withCtx(options, (ctx) => methods.addPlanEntry(ctx, planId, payload));
  }

  addRunToPlanEntry(planId: number, entryId: string, payload: AddRunToPlanEntry, options?: Signal): Promise<PlanEntry> {
    return this.withCtx(options, (ctx) => methods.addRunToPlanEntry(ctx, planId, entryId, payload));
  }

  updatePlan(planId: number, payload: UpdatePlan, options?: Signal): Promise<Plan> {
    return this.withCtx(options, (ctx) => methods.updatePlan(ctx, planId, payload));
  }

  updatePlanEntry(planId: number, entryId: string, payload: UpdatePlanEntry, options?: Signal): Promise<PlanEntry> {
    return this.withCtx(options, (ctx) => methods.updatePlanEntry(ctx, planId, entryId, payload));
  }

  updateRunInPlanEntry(runId: number, payload: UpdateRunInPlanEntry, options?: Signal): Promise<PlanEntry> {
    return this.withCtx(options, (ctx) => methods.updateRunInPlanEntry(ctx, runId, payload));
  }

  closePlan(planId: number, options?: Signal): Promise<Plan> {
    return this.withCtx(options, (ctx) => methods.closePlan(ctx, planId));
  }

  deletePlan(planId: number, options?: Signal): Promise<void> {
    return this.withCtx(options, (ctx) => methods.deletePlan(ctx, planId));
  }

  deletePlanEntry(planId: number, entryId: string, options?: Signal): Promise<void> {
    return this.withCtx(options, (ctx) => methods.deletePlanEntry(ctx, planId, entryId));
  }

  deleteRunFromPlanEntry(runId: number, options?: Signal): Promise<void> {
    return this.withCtx(options, (ctx) => methods.deleteRunFromPlanEntry(ctx, runId));
  }

  getPriorities(options?: Signal): Promise<Priority[]> {
    return this.withCtx(options, (ctx) => methods.getPriorities(ctx));
  }

  getProject(projectId: number, options?: Signal): Promise<Project> {
    return this.withCtx(options, (ctx) => methods.getProject(ctx, projectId));
  }

  getProjects(filters?: ProjectFilters, options?: Signal): Promise<Project[]> {
    return this.withCtx(options, (ctx) => methods.getProjects(ctx, filters));
  }

  addProject(payload: AddProject, options?: Signal): Promise<Project> {
    return this.withCtx(options, (ctx) => methods.addProject(ctx, payload));
  }

  updateProject(projectId: number, payload: UpdateProject, options?: Signal): Promise<Project> {
    return this.withCtx(options, (ctx) => methods.updateProject(ctx, projectId, payload));
  }

  deleteProject(projectId: number, options?: Signal): Promise<void> {
    return this.withCtx(options, (ctx) => methods.deleteProject(ctx, projectId));
  }

  getReports(projectId: number, options?: Signal): Promise<Report[]> {
    return this.withCtx(options, (ctx) => methods.getReports(ctx, projectId));
  }

  runReport(reportTemplateId: number, options?: Signal): Promise<ReportUrls> {
    return this.withCtx(options, (ctx) => methods.runReport(ctx, reportTemplateId));
  }

  getResults(testId: number, filters?: ResultFilters, options?: Signal): Promise<Result[]> {
    return this.withCtx(options, (ctx) => methods.getResults(ctx, testId, filters));
  }

  getResultsForCase(runId: number, caseId: number, filters?: ResultFilters, options?: Signal): Promise<Result[]> {
    return this.withCtx(options, (ctx) => methods.getResultsForCase(ctx, runId, caseId, filters));
  }

  getResultsForRun(runId: number, filters?: ResultForRunFilters, options?: Signal): Promise<Result[]> {
    return this.withCtx(options, (ctx) => methods.getResultsForRun(ctx, runId, filters));
  }

  addResult(testId: number, payload: AddResult, options?: Signal): Promise<Result> {
    return this.withCtx(options, (ctx) => methods.addResult(ctx, testId, payload));
  }

  addResultForCase(runId: number, caseId: number, payload: AddResult, options?: Signal): Promise<Result> {
    return this.withCtx(options, (ctx) => methods.addResultForCase(ctx, runId, caseId, payload));
  }

  addResults(runId: number, payload: AddResults, options?: Signal): Promise<Result[]> {
    return this.withCtx(options, (ctx) => methods.addResults(ctx, runId, payload));
  }

  addResultsForCases(runId: number, payload: AddResultsForCases, options?: Signal): Promise<Result[]> {
    return this.withCtx(options, (ctx) => methods.addResultsForCases(ctx, runId, payload));
  }

  getResultFields(options?: Signal): Promise<ResultField[]> {
    return this.withCtx(options, (ctx) => methods.getResultFields(ctx));
  }

  getRoles(filters?: Pagination, options?: Signal): Promise<Role[]> {
    return this.withCtx(options, (ctx) => methods.getRoles(ctx, filters));
  }

  getRun(runId: number, options?: Signal): Promise<Run> {
    return this.withCtx(options, (ctx) => methods.getRun(ctx, runId));
  }

  getRuns(projectId: number, filters?: RunFilters, options?: Signal): Promise<Run[]> {
    return this.withCtx(options, (ctx) => methods.getRuns(ctx, projectId, filters));
  }

  addRun(projectId: number, payload: AddRun, options?: Signal): Promise<Run> {
    return this.withCtx(options, (ctx) => methods.addRun(ctx, projectId, payload));
  }

  updateRun(runId: number, payload: UpdateRun, options?: Signal): Promise<Run> {
    return this.withCtx(options, (ctx) => methods.updateRun(ctx, runId, payload));
  }

  closeRun(runId: number, options?: Signal): Promise<Run> {
    return this.withCtx(options, (ctx) => methods.closeRun(ctx, runId));
  }

  deleteRun(runId: number, options?: Signal): Promise<void> {
    return this.withCtx(options, (ctx) => methods.deleteRun(ctx, runId));
  }

  getSection(sectionId: number, options?: Signal): Promise<Section> {
    return this.withCtx(options, (ctx) => methods.getSection(ctx, sectionId));
  }

  getSections(projectId: number, filters?: SectionFilters, options?: Signal): Promise<Section[]> {
    return this.withCtx(options, (ctx) => methods.getSections(ctx, projectId, filters));
  }

  addSection(projectId: number, payload: AddSection, options?: Signal): Promise<Section> {
    return this.withCtx(options, (ctx) => methods.addSection(ctx, projectId, payload));
  }

  moveSection(sectionId: number, payload: MoveSection, options?: Signal): Promise<Section> {
    return this.withCtx(options, (ctx) => methods.moveSection(ctx, sectionId, payload));
  }

  updateSection(sectionId: number, payload: UpdateSection, options?: Signal): Promise<Section> {
    return this.withCtx(options, (ctx) => methods.updateSection(ctx, sectionId, payload));
  }

  deleteSection(sectionId: number, options?: Signal): Promise<void> {
    return this.withCtx(options, (ctx) => methods.deleteSection(ctx, sectionId));
  }

  getSharedStep(stepId: number, options?: Signal): Promise<SharedStep> {
    return this.withCtx(options, (ctx) => methods.getSharedStep(ctx, stepId));
  }

  getSharedSteps(projectId: number, filters?: SharedStepFilters, options?: Signal): Promise<SharedStep[]> {
    return this.withCtx(options, (ctx) => methods.getSharedSteps(ctx, projectId, filters));
  }

  getSharedStepHistory(stepId: number, filters?: Pagination, options?: Signal): Promise<SharedStepHistory[]> {
    return this.withCtx(options, (ctx) => methods.getSharedStepHistory(ctx, stepId, filters));
  }

  addSharedStep(projectId: number, payload: AddSharedStep, options?: Signal): Promise<SharedStep> {
    return this.withCtx(options, (ctx) => methods.addSharedStep(ctx, projectId, payload));
  }

  updateSharedStep(stepId: number, payload: UpdateSharedStep, options?: Signal): Promise<SharedStep> {
    return this.withCtx(options, (ctx) => methods.updateSharedStep(ctx, stepId, payload));
  }

  deleteSharedStep(stepId: number, payload?: DeleteSharedStep, options?: Signal): Promise<void> {
    return this.withCtx(options, (ctx) => methods.deleteSharedStep(ctx, stepId, payload));
  }

  getStatuses(options?: Signal): Promise<Status[]> {
    return this.withCtx(options, (ctx) => methods.getStatuses(ctx));
  }

  getCaseStatuses(filters?: Pagination, options?: Signal): Promise<CaseStatus[]> {
    return this.withCtx(options, (ctx) => methods.getCaseStatuses(ctx, filters));
  }

  getSuite(suiteId: number, options?: Signal): Promise<Suite> {
    return this.withCtx(options, (ctx) => methods.getSuite(ctx, suiteId));
  }

  getSuites(projectId: number, options?: Signal): Promise<Suite[]> {
    return this.withCtx(options, (ctx) => methods.getSuites(ctx, projectId));
  }

  addSuite(projectId: number, payload: AddSuite, options?: Signal): Promise<Suite> {
    return this.withCtx(options, (ctx) => methods.addSuite(ctx, projectId, payload));
  }

  updateSuite(suiteId: number, payload: UpdateSuite, options?: Signal): Promise<Suite> {
    return this.withCtx(options, (ctx) => methods.updateSuite(ctx, suiteId, payload));
  }

  deleteSuite(suiteId: number, options?: Signal): Promise<void> {
    return this.withCtx(options, (ctx) => methods.deleteSuite(ctx, suiteId));
  }

  getTemplates(projectId: number, options?: Signal): Promise<Template[]> {
    return this.withCtx(options, (ctx) => methods.getTemplates(ctx, projectId));
  }

  getTest(testId: number, options?: Signal): Promise<Test> {
    return this.withCtx(options, (ctx) => methods.getTest(ctx, testId));
  }

  getTests(runId: number, filters?: TestFilters, options?: Signal): Promise<Test[]> {
    return this.withCtx(options, (ctx) => methods.getTests(ctx, runId, filters));
  }

  getUser(userId: number, options?: Signal): Promise<User> {
    return this.withCtx(options, (ctx) => methods.getUser(ctx, userId));
  }

  getCurrentUser(options?: Signal): Promise<User> {
    return this.withCtx(options, (ctx) => methods.getCurrentUser(ctx));
  }

  getUserByEmail(email: string, options?: Signal): Promise<User> {
    return this.withCtx(options, (ctx) => methods.getUserByEmail(ctx, email));
  }

  getUsers(filters?: UserFilters, options?: Signal): Promise<User[]> {
    return this.withCtx(options, (ctx) => methods.getUsers(ctx, filters));
  }

  addUser(payload: AddUser, options?: Signal): Promise<User> {
    return this.withCtx(options, (ctx) => methods.addUser(ctx, payload));
  }

  updateUser(userId: number, payload: AddUser, options?: Signal): Promise<User> {
    return this.withCtx(options, (ctx) => methods.updateUser(ctx, userId, payload));
  }

  getVariables(projectId: number, filters?: Pagination, options?: Signal): Promise<Variable[]> {
    return this.withCtx(options, (ctx) => methods.getVariables(ctx, projectId, filters));
  }

  addVariable(projectId: number, payload: AddVariable, options?: Signal): Promise<Variable> {
    return this.withCtx(options, (ctx) => methods.addVariable(ctx, projectId, payload));
  }

  updateVariable(variableId: number, payload: AddVariable, options?: Signal): Promise<Variable> {
    return this.withCtx(options, (ctx) => methods.updateVariable(ctx, variableId, payload));
  }

  deleteVariable(variableId: number, options?: Signal): Promise<void> {
    return this.withCtx(options, (ctx) => methods.deleteVariable(ctx, variableId));
  }

  private withCtx<T>(options: Signal | undefined, callback: (ctx: TestRailCtx) => Promise<T>): Promise<T> {
    const ctxSignal = this.ctx.signal;
    const optionsSignal = options?.signal;

    if (!optionsSignal) {
      return callback(this.ctx);
    }

    if (!ctxSignal) {
      return callback(Object.assign({}, this.ctx, { signal: options.signal }));
    }

    if (ctxSignal.aborted || optionsSignal.aborted) {
      return Promise.reject(ctxSignal.reason || options.signal.reason);
    }

    // @ts-ignore - intentionally throws "ReferrerError" if "AbortController" is not available
    const controller = new (this.ctx.implementations?.AbortController || AbortController)();
    const clearAbort = () => { ctxSignal.removeEventListener('abort', onAbort); optionsSignal.removeEventListener('abort', onAbort); };
    const onAbort = () => { clearAbort(); controller.abort(ctxSignal.reason || optionsSignal.reason); };
    ctxSignal.addEventListener('abort', onAbort);
    optionsSignal.addEventListener('abort', onAbort);

    return callback(Object.assign({}, this.ctx, { signal: controller.signal }))
      .then((r) => { clearAbort(); return r; }, (e) => { clearAbort(); throw e; });
  }
}
