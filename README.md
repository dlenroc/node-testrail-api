[![TestRail API](https://img.shields.io/badge/TestRail%20API-v2-green.svg)](http://docs.gurock.com/testrail-api2/start)
![GitHub package version](https://img.shields.io/github/package-json/v/dlenroc/node-testrail-api.svg)
![Dependencies Status](https://img.shields.io/david/dlenroc/node-testrail-api.svg)
![GitHub top language](https://img.shields.io/github/languages/top/dlenroc/node-testrail-api.svg)

#### Installation

```bash
npm install dlenroc/node-testrail-api --save
```

#### Example

```javascript
const TestRail = require('testrail');

const api = new TestRail({
  host: 'https://{organization}.testrail.net',
  user: '{username}',
  password: '{password}'
});

let testCase = await api.getCase(1);
console.log(testCase.title);

// or

api.getCase(1).then(testCase => console.log(testCase.title));
```

## APIs

#### Attachments

```javascript
addAttachmentToResult(resultId: number, filePath: String): Promise<AddAttachment>
```

```javascript
addAttachmentToResultForCase(resultId: number, caseId: number, filePath: String): Promise<AddAttachment>
```

```javascript
getAttachmentsForCase(caseId: number): Promise<Attachment>
```

```javascript
getAttachmentsForTest(testId: number): Promise<Attachment>
```

```javascript
getAttachment(attachmentId: number): Promise<Attachment>
```

```javascript
deleteAttachment(attachmentId: number): Promise<void>
```

#### Cases

```javascript
getCase(caseId: number): Promise<Case>
```

```javascript
getCases(projectId: number, filters?: CaseFilters): Promise<Case[]>
```

```javascript
addCase(sectionId: number, data: NewCase): Promise<Case>
```

```javascript
updateCase(caseId: number, data: NewCase): Promise<Case>
```

```javascript
deleteCase(caseId: number): Promise<void>
```

#### Case Fields

```javascript
getCaseFields(): Promise<CaseField[]>
```

```javascript
addCaseField(data: NewCaseField): Promise<CaseField>
```

#### Case Types

```javascript
getCaseTypes(): Promise<CaseType[]>
```

#### Configurations

```javascript
getConfigs(projectId: number): Promise<Config[]>
```

```javascript
addConfigGroup(projectId: number, data: NewConfig): Promise<Config>
```

```javascript
addConfig(configGroupId: number, data: NewConfig): Promise<ConfigItem>
```

```javascript
updateConfigGroup(configGroupId: number, data: NewConfig): Promise<Config>
```

```javascript
updateConfig(configId: number, data: NewConfig): Promise<ConfigItem>
```

```javascript
deleteConfigGroup(configGroupId: number): Promise<void>
```

```javascript
deleteConfig(configId: number): Promise<void>
```

#### Milestones

```javascript
getMilestone(milestoneId: number): Promise<Milestone>
```

```javascript
getMilestones(projectId: number, filters?: MilestoneFilter): Promise<Milestone[]>
```

```javascript
addMilestone(projectId: number, data: NewMilestone): Promise<Milestone>
```

```javascript
updateMilestone(milestoneId: number, data: UpdateMilestone): Promise<Milestone>
```

```javascript
deleteMilestone(milestoneId: number): Promise<void>
```

#### Plans

```javascript
getPlan(planId: number): Promise<Plan>
```

```javascript
getPlans(projectId: number, filters?: PlanFilters): Promise<Plan[]>
```

```javascript
addPlan(projectId: number, data: NewPlan): Promise<Plan>
```

```javascript
addPlanEntry(planId: number, data: NewPlanEntry): Promise<PlanEntry>
```

```javascript
updatePlan(planId: number, data: UpdatePlan): Promise<Plan>
```

```javascript
updatePlanEntry(planId: number, entryId: string, data: UpdatePlanEntry): Promise<PlanEntry>
```

```javascript
closePlan(planId: number): Promise<Plan>
```

```javascript
deletePlan(planId: number): Promise<void>
```

```javascript
deletePlanEntry(planId: number, entryId: string): Promise<void>
```

#### Priorities

```javascript
getPriorities(): Promise<Priority>
```

#### Projects

```javascript
getProject(projectId: number): Promise<Project>
```

```javascript
getProjects(filters?: ProjectFilters): Promise<Project[]>
```

```javascript
addProject(data: NewProject): Promise<Project>
```

```javascript
updateProject(projectId: number, data: UpdateProject): Promise<Project>
```

```javascript
deleteProject(projectId: number): Promise<void>
```

#### Reports

```javascript
getReports(projectId: number): Promise<Report[]>
```

```javascript
runReport(reportTemplateId): Promise<ReportUrls>
```

#### Results

```javascript
getResults(testId: number, filters?: ResultFilters): Promise<Result[]>
```

```javascript
getResultsForCase(runId: number, caseId, filters?: ResultFilters): Promise<Result[]>
```

```javascript
getResultsForRun(runId: number, filters?: ResultsForRunFilters): Promise<Result[]>
```

```javascript
addResult(testId: number, data: NewResult): Promise<Result>
```

```javascript
addResultForCase(runId: number, caseId: number, data: NewResult): Promise<Result>
```

```javascript
addResults(runId: number, data: { results: NewResult[] }): Promise<Result[]>
```

```javascript
addResultsForCases(runId: number, data: NewResultForCase): Promise<Result[]>
```

#### Result Fields

```javascript
getResultFields(): Promise<ResultField[]>
```

#### Runs

```javascript
getRun(runId: number): Promise<Run>
```

```javascript
getRuns(projectId: number, filters?: RunFilters): Promise<Run[]>
```

```javascript
addRun(projectId: number, data: NewRun): Promise<Run>
```

```javascript
updateRun(runId: number, data: UpdateRun): Promise<Run>
```

```javascript
closeRun(runId: number): Promise<Run>
```

```javascript
deleteRun(runId: number): Promise<void>
```

#### Sections

```javascript
getSection(sectionId: number): Promise<Section>
```

```javascript
getSections(projectId: number, filters?: SectionsFilters): Promise<Section[]>
```

```javascript
addSection(projectId: number, data: NewSection): Promise<Section>
```

```javascript
updateSection(sectionId: number, data: UpdateSection): Promise<Section>
```

```javascript
deleteSection(sectionId: number): Promise<void>
```

#### Statuses

```javascript
getStatuses(): Promise<Status[]>
```

#### Suites

```javascript
getSuite(suiteId: number): Promise<Suite>
```

```javascript
getSuites(projectId: number): Promise<Suite[]>
```

```javascript
addSuite(projectId: number, data: NewSuite): Promise<Suite>
```

```javascript
updateSuite(suiteId: number, data: NewSuite): Promise<Suite>
```

```javascript
deleteSuite(suiteId: number): Promise<void>
```

#### Templates

```javascript
getTemplates(projectId: number): Promise<Template[]>
```

#### Tests

```javascript
getTest(testId: number): Promise<Test>
```

```javascript
getTests(runId: number, filters?: TestFilters): Promise<Test[]>
```

#### Users

```javascript
getUser(userId: number): Promise<User>
```

```javascript
getUserByEmail(email: string): Promise<User>
```

```javascript
getUsers(): Promise<User[]>
```
