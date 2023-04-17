import type { TestRailCtx } from './TestRailCtx';
import { TestRailException } from './TestRailException';
import * as methods from './groups';
import type { Request, Response } from './payload';

export * from './payload';
export type { Request as Payload, Response as Model };

type OmitFirstArg<F> = F extends (x: any, ...args: infer P) => infer R ? (...args: P) => R : never;

export default class TestRail {
  static Exception = TestRailException;
  private readonly ctx: TestRailCtx;

  constructor(config?: { host: string; username: string; password: string, signal?: AbortSignal }) {
    this.ctx = {
      baseURL: (config?.host || '') + '/index.php?/api/v2/',
      // @ts-ignore - Backward compatibility
      ...config?.username && { username: config?.username || config?.user },
      ...config?.password && { password: config?.password },
      ...config?.signal && { signal: config.signal }
    };
  }

  addAttachmentToCase: OmitFirstArg<typeof methods['addAttachmentToCase']> = function (this: TestRail, ...args) {
    return methods.addAttachmentToCase(this.ctx, ...args);
  };

  addAttachmentToPlan: OmitFirstArg<typeof methods['addAttachmentToPlan']> = function (this: TestRail, ...args) {
    return methods.addAttachmentToPlan(this.ctx, ...args);
  };

  addAttachmentToPlanEntry: OmitFirstArg<typeof methods['addAttachmentToPlanEntry']> = function (this: TestRail, ...args) {
    return methods.addAttachmentToPlanEntry(this.ctx, ...args);
  };

  addAttachmentToResult: OmitFirstArg<typeof methods['addAttachmentToResult']> = function (this: TestRail, ...args) {
    return methods.addAttachmentToResult(this.ctx, ...args);
  };

  addAttachmentToRun: OmitFirstArg<typeof methods['addAttachmentToRun']> = function (this: TestRail, ...args) {
    return methods.addAttachmentToRun(this.ctx, ...args);
  };

  getAttachmentsForCase: OmitFirstArg<typeof methods['getAttachmentsForCase']> = function (this: TestRail, ...args) {
    return methods.getAttachmentsForCase(this.ctx, ...args);
  };

  getAttachmentsForPlan: OmitFirstArg<typeof methods['getAttachmentsForPlan']> = function (this: TestRail, ...args) {
    return methods.getAttachmentsForPlan(this.ctx, ...args);
  };

  getAttachmentsForPlanEntry: OmitFirstArg<typeof methods['getAttachmentsForPlanEntry']> = function (this: TestRail, ...args) {
    return methods.getAttachmentsForPlanEntry(this.ctx, ...args);
  };

  getAttachmentsForRun: OmitFirstArg<typeof methods['getAttachmentsForRun']> = function (this: TestRail, ...args) {
    return methods.getAttachmentsForRun(this.ctx, ...args);
  };

  getAttachmentsForTest: OmitFirstArg<typeof methods['getAttachmentsForTest']> = function (this: TestRail, ...args) {
    return methods.getAttachmentsForTest(this.ctx, ...args);
  };

  getAttachment: OmitFirstArg<typeof methods['getAttachment']> = function (this: TestRail, ...args) {
    return methods.getAttachment(this.ctx, ...args);
  };

  deleteAttachment: OmitFirstArg<typeof methods['deleteAttachment']> = function (this: TestRail, ...args) {
    return methods.deleteAttachment(this.ctx, ...args);
  };

  getCase: OmitFirstArg<typeof methods['getCase']> = function (this: TestRail, ...args) {
    return methods.getCase(this.ctx, ...args);
  };

  getCases: OmitFirstArg<typeof methods['getCases']> = function (this: TestRail, ...args) {
    return methods.getCases(this.ctx, ...args);
  };

  getHistoryForCase: OmitFirstArg<typeof methods['getHistoryForCase']> = function (this: TestRail, ...args) {
    return methods.getHistoryForCase(this.ctx, ...args);
  };

  addCase: OmitFirstArg<typeof methods['addCase']> = function (this: TestRail, ...args) {
    return methods.addCase(this.ctx, ...args);
  };

  copyCasesToSection: OmitFirstArg<typeof methods['copyCasesToSection']> = function (this: TestRail, ...args) {
    return methods.copyCasesToSection(this.ctx, ...args);
  };

  updateCase: OmitFirstArg<typeof methods['updateCase']> = function (this: TestRail, ...args) {
    return methods.updateCase(this.ctx, ...args);
  };

  updateCases: OmitFirstArg<typeof methods['updateCases']> = function (this: TestRail, ...args) {
    return methods.updateCases(this.ctx, ...args);
  };

  moveCasesToSection: OmitFirstArg<typeof methods['moveCasesToSection']> = function (this: TestRail, ...args) {
    return methods.moveCasesToSection(this.ctx, ...args);
  };

  deleteCase: OmitFirstArg<typeof methods['deleteCase']> = function (this: TestRail, ...args) {
    return methods.deleteCase(this.ctx, ...args);
  };

  deleteCases: OmitFirstArg<typeof methods['deleteCases']> = function (this: TestRail, ...args) {
    return methods.deleteCases(this.ctx, ...args);
  };

  getCaseFields: OmitFirstArg<typeof methods['getCaseFields']> = function (this: TestRail, ...args) {
    return methods.getCaseFields(this.ctx, ...args);
  };

  addCaseField: OmitFirstArg<typeof methods['addCaseField']> = function (this: TestRail, ...args) {
    return methods.addCaseField(this.ctx, ...args);
  };

  getCaseTypes: OmitFirstArg<typeof methods['getCaseTypes']> = function (this: TestRail, ...args) {
    return methods.getCaseTypes(this.ctx, ...args);
  };

  getConfigs: OmitFirstArg<typeof methods['getConfigs']> = function (this: TestRail, ...args) {
    return methods.getConfigs(this.ctx, ...args);
  };

  addConfigGroup: OmitFirstArg<typeof methods['addConfigGroup']> = function (this: TestRail, ...args) {
    return methods.addConfigGroup(this.ctx, ...args);
  };

  addConfig: OmitFirstArg<typeof methods['addConfig']> = function (this: TestRail, ...args) {
    return methods.addConfig(this.ctx, ...args);
  };

  updateConfigGroup: OmitFirstArg<typeof methods['updateConfigGroup']> = function (this: TestRail, ...args) {
    return methods.updateConfigGroup(this.ctx, ...args);
  };

  updateConfig: OmitFirstArg<typeof methods['updateConfig']> = function (this: TestRail, ...args) {
    return methods.updateConfig(this.ctx, ...args);
  };

  deleteConfigGroup: OmitFirstArg<typeof methods['deleteConfigGroup']> = function (this: TestRail, ...args) {
    return methods.deleteConfigGroup(this.ctx, ...args);
  };

  deleteConfig: OmitFirstArg<typeof methods['deleteConfig']> = function (this: TestRail, ...args) {
    return methods.deleteConfig(this.ctx, ...args);
  };

  getDataset: OmitFirstArg<typeof methods['getDataset']> = function (this: TestRail, ...args) {
    return methods.getDataset(this.ctx, ...args);
  };

  getDatasets: OmitFirstArg<typeof methods['getDatasets']> = function (this: TestRail, ...args) {
    return methods.getDatasets(this.ctx, ...args);
  };

  addDataset: OmitFirstArg<typeof methods['addDataset']> = function (this: TestRail, ...args) {
    return methods.addDataset(this.ctx, ...args);
  };

  updateDataset: OmitFirstArg<typeof methods['updateDataset']> = function (this: TestRail, ...args) {
    return methods.updateDataset(this.ctx, ...args);
  };

  deleteDataset: OmitFirstArg<typeof methods['deleteDataset']> = function (this: TestRail, ...args) {
    return methods.deleteDataset(this.ctx, ...args);
  };

  getGroup: OmitFirstArg<typeof methods['getGroup']> = function (this: TestRail, ...args) {
    return methods.getGroup(this.ctx, ...args);
  };

  getGroups: OmitFirstArg<typeof methods['getGroups']> = function (this: TestRail, ...args) {
    return methods.getGroups(this.ctx, ...args);
  };

  addGroup: OmitFirstArg<typeof methods['addGroup']> = function (this: TestRail, ...args) {
    return methods.addGroup(this.ctx, ...args);
  };

  updateGroup: OmitFirstArg<typeof methods['updateGroup']> = function (this: TestRail, ...args) {
    return methods.updateGroup(this.ctx, ...args);
  };

  deleteGroup: OmitFirstArg<typeof methods['deleteGroup']> = function (this: TestRail, ...args) {
    return methods.deleteGroup(this.ctx, ...args);
  };

  getMilestone: OmitFirstArg<typeof methods['getMilestone']> = function (this: TestRail, ...args) {
    return methods.getMilestone(this.ctx, ...args);
  };

  getMilestones: OmitFirstArg<typeof methods['getMilestones']> = function (this: TestRail, ...args) {
    return methods.getMilestones(this.ctx, ...args);
  };

  addMilestone: OmitFirstArg<typeof methods['addMilestone']> = function (this: TestRail, ...args) {
    return methods.addMilestone(this.ctx, ...args);
  };

  updateMilestone: OmitFirstArg<typeof methods['updateMilestone']> = function (this: TestRail, ...args) {
    return methods.updateMilestone(this.ctx, ...args);
  };

  deleteMilestone: OmitFirstArg<typeof methods['deleteMilestone']> = function (this: TestRail, ...args) {
    return methods.deleteMilestone(this.ctx, ...args);
  };

  getPlan: OmitFirstArg<typeof methods['getPlan']> = function (this: TestRail, ...args) {
    return methods.getPlan(this.ctx, ...args);
  };

  getPlans: OmitFirstArg<typeof methods['getPlans']> = function (this: TestRail, ...args) {
    return methods.getPlans(this.ctx, ...args);
  };

  addPlan: OmitFirstArg<typeof methods['addPlan']> = function (this: TestRail, ...args) {
    return methods.addPlan(this.ctx, ...args);
  };

  addPlanEntry: OmitFirstArg<typeof methods['addPlanEntry']> = function (this: TestRail, ...args) {
    return methods.addPlanEntry(this.ctx, ...args);
  };

  addRunToPlanEntry: OmitFirstArg<typeof methods['addRunToPlanEntry']> = function (this: TestRail, ...args) {
    return methods.addRunToPlanEntry(this.ctx, ...args);
  };

  updatePlan: OmitFirstArg<typeof methods['updatePlan']> = function (this: TestRail, ...args) {
    return methods.updatePlan(this.ctx, ...args);
  };

  updatePlanEntry: OmitFirstArg<typeof methods['updatePlanEntry']> = function (this: TestRail, ...args) {
    return methods.updatePlanEntry(this.ctx, ...args);
  };

  updateRunInPlanEntry: OmitFirstArg<typeof methods['updateRunInPlanEntry']> = function (this: TestRail, ...args) {
    return methods.updateRunInPlanEntry(this.ctx, ...args);
  };

  closePlan: OmitFirstArg<typeof methods['closePlan']> = function (this: TestRail, ...args) {
    return methods.closePlan(this.ctx, ...args);
  };

  deletePlan: OmitFirstArg<typeof methods['deletePlan']> = function (this: TestRail, ...args) {
    return methods.deletePlan(this.ctx, ...args);
  };

  deletePlanEntry: OmitFirstArg<typeof methods['deletePlanEntry']> = function (this: TestRail, ...args) {
    return methods.deletePlanEntry(this.ctx, ...args);
  };

  deleteRunFromPlanEntry: OmitFirstArg<typeof methods['deleteRunFromPlanEntry']> = function (this: TestRail, ...args) {
    return methods.deleteRunFromPlanEntry(this.ctx, ...args);
  };

  getPriorities: OmitFirstArg<typeof methods['getPriorities']> = function (this: TestRail, ...args) {
    return methods.getPriorities(this.ctx, ...args);
  };

  getProject: OmitFirstArg<typeof methods['getProject']> = function (this: TestRail, ...args) {
    return methods.getProject(this.ctx, ...args);
  };

  getProjects: OmitFirstArg<typeof methods['getProjects']> = function (this: TestRail, ...args) {
    return methods.getProjects(this.ctx, ...args);
  };

  addProject: OmitFirstArg<typeof methods['addProject']> = function (this: TestRail, ...args) {
    return methods.addProject(this.ctx, ...args);
  };

  updateProject: OmitFirstArg<typeof methods['updateProject']> = function (this: TestRail, ...args) {
    return methods.updateProject(this.ctx, ...args);
  };

  deleteProject: OmitFirstArg<typeof methods['deleteProject']> = function (this: TestRail, ...args) {
    return methods.deleteProject(this.ctx, ...args);
  };

  getReports: OmitFirstArg<typeof methods['getReports']> = function (this: TestRail, ...args) {
    return methods.getReports(this.ctx, ...args);
  };

  runReport: OmitFirstArg<typeof methods['runReport']> = function (this: TestRail, ...args) {
    return methods.runReport(this.ctx, ...args);
  };

  getResults: OmitFirstArg<typeof methods['getResults']> = function (this: TestRail, ...args) {
    return methods.getResults(this.ctx, ...args);
  };

  getResultsForCase: OmitFirstArg<typeof methods['getResultsForCase']> = function (this: TestRail, ...args) {
    return methods.getResultsForCase(this.ctx, ...args);
  };

  getResultsForRun: OmitFirstArg<typeof methods['getResultsForRun']> = function (this: TestRail, ...args) {
    return methods.getResultsForRun(this.ctx, ...args);
  };

  addResult: OmitFirstArg<typeof methods['addResult']> = function (this: TestRail, ...args) {
    return methods.addResult(this.ctx, ...args);
  };

  addResultForCase: OmitFirstArg<typeof methods['addResultForCase']> = function (this: TestRail, ...args) {
    return methods.addResultForCase(this.ctx, ...args);
  };

  addResults: OmitFirstArg<typeof methods['addResults']> = function (this: TestRail, ...args) {
    return methods.addResults(this.ctx, ...args);
  };

  addResultsForCases: OmitFirstArg<typeof methods['addResultsForCases']> = function (this: TestRail, ...args) {
    return methods.addResultsForCases(this.ctx, ...args);
  };

  getResultFields: OmitFirstArg<typeof methods['getResultFields']> = function (this: TestRail, ...args) {
    return methods.getResultFields(this.ctx, ...args);
  };

  getRoles: OmitFirstArg<typeof methods['getRoles']> = function (this: TestRail, ...args) {
    return methods.getRoles(this.ctx, ...args);
  };

  getRun: OmitFirstArg<typeof methods['getRun']> = function (this: TestRail, ...args) {
    return methods.getRun(this.ctx, ...args);
  };

  getRuns: OmitFirstArg<typeof methods['getRuns']> = function (this: TestRail, ...args) {
    return methods.getRuns(this.ctx, ...args);
  };

  addRun: OmitFirstArg<typeof methods['addRun']> = function (this: TestRail, ...args) {
    return methods.addRun(this.ctx, ...args);
  };

  updateRun: OmitFirstArg<typeof methods['updateRun']> = function (this: TestRail, ...args) {
    return methods.updateRun(this.ctx, ...args);
  };

  closeRun: OmitFirstArg<typeof methods['closeRun']> = function (this: TestRail, ...args) {
    return methods.closeRun(this.ctx, ...args);
  };

  deleteRun: OmitFirstArg<typeof methods['deleteRun']> = function (this: TestRail, ...args) {
    return methods.deleteRun(this.ctx, ...args);
  };

  getSection: OmitFirstArg<typeof methods['getSection']> = function (this: TestRail, ...args) {
    return methods.getSection(this.ctx, ...args);
  };

  getSections: OmitFirstArg<typeof methods['getSections']> = function (this: TestRail, ...args) {
    return methods.getSections(this.ctx, ...args);
  };

  addSection: OmitFirstArg<typeof methods['addSection']> = function (this: TestRail, ...args) {
    return methods.addSection(this.ctx, ...args);
  };

  moveSection: OmitFirstArg<typeof methods['moveSection']> = function (this: TestRail, ...args) {
    return methods.moveSection(this.ctx, ...args);
  };

  updateSection: OmitFirstArg<typeof methods['updateSection']> = function (this: TestRail, ...args) {
    return methods.updateSection(this.ctx, ...args);
  };

  deleteSection: OmitFirstArg<typeof methods['deleteSection']> = function (this: TestRail, ...args) {
    return methods.deleteSection(this.ctx, ...args);
  };

  getSharedStep: OmitFirstArg<typeof methods['getSharedStep']> = function (this: TestRail, ...args) {
    return methods.getSharedStep(this.ctx, ...args);
  };

  getSharedSteps: OmitFirstArg<typeof methods['getSharedSteps']> = function (this: TestRail, ...args) {
    return methods.getSharedSteps(this.ctx, ...args);
  };

  getSharedStepHistory: OmitFirstArg<typeof methods['getSharedStepHistory']> = function (this: TestRail, ...args) {
    return methods.getSharedStepHistory(this.ctx, ...args);
  };

  addSharedStep: OmitFirstArg<typeof methods['addSharedStep']> = function (this: TestRail, ...args) {
    return methods.addSharedStep(this.ctx, ...args);
  };

  updateSharedStep: OmitFirstArg<typeof methods['updateSharedStep']> = function (this: TestRail, ...args) {
    return methods.updateSharedStep(this.ctx, ...args);
  };

  deleteSharedStep: OmitFirstArg<typeof methods['deleteSharedStep']> = function (this: TestRail, ...args) {
    return methods.deleteSharedStep(this.ctx, ...args);
  };

  getStatuses: OmitFirstArg<typeof methods['getStatuses']> = function (this: TestRail, ...args) {
    return methods.getStatuses(this.ctx, ...args);
  };

  getCaseStatuses: OmitFirstArg<typeof methods['getCaseStatuses']> = function (this: TestRail, ...args) {
    return methods.getCaseStatuses(this.ctx, ...args);
  };

  getSuite: OmitFirstArg<typeof methods['getSuite']> = function (this: TestRail, ...args) {
    return methods.getSuite(this.ctx, ...args);
  };

  getSuites: OmitFirstArg<typeof methods['getSuites']> = function (this: TestRail, ...args) {
    return methods.getSuites(this.ctx, ...args);
  };

  addSuite: OmitFirstArg<typeof methods['addSuite']> = function (this: TestRail, ...args) {
    return methods.addSuite(this.ctx, ...args);
  };

  updateSuite: OmitFirstArg<typeof methods['updateSuite']> = function (this: TestRail, ...args) {
    return methods.updateSuite(this.ctx, ...args);
  };

  deleteSuite: OmitFirstArg<typeof methods['deleteSuite']> = function (this: TestRail, ...args) {
    return methods.deleteSuite(this.ctx, ...args);
  };

  getTemplates: OmitFirstArg<typeof methods['getTemplates']> = function (this: TestRail, ...args) {
    return methods.getTemplates(this.ctx, ...args);
  };

  getTest: OmitFirstArg<typeof methods['getTest']> = function (this: TestRail, ...args) {
    return methods.getTest(this.ctx, ...args);
  };

  getTests: OmitFirstArg<typeof methods['getTests']> = function (this: TestRail, ...args) {
    return methods.getTests(this.ctx, ...args);
  };

  getUser: OmitFirstArg<typeof methods['getUser']> = function (this: TestRail, ...args) {
    return methods.getUser(this.ctx, ...args);
  };

  getCurrentUser: OmitFirstArg<typeof methods['getCurrentUser']> = function (this: TestRail, ...args) {
    return methods.getCurrentUser(this.ctx, ...args);
  };

  getUserByEmail: OmitFirstArg<typeof methods['getUserByEmail']> = function (this: TestRail, ...args) {
    return methods.getUserByEmail(this.ctx, ...args);
  };

  getUsers: OmitFirstArg<typeof methods['getUsers']> = function (this: TestRail, ...args) {
    return methods.getUsers(this.ctx, ...args);
  };

  addUser: OmitFirstArg<typeof methods['addUser']> = function (this: TestRail, ...args) {
    return methods.addUser(this.ctx, ...args);
  };

  updateUser: OmitFirstArg<typeof methods['updateUser']> = function (this: TestRail, ...args) {
    return methods.updateUser(this.ctx, ...args);
  };

  getVariables: OmitFirstArg<typeof methods['getVariables']> = function (this: TestRail, ...args) {
    return methods.getVariables(this.ctx, ...args);
  };

  addVariable: OmitFirstArg<typeof methods['addVariable']> = function (this: TestRail, ...args) {
    return methods.addVariable(this.ctx, ...args);
  };

  updateVariable: OmitFirstArg<typeof methods['updateVariable']> = function (this: TestRail, ...args) {
    return methods.updateVariable(this.ctx, ...args);
  };

  deleteVariable: OmitFirstArg<typeof methods['deleteVariable']> = function (this: TestRail, ...args) {
    return methods.deleteVariable(this.ctx, ...args);
  };
}
