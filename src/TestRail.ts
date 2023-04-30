import type { TestRailCtx } from './TestRailCtx';
import { TestRailException } from './TestRailException';
import * as methods from './groups';
import type { AddAttachment, AddCase, AddCaseField, AddConfig, AddConfigGroup, AddDataset, AddGroup, AddMilestone, AddPlan, AddPlanEntry, AddProject, AddResult, AddResults, AddResultsForCases, AddRun, AddRunToPlanEntry, AddSection, AddSharedStep, AddSuite, AddUser, AddVariable, AttachmentForCase, AttachmentForPlan, AttachmentForPlanEntry, AttachmentForRun, AttachmentForTest, Case, CaseField, CaseFilters, CaseHistory, CaseStatus, CaseType, Config, ConfigItem, CopyCasesToSection, CreatedAttachment, Dataset, DeleteCases, DeleteSharedStep, Group, Milestone, MilestoneFilters, MoveCasesToSection, MoveSection, Pagination, Plan, PlanEntry, PlanFilters, PlanItem, Priority, Project, ProjectFilters, Report, ReportUrls, Request, Response, Result, ResultField, ResultFilters, ResultForRunFilters, Role, Run, RunFilters, Section, SectionFilters, SharedStep, SharedStepFilters, SharedStepHistory, Status, Suite, Template, Test, TestFilters, UpdateCase, UpdateCases, UpdateConfig, UpdateConfigGroup, UpdateMilestone, UpdatePlan, UpdatePlanEntry, UpdateProject, UpdateRun, UpdateRunInPlanEntry, UpdateSection, UpdateSharedStep, UpdateSuite, User, UserFilters, Variable } from './payload';

export * from './payload';
export type { Request as Payload, Response as Model };

type Signal = { signal: AbortSignal };
type Mutable<T> = { -readonly [P in keyof T]: T[P] };

export default class TestRail {
  static Exception = TestRailException;
  private readonly ctx: TestRailCtx;

  constructor(config?: Pick<TestRailCtx, 'username' | 'password' | 'signal' | 'implementations'> & { host: string; }) {
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
    return methods.addAttachmentToCase(this.getCtx(options), caseId, payload);
  }

  addAttachmentToPlan(planId: number, payload: AddAttachment, options?: Signal): Promise<CreatedAttachment> {
    return methods.addAttachmentToPlan(this.getCtx(options), planId, payload);
  }

  addAttachmentToPlanEntry(planId: number, entryId: string, payload: AddAttachment, options?: Signal): Promise<CreatedAttachment> {
    return methods.addAttachmentToPlanEntry(this.getCtx(options), planId, entryId, payload);
  }

  addAttachmentToResult(resultId: number, payload: AddAttachment, options?: Signal): Promise<CreatedAttachment> {
    return methods.addAttachmentToResult(this.getCtx(options), resultId, payload);
  }

  addAttachmentToRun(runId: number, payload: AddAttachment, options?: Signal): Promise<CreatedAttachment> {
    return methods.addAttachmentToRun(this.getCtx(options), runId, payload);
  }

  getAttachmentsForCase(caseId: number, filters?: Pagination, options?: Signal): Promise<AttachmentForCase[]> {
    return methods.getAttachmentsForCase(this.getCtx(options), caseId, filters);
  }

  getAttachmentsForPlan(planId: number, filters?: Pagination, options?: Signal): Promise<AttachmentForPlan[]> {
    return methods.getAttachmentsForPlan(this.getCtx(options), planId, filters);
  }

  getAttachmentsForPlanEntry(planId: number, entryId: string, options?: Signal): Promise<AttachmentForPlanEntry[]> {
    return methods.getAttachmentsForPlanEntry(this.getCtx(options), planId, entryId);
  }

  getAttachmentsForRun(runId: number, filters?: Pagination, options?: Signal): Promise<AttachmentForRun[]> {
    return methods.getAttachmentsForRun(this.getCtx(options), runId, filters);
  }

  getAttachmentsForTest(testId: number, options?: Signal): Promise<AttachmentForTest[]> {
    return methods.getAttachmentsForTest(this.getCtx(options), testId);
  }

  getAttachment(attachmentId: string, options?: Signal): Promise<Blob> {
    return methods.getAttachment(this.getCtx(options), attachmentId);
  }

  deleteAttachment(attachmentId: string, options?: Signal): Promise<void> {
    return methods.deleteAttachment(this.getCtx(options), attachmentId);
  }

  getBdd(caseId: number, options?: Signal): Promise<Blob> {
    return methods.getBdd(this.getCtx(options), caseId);
  }

  addBdd(sectionId: number, payload: AddAttachment, options?: Signal): Promise<Case> {
    return methods.addBdd(this.getCtx(options), sectionId, payload);
  }

  getCase(caseId: number, options?: Signal): Promise<Case> {
    return methods.getCase(this.getCtx(options), caseId);
  }

  getCases(projectId: number, filters?: CaseFilters, options?: Signal): Promise<Case[]> {
    return methods.getCases(this.getCtx(options), projectId, filters);
  }

  getHistoryForCase(caseId: number, filters?: Pagination, options?: Signal): Promise<CaseHistory[]> {
    return methods.getHistoryForCase(this.getCtx(options), caseId, filters);
  }

  addCase(sectionId: number, payload: AddCase, options?: Signal): Promise<Case> {
    return methods.addCase(this.getCtx(options), sectionId, payload);
  }

  copyCasesToSection(sectionId: number, payload: CopyCasesToSection, options?: Signal): Promise<void> {
    return methods.copyCasesToSection(this.getCtx(options), sectionId, payload);
  }

  updateCase(caseId: number, payload: UpdateCase, options?: Signal): Promise<Case> {
    return methods.updateCase(this.getCtx(options), caseId, payload);
  }

  updateCases(suiteId: number, payload: UpdateCases, options?: Signal): Promise<void> {
    return methods.updateCases(this.getCtx(options), suiteId, payload);
  }

  moveCasesToSection(sectionId: number, payload: MoveCasesToSection, options?: Signal): Promise<void> {
    return methods.moveCasesToSection(this.getCtx(options), sectionId, payload);
  }

  deleteCase(caseId: number, options?: Signal): Promise<void> {
    return methods.deleteCase(this.getCtx(options), caseId);
  }

  deleteCases(suiteId: number, payload: DeleteCases, options?: Signal): Promise<void> {
    return methods.deleteCases(this.getCtx(options), suiteId, payload);
  }

  getCaseFields(options?: Signal): Promise<CaseField[]> {
    return methods.getCaseFields(this.getCtx(options));
  }

  addCaseField(payload: AddCaseField, options?: Signal): Promise<CaseField> {
    return methods.addCaseField(this.getCtx(options), payload);
  }

  getCaseTypes(options?: Signal): Promise<CaseType[]> {
    return methods.getCaseTypes(this.getCtx(options));
  }

  getConfigs(projectId: number, options?: Signal): Promise<Config[]> {
    return methods.getConfigs(this.getCtx(options), projectId);
  }

  addConfigGroup(projectId: number, payload: AddConfigGroup, options?: Signal): Promise<Config> {
    return methods.addConfigGroup(this.getCtx(options), projectId, payload);
  }

  addConfig(configGroupId: number, payload: AddConfig, options?: Signal): Promise<ConfigItem> {
    return methods.addConfig(this.getCtx(options), configGroupId, payload);
  }

  updateConfigGroup(configGroupId: number, payload: UpdateConfigGroup, options?: Signal): Promise<Config> {
    return methods.updateConfigGroup(this.getCtx(options), configGroupId, payload);
  }

  updateConfig(configId: number, payload: UpdateConfig, options?: Signal): Promise<ConfigItem> {
    return methods.updateConfig(this.getCtx(options), configId, payload);
  }

  deleteConfigGroup(configGroupId: number, options?: Signal): Promise<void> {
    return methods.deleteConfigGroup(this.getCtx(options), configGroupId);
  }

  deleteConfig(configId: number, options?: Signal): Promise<void> {
    return methods.deleteConfig(this.getCtx(options), configId);
  }

  getDataset(datasetId: number, options?: Signal): Promise<Dataset> {
    return methods.getDataset(this.getCtx(options), datasetId);
  }

  getDatasets(projectId: number, filters?: Pagination, options?: Signal): Promise<Dataset[]> {
    return methods.getDatasets(this.getCtx(options), projectId, filters);
  }

  addDataset(projectId: number, payload: AddDataset, options?: Signal): Promise<Group> {
    return methods.addDataset(this.getCtx(options), projectId, payload);
  }

  updateDataset(datasetId: number, payload: AddDataset, options?: Signal): Promise<Group> {
    return methods.updateDataset(this.getCtx(options), datasetId, payload);
  }

  deleteDataset(datasetId: number, options?: Signal): Promise<void> {
    return methods.deleteDataset(this.getCtx(options), datasetId);
  }

  getGroup(groupId: number, options?: Signal): Promise<Group> {
    return methods.getGroup(this.getCtx(options), groupId);
  }

  getGroups(filters?: Pagination, options?: Signal): Promise<Group[]> {
    return methods.getGroups(this.getCtx(options), filters);
  }

  addGroup(payload: AddGroup, options?: Signal): Promise<Group> {
    return methods.addGroup(this.getCtx(options), payload);
  }

  updateGroup(groupId: number, payload: AddGroup, options?: Signal): Promise<Group> {
    return methods.updateGroup(this.getCtx(options), groupId, payload);
  }

  deleteGroup(groupId: number, options?: Signal): Promise<void> {
    return methods.deleteGroup(this.getCtx(options), groupId);
  }

  getMilestone(milestoneId: number, options?: Signal): Promise<Milestone> {
    return methods.getMilestone(this.getCtx(options), milestoneId);
  }

  getMilestones(projectId: number, filters?: MilestoneFilters, options?: Signal): Promise<Milestone[]> {
    return methods.getMilestones(this.getCtx(options), projectId, filters);
  }

  addMilestone(projectId: number, payload: AddMilestone, options?: Signal): Promise<Milestone> {
    return methods.addMilestone(this.getCtx(options), projectId, payload);
  }

  updateMilestone(milestoneId: number, payload: UpdateMilestone, options?: Signal): Promise<Milestone> {
    return methods.updateMilestone(this.getCtx(options), milestoneId, payload);
  }

  deleteMilestone(milestoneId: number, options?: Signal): Promise<void> {
    return methods.deleteMilestone(this.getCtx(options), milestoneId);
  }

  getPlan(planId: number, options?: Signal): Promise<Plan> {
    return methods.getPlan(this.getCtx(options), planId);
  }

  getPlans(projectId: number, filters?: PlanFilters, options?: Signal): Promise<PlanItem[]> {
    return methods.getPlans(this.getCtx(options), projectId, filters);
  }

  addPlan(projectId: number, payload: AddPlan, options?: Signal): Promise<Plan> {
    return methods.addPlan(this.getCtx(options), projectId, payload);
  }

  addPlanEntry(planId: number, payload: AddPlanEntry, options?: Signal): Promise<PlanEntry> {
    return methods.addPlanEntry(this.getCtx(options), planId, payload);
  }

  addRunToPlanEntry(planId: number, entryId: string, payload: AddRunToPlanEntry, options?: Signal): Promise<PlanEntry> {
    return methods.addRunToPlanEntry(this.getCtx(options), planId, entryId, payload);
  }

  updatePlan(planId: number, payload: UpdatePlan, options?: Signal): Promise<Plan> {
    return methods.updatePlan(this.getCtx(options), planId, payload);
  }

  updatePlanEntry(planId: number, entryId: string, payload: UpdatePlanEntry, options?: Signal): Promise<PlanEntry> {
    return methods.updatePlanEntry(this.getCtx(options), planId, entryId, payload);
  }

  updateRunInPlanEntry(runId: number, payload: UpdateRunInPlanEntry, options?: Signal): Promise<PlanEntry> {
    return methods.updateRunInPlanEntry(this.getCtx(options), runId, payload);
  }

  closePlan(planId: number, options?: Signal): Promise<Plan> {
    return methods.closePlan(this.getCtx(options), planId);
  }

  deletePlan(planId: number, options?: Signal): Promise<void> {
    return methods.deletePlan(this.getCtx(options), planId);
  }

  deletePlanEntry(planId: number, entryId: string, options?: Signal): Promise<void> {
    return methods.deletePlanEntry(this.getCtx(options), planId, entryId);
  }

  deleteRunFromPlanEntry(runId: number, options?: Signal): Promise<void> {
    return methods.deleteRunFromPlanEntry(this.getCtx(options), runId);
  }

  getPriorities(options?: Signal): Promise<Priority[]> {
    return methods.getPriorities(this.getCtx(options));
  }

  getProject(projectId: number, options?: Signal): Promise<Project> {
    return methods.getProject(this.getCtx(options), projectId);
  }

  getProjects(filters?: ProjectFilters, options?: Signal): Promise<Project[]> {
    return methods.getProjects(this.getCtx(options), filters);
  }

  addProject(payload: AddProject, options?: Signal): Promise<Project> {
    return methods.addProject(this.getCtx(options), payload);
  }

  updateProject(projectId: number, payload: UpdateProject, options?: Signal): Promise<Project> {
    return methods.updateProject(this.getCtx(options), projectId, payload);
  }

  deleteProject(projectId: number, options?: Signal): Promise<void> {
    return methods.deleteProject(this.getCtx(options), projectId);
  }

  getReports(projectId: number, options?: Signal): Promise<Report[]> {
    return methods.getReports(this.getCtx(options), projectId);
  }

  runReport(reportTemplateId: number, options?: Signal): Promise<ReportUrls> {
    return methods.runReport(this.getCtx(options), reportTemplateId);
  }

  getResults(testId: number, filters?: ResultFilters, options?: Signal): Promise<Result[]> {
    return methods.getResults(this.getCtx(options), testId, filters);
  }

  getResultsForCase(runId: number, caseId: number, filters?: ResultFilters, options?: Signal): Promise<Result[]> {
    return methods.getResultsForCase(this.getCtx(options), runId, caseId, filters);
  }

  getResultsForRun(runId: number, filters?: ResultForRunFilters, options?: Signal): Promise<Result[]> {
    return methods.getResultsForRun(this.getCtx(options), runId, filters);
  }

  addResult(testId: number, payload: AddResult, options?: Signal): Promise<Result> {
    return methods.addResult(this.getCtx(options), testId, payload);
  }

  addResultForCase(runId: number, caseId: number, payload: AddResult, options?: Signal): Promise<Result> {
    return methods.addResultForCase(this.getCtx(options), runId, caseId, payload);
  }

  addResults(runId: number, payload: AddResults, options?: Signal): Promise<Result[]> {
    return methods.addResults(this.getCtx(options), runId, payload);
  }

  addResultsForCases(runId: number, payload: AddResultsForCases, options?: Signal): Promise<Result[]> {
    return methods.addResultsForCases(this.getCtx(options), runId, payload);
  }

  getResultFields(options?: Signal): Promise<ResultField[]> {
    return methods.getResultFields(this.getCtx(options));
  }

  getRoles(filters?: Pagination, options?: Signal): Promise<Role[]> {
    return methods.getRoles(this.getCtx(options), filters);
  }

  getRun(runId: number, options?: Signal): Promise<Run> {
    return methods.getRun(this.getCtx(options), runId);
  }

  getRuns(projectId: number, filters?: RunFilters, options?: Signal): Promise<Run[]> {
    return methods.getRuns(this.getCtx(options), projectId, filters);
  }

  addRun(projectId: number, payload: AddRun, options?: Signal): Promise<Run> {
    return methods.addRun(this.getCtx(options), projectId, payload);
  }

  updateRun(runId: number, payload: UpdateRun, options?: Signal): Promise<Run> {
    return methods.updateRun(this.getCtx(options), runId, payload);
  }

  closeRun(runId: number, options?: Signal): Promise<Run> {
    return methods.closeRun(this.getCtx(options), runId);
  }

  deleteRun(runId: number, options?: Signal): Promise<void> {
    return methods.deleteRun(this.getCtx(options), runId);
  }

  getSection(sectionId: number, options?: Signal): Promise<Section> {
    return methods.getSection(this.getCtx(options), sectionId);
  }

  getSections(projectId: number, filters?: SectionFilters, options?: Signal): Promise<Section[]> {
    return methods.getSections(this.getCtx(options), projectId, filters);
  }

  addSection(projectId: number, payload: AddSection, options?: Signal): Promise<Section> {
    return methods.addSection(this.getCtx(options), projectId, payload);
  }

  moveSection(sectionId: number, payload: MoveSection, options?: Signal): Promise<Section> {
    return methods.moveSection(this.getCtx(options), sectionId, payload);
  }

  updateSection(sectionId: number, payload: UpdateSection, options?: Signal): Promise<Section> {
    return methods.updateSection(this.getCtx(options), sectionId, payload);
  }

  deleteSection(sectionId: number, options?: Signal): Promise<void> {
    return methods.deleteSection(this.getCtx(options), sectionId);
  }

  getSharedStep(stepId: number, options?: Signal): Promise<SharedStep> {
    return methods.getSharedStep(this.getCtx(options), stepId);
  }

  getSharedSteps(projectId: number, filters?: SharedStepFilters, options?: Signal): Promise<SharedStep[]> {
    return methods.getSharedSteps(this.getCtx(options), projectId, filters);
  }

  getSharedStepHistory(stepId: number, filters?: Pagination, options?: Signal): Promise<SharedStepHistory[]> {
    return methods.getSharedStepHistory(this.getCtx(options), stepId, filters);
  }

  addSharedStep(projectId: number, payload: AddSharedStep, options?: Signal): Promise<SharedStep> {
    return methods.addSharedStep(this.getCtx(options), projectId, payload);
  }

  updateSharedStep(stepId: number, payload: UpdateSharedStep, options?: Signal): Promise<SharedStep> {
    return methods.updateSharedStep(this.getCtx(options), stepId, payload);
  }

  deleteSharedStep(stepId: number, payload?: DeleteSharedStep, options?: Signal): Promise<void> {
    return methods.deleteSharedStep(this.getCtx(options), stepId, payload);
  }

  getStatuses(options?: Signal): Promise<Status[]> {
    return methods.getStatuses(this.getCtx(options));
  }

  getCaseStatuses(filters?: Pagination, options?: Signal): Promise<CaseStatus[]> {
    return methods.getCaseStatuses(this.getCtx(options), filters);
  }

  getSuite(suiteId: number, options?: Signal): Promise<Suite> {
    return methods.getSuite(this.getCtx(options), suiteId);
  }

  getSuites(projectId: number, options?: Signal): Promise<Suite[]> {
    return methods.getSuites(this.getCtx(options), projectId);
  }

  addSuite(projectId: number, payload: AddSuite, options?: Signal): Promise<Suite> {
    return methods.addSuite(this.getCtx(options), projectId, payload);
  }

  updateSuite(suiteId: number, payload: UpdateSuite, options?: Signal): Promise<Suite> {
    return methods.updateSuite(this.getCtx(options), suiteId, payload);
  }

  deleteSuite(suiteId: number, options?: Signal): Promise<void> {
    return methods.deleteSuite(this.getCtx(options), suiteId);
  }

  getTemplates(projectId: number, options?: Signal): Promise<Template[]> {
    return methods.getTemplates(this.getCtx(options), projectId);
  }

  getTest(testId: number, options?: Signal): Promise<Test> {
    return methods.getTest(this.getCtx(options), testId);
  }

  getTests(runId: number, filters?: TestFilters, options?: Signal): Promise<Test[]> {
    return methods.getTests(this.getCtx(options), runId, filters);
  }

  getUser(userId: number, options?: Signal): Promise<User> {
    return methods.getUser(this.getCtx(options), userId);
  }

  getCurrentUser(options?: Signal): Promise<User> {
    return methods.getCurrentUser(this.getCtx(options));
  }

  getUserByEmail(email: string, options?: Signal): Promise<User> {
    return methods.getUserByEmail(this.getCtx(options), email);
  }

  getUsers(filters?: UserFilters, options?: Signal): Promise<User[]> {
    return methods.getUsers(this.getCtx(options), filters);
  }

  addUser(payload: AddUser, options?: Signal): Promise<User> {
    return methods.addUser(this.getCtx(options), payload);
  }

  updateUser(userId: number, payload: AddUser, options?: Signal): Promise<User> {
    return methods.updateUser(this.getCtx(options), userId, payload);
  }

  getVariables(projectId: number, filters?: Pagination, options?: Signal): Promise<Variable[]> {
    return methods.getVariables(this.getCtx(options), projectId, filters);
  }

  addVariable(projectId: number, payload: AddVariable, options?: Signal): Promise<Variable> {
    return methods.addVariable(this.getCtx(options), projectId, payload);
  }

  updateVariable(variableId: number, payload: AddVariable, options?: Signal): Promise<Variable> {
    return methods.updateVariable(this.getCtx(options), variableId, payload);
  }

  deleteVariable(variableId: number, options?: Signal): Promise<void> {
    return methods.deleteVariable(this.getCtx(options), variableId);
  }

  private getCtx(options?: Signal): TestRailCtx {
    const ctx: Mutable<TestRailCtx> = Object.create(this.ctx);

    if (options?.signal) {
      if (ctx.signal) {
        // @ts-ignore - intentionally throws "ReferrerError" if "AbortController" is not available
        const controller = new (ctx.implementations?.AbortController || AbortController)();

        if (ctx.signal.aborted) {
          controller.abort(ctx.signal.reason);
        } else if (options.signal.aborted) {
          controller.abort(options.signal.reason);
        }

        if (controller.signal.aborted) {
          throw controller.signal.reason;
        }

        ctx.signal.addEventListener('abort', onAbort);
        options.signal.addEventListener('abort', onAbort);

        function onAbort() {
          ctx.signal?.removeEventListener('abort', onAbort);
          options?.signal.removeEventListener('abort', onAbort);
          controller.abort(ctx.signal?.reason || options?.signal.reason);
        }

        ctx.signal = controller.signal;
      } else {
        ctx.signal = options.signal;
      }
    }

    return ctx;
  }
}
