# @dlenroc/testrail · [![NPM Version](https://img.shields.io/npm/v/@dlenroc/testrail)](https://www.npmjs.com/package/@dlenroc/testrail) [![Supported Node.js version](https://img.shields.io/node/v/@dlenroc/testrail)](https://github.com/dlenroc/node-testrail-api/actions?query=workflow%3A"Node.js+CI")

## Installation

```bash
npm install @dlenroc/testrail --save
```

## Example

```typescript
// import TestRail from '@dlenroc/testrail';
// const TestRail = require('@dlenroc/testrail');

const api = new TestRail({
    host: 'https://{organization}.testrail.net',
    username: '{username}',
    password: '{token/password}',
});

const projects = await api.getProjects();

console.log(projects);
```

## APIs

### Attachments

```typescript
addAttachmentToCase(caseId: number, payload: AddAttachment): Promise<CreatedAttachment>
```

```typescript
addAttachmentToPlan(planId: number, payload: AddAttachment): Promise<CreatedAttachment>
```

```typescript
addAttachmentToPlanEntry(planId: number, entryId: string, payload: AddAttachment): Promise<CreatedAttachment>
```

```typescript
addAttachmentToResult(resultId: number, payload: AddAttachment): Promise<CreatedAttachment>
```

```typescript
addAttachmentToRun(runId: number, payload: AddAttachment): Promise<CreatedAttachment>
```

```typescript
getAttachmentsForCase(caseId: number, filters?: Pagination): Promise<AttachmentForCase[]>
```

```typescript
getAttachmentsForPlan(planId: number, filters?: Pagination): Promise<AttachmentForPlan[]>
```

```typescript
getAttachmentsForPlanEntry(planId: number, entryId: string): Promise<AttachmentForPlanEntry[]>
```

```typescript
getAttachmentsForRun(runId: number, filters?: Pagination): Promise<AttachmentForRun[]>
```

```typescript
getAttachmentsForTest(testId: number): Promise<AttachmentForTest[]>
```

```typescript
getAttachment(attachmentId: string): Promise<Blob>
```

```typescript
deleteAttachment(attachmentId: string): Promise<void>
```

### BDDs

```typescript
getBdd(caseId: number): Promise<Blob>
```

```typescript
addBdd(sectionId: number, payload: AddAttachment): Promise<Case>
```

### Cases

```typescript
getCase(caseId: number): Promise<Case>
```

```typescript
getCases(projectId: number, filters?: CaseFilters): Promise<Case[]>
```

```typescript
getHistoryForCase(caseId: number, filters?: Pagination): Promise<CaseHistory[]>
```

```typescript
addCase(sectionId: number, payload: AddCase): Promise<Case>
```

```typescript
copyCasesToSection(sectionId: number, payload: CopyCasesToSection): Promise<void>
```

```typescript
updateCase(caseId: number, payload: UpdateCase): Promise<Case>
```

```typescript
updateCases(suiteId: number, payload: UpdateCases): Promise<void>
```

```typescript
moveCasesToSection(sectionId: number, payload: MoveCasesToSection): Promise<void>
```

```typescript
deleteCase(caseId: number): Promise<void>
```

```typescript
deleteCases(suiteId: number, payload: DeleteCases): Promise<void>
```

### Case Fields

```typescript
getCaseFields(): Promise<CaseField[]>
```

```typescript
addCaseField(payload: AddCaseField): Promise<CaseField>
```

### Case Types

```typescript
getCaseTypes(): Promise<CaseType[]>
```

### Configurations

```typescript
getConfigs(projectId: number): Promise<Config[]>
```

```typescript
addConfigGroup(projectId: number, payload: AddConfigGroup): Promise<Config>
```

```typescript
addConfig(configGroupId: number, payload: AddConfig): Promise<ConfigItem>
```

```typescript
updateConfigGroup(configGroupId: number, payload: UpdateConfigGroup): Promise<Config>
```

```typescript
updateConfig(configId: number, payload: UpdateConfig): Promise<ConfigItem>
```

```typescript
deleteConfigGroup(configGroupId: number): Promise<void>
```

```typescript
deleteConfig(configId: number): Promise<void>
```

### Datasets

```typescript
getDataset(datasetId: number): Promise<Dataset>
```

```typescript
getDatasets(projectId: number, filters?: Pagination): Promise<Dataset[]>
```

```typescript
addDataset(projectId: number, payload: AddDataset): Promise<Group>
```

```typescript
updateDataset(datasetId: number, payload: AddDataset): Promise<Group>
```

```typescript
deleteDataset(datasetId: number): Promise<void>
```

### Groups

```typecript
getGroup(groupId: number): Promise<Group>
```

```typecript
getGroups(filters?: Pagination): Promise<Group[]>
```

```typecript
addGroup(payload: AddGroup): Promise<Group>
```

```typecript
updateGroup(groupId: number, payload: AddGroup): Promise<Group>
```

```typecript
deleteGroup(groupId: number): Promise<void>
```

### Milestones

```typescript
getMilestone(milestoneId: number): Promise<Milestone>
```

```typescript
getMilestones(projectId: number, filters?: MilestoneFilters): Promise<Milestone[]>
```

```typescript
addMilestone(projectId: number, payload: AddMilestone): Promise<Milestone>
```

```typescript
updateMilestone(milestoneId: number, payload: UpdateMilestone): Promise<Milestone>
```

```typescript
deleteMilestone(milestoneId: number): Promise<void>
```

### Roles

```typescript
getRoles(filters?: Pagination): Promise<Role[]>
```

### Plans

```typescript
getPlan(planId: number): Promise<Plan>
```

```typescript
getPlans(projectId: number, filters?: PlanFilters): Promise<PlanItem[]>
```

```typescript
addPlan(projectId: number, payload: AddPlan): Promise<Plan>
```

```typescript
addPlanEntry(planId: number, payload: AddPlanEntry): Promise<PlanEntry>
```

```typescript
addRunToPlanEntry(planId: number, entryId: string, payload: AddRunToPlanEntry): Promise<PlanEntry>
```

```typescript
updatePlan(planId: number, payload: UpdatePlan): Promise<Plan>
```

```typescript
updatePlanEntry(planId: number, entryId: string, payload: UpdatePlanEntry): Promise<PlanEntry>
```

```typescript
updateRunInPlanEntry(runId: number, payload: UpdateRunInPlanEntry): Promise<PlanEntry>
```

```typescript
closePlan(planId: number): Promise<Plan>
```

```typescript
deletePlan(planId: number): Promise<void>
```

```typescript
deletePlanEntry(planId: number, entryId: string): Promise<void>
```

```typescript
deleteRunFromPlanEntry(runId: number): Promise<void>
```

### Priorities

```typescript
getPriorities(): Promise<Priority[]>
```

### Projects

```typescript
getProject(projectId: number): Promise<Project>
```

```typescript
getProjects(filters?: ProjectFilters): Promise<Project[]>
```

```typescript
addProject(payload: AddProject): Promise<Project>
```

```typescript
updateProject(projectId: number, payload: UpdateProject): Promise<Project>
```

```typescript
deleteProject(projectId: number): Promise<void>
```

### Reports

```typescript
getReports(projectId: number): Promise<Report[]>
```

```typescript
runReport(reportTemplateId: number): Promise<ReportUrls>
```

### Results

```typescript
getResults(testId: number, filters?: ResultFilters): Promise<Result[]>
```

```typescript
getResultsForCase(runId: number, caseId: number, filters?: ResultFilters): Promise<Result[]>
```

```typescript
getResultsForRun(runId: number, filters?: ResultForRunFilters): Promise<Result[]>
```

```typescript
addResult(testId: number, payload: AddResult): Promise<Result>
```

```typescript
addResultForCase(runId: number, caseId: number, payload: AddResult): Promise<Result>
```

```typescript
addResults(runId: number, payload: AddResults): Promise<Result[]>
```

```typescript
addResultsForCases(runId: number, payload: AddResultsForCases): Promise<Result[]>
```

### Result Fields

```typescript
getResultFields(): Promise<ResultField[]>
```

### Runs

```typescript
getRun(runId: number): Promise<Run>
```

```typescript
getRuns(projectId: number, filters?: RunFilters): Promise<Run[]>
```

```typescript
addRun(projectId: number, payload: AddRun): Promise<Run>
```

```typescript
updateRun(runId: number, payload: UpdateRun): Promise<Run>
```

```typescript
closeRun(runId: number): Promise<Run>
```

```typescript
deleteRun(runId: number): Promise<void>
```

### Sections

```typescript
getSection(sectionId: number): Promise<Section>
```

```typescript
getSections(projectId: number, filters?: SectionFilters): Promise<Section[]>
```

```typescript
addSection(projectId: number, payload: AddSection): Promise<Section>
```

```typescript
moveSection(sectionId: number, payload: MoveSection): Promise<Section>
```

```typescript
updateSection(sectionId: number, payload: UpdateSection): Promise<Section>
```

```typescript
deleteSection(sectionId: number): Promise<void>
```

### Shared steps

```typescript
getSharedStep(stepId: number): Promise<SharedStep>
```

```typescript
getSharedSteps(projectId: number, filters?: SharedStepFilters): Promise<SharedStep[]>
```

```typescript
getSharedStepHistory(stepId: number, filters?: Pagination): Promise<SharedStepHistory[]> {
```

```typescript
addSharedStep(projectId: number, payload: AddSharedStep): Promise<SharedStep>
```

```typescript
updateSharedStep(stepId: number, payload: UpdateSharedStep): Promise<SharedStep>
```

```typescript
deleteSharedStep(stepId: number, payload?: DeleteSharedStep): Promise<void>
```

### Statuses

```typescript
getStatuses(): Promise<Status[]>
```

```typescript
getCaseStatuses(filters?: Pagination): Promise<CaseStatus[]>
```

### Suites

```typescript
getSuite(suiteId: number): Promise<Suite>
```

```typescript
getSuites(projectId: number): Promise<Suite[]>
```

```typescript
addSuite(projectId: number, payload: AddSuite): Promise<Suite>
```

```typescript
updateSuite(suiteId: number, payload: UpdateSuite): Promise<Suite>
```

```typescript
deleteSuite(suiteId: number): Promise<void>
```

### Templates

```typescript
getTemplates(projectId: number): Promise<Template[]>
```

### Tests

```typescript
getTest(testId: number): Promise<Test>
```

```typescript
getTests(runId: number, filters?: TestFilters): Promise<Test[]>
```

### Users

```typescript
getUser(userId: number): Promise<User>
```

```typescript
getCurrentUser(): Promise<User>
```

```typescript
getUserByEmail(email: string): Promise<User>
```

```typescript
getUsers(filters?: UserFilters): Promise<User[]>
```

```typescript
addUser(payload: AddUser): Promise<User>
```

```typescript
updateUser(userId: number, payload: AddUser): Promise<User>
```

### Variables

```typescript
getVariables(projectId: number, filters?: Pagination): Promise<Variable[]>
```

```typescript
addVariable(projectId: number, payload: AddVariable): Promise<Variable>
```

```typescript
updateVariable(variableId: number, payload: AddVariable): Promise<Variable>
```

```typescript
deleteVariable(variableId: number): Promise<void>
```
