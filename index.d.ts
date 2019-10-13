declare class TestRail {
  constructor(config: { host: string; user: string; password: string });

  // http://docs.gurock.com/testrail-api2/reference-attachments

  addAttachmentToResult(resultId: number, filePath: String): Promise<TestRail.AddedAttachment>;

  addAttachmentToResultForCase(resultId: number, caseId: number, filePath: String): Promise<TestRail.AddedAttachment>;

  getAttachmentsForCase(caseId: number): Promise<TestRail.Attachment>;

  getAttachmentsForTest(testId: number): Promise<TestRail.Attachment>;

  getAttachment(attachmentId: number): Promise<TestRail.Attachment>;

  deleteAttachment(attachmentId: number): Promise<void>;

  // http://docs.gurock.com/testrail-api2/reference-cases

  getCase(caseId: number): Promise<TestRail.Case>;

  getCases(projectId: number, filters?: TestRail.CaseFilters): Promise<TestRail.Case[]>;

  addCase(sectionId: number, data: TestRail.NewCase): Promise<TestRail.Case>;

  updateCase(caseId: number, data: TestRail.NewCase): Promise<TestRail.Case>;

  deleteCase(caseId: number): void;

  // http://docs.gurock.com/testrail-api2/reference-cases-fields

  getCaseFields(): Promise<TestRail.CaseField[]>;

  addCaseField(data: TestRail.NewCaseField): Promise<TestRail.CaseField>;

  // http://docs.gurock.com/testrail-api2/reference-cases-types

  getCaseTypes(): Promise<TestRail.CaseType[]>;

  // http://docs.gurock.com/testrail-api2/reference-configs

  getConfigs(projectId: number): Promise<TestRail.Config[]>;

  addConfigGroup(projectId: number, data: TestRail.NewConfig): Promise<TestRail.Config>;

  addConfig(configGroupId: number, data: TestRail.NewConfig): Promise<TestRail.ConfigItem>;

  updateConfigGroup(configGroupId: number, data: TestRail.NewConfig): Promise<TestRail.Config>;

  updateConfig(configId: number, data: TestRail.NewConfig): Promise<TestRail.ConfigItem>;

  deleteConfigGroup(configGroupId: number): void;

  deleteConfig(configId: number): void;

  // http://docs.gurock.com/testrail-api2/reference-milestones

  getMilestone(milestoneId: number): Promise<TestRail.Milestone>;

  getMilestones(projectId: number, filters?: TestRail.MilestoneFilter): Promise<TestRail.Milestone[]>;

  addMilestone(projectId: number, data: TestRail.NewMilestone): Promise<TestRail.Milestone>;

  updateMilestone(milestoneId: number, data: TestRail.UpdateMilestone): Promise<TestRail.Milestone>;

  deleteMilestone(milestoneId: number): void;

  // http://docs.gurock.com/testrail-api2/reference-plans

  getPlan(planId: number): Promise<TestRail.PlanInfo>;

  getPlans(projectId: number, filters?: TestRail.PlanFilters): Promise<TestRail.Plan[]>;

  addPlan(projectId: number, data: TestRail.NewPlan): Promise<TestRail.PlanInfo>;

  addPlanEntry(planId: number, data: TestRail.NewPlanEntry): Promise<TestRail.PlanEntry>;

  updatePlan(planId: number, data: TestRail.UpdatePlan): Promise<TestRail.PlanInfo>;

  updatePlanEntry(planId: number, entryId: string, data: TestRail.UpdatePlanEntry): Promise<TestRail.PlanEntry>;

  closePlan(planId: number): Promise<TestRail.PlanInfo>;

  deletePlan(planId: number): void;

  deletePlanEntry(planId: number, entryId: string): void;

  // http://docs.gurock.com/testrail-api2/reference-priorities

  getPriorities(): Promise<TestRail.Priority>;

  // http://docs.gurock.com/testrail-api2/reference-projects

  getProject(projectId: number): Promise<TestRail.Project>;

  getProjects(filters?: TestRail.ProjectFilters): Promise<TestRail.Project[]>;

  addProject(data: TestRail.NewProject): Promise<TestRail.Project>;

  updateProject(projectId: number, data: TestRail.UpdateProject): Promise<TestRail.Project>;

  deleteProject(projectId: number): void;

  // http://docs.gurock.com/testrail-api2/reference-results

  getResults(testId: number, filters?: TestRail.ResultFilters): Promise<TestRail.Result[]>;

  getResultsForCase(runId: number, caseId, filters?: TestRail.ResultFilters): Promise<TestRail.Result[]>;

  getResultsForRun(runId: number, filters?: TestRail.ResultsForRunFilters): Promise<TestRail.Result[]>;

  addResult(testId: number, data: TestRail.NewResult): Promise<TestRail.Result>;

  addResultForCase(runId: number, caseId: number, data: TestRail.NewResult): Promise<TestRail.Result>;

  addResults(runId: number, data: { results: TestRail.NewResult[] }): Promise<TestRail.Result[]>;

  addResultsForCases(runId: number, data: TestRail.NewResultForCase): Promise<TestRail.Result[]>;

  // http://docs.gurock.com/testrail-api2/reference-results-fields

  getResultFields(): Promise<TestRail.ResultField[]>;

  // http://docs.gurock.com/testrail-api2/reference-runs

  getRun(runId: number): Promise<TestRail.Run>;

  getRuns(projectId: number, filters?: TestRail.RunFilters): Promise<TestRail.Run[]>;

  addRun(projectId: number, data: TestRail.NewRun): Promise<TestRail.Run>;

  updateRun(runId: number, data: TestRail.UpdateRun): Promise<TestRail.Run>;

  closeRun(runId: number): Promise<TestRail.Run>;

  deleteRun(runId: number): void;

  // http://docs.gurock.com/testrail-api2/reference-sections

  getSection(sectionId: number): Promise<TestRail.Section>;

  getSections(projectId: number, filters?: TestRail.SectionsFilters): Promise<TestRail.Section[]>;

  addSection(projectId: number, data: TestRail.NewSection): Promise<TestRail.Section>;

  updateSection(sectionId: number, data: TestRail.UpdateSection): Promise<TestRail.Section>;

  deleteSection(sectionId: number): void;

  // http://docs.gurock.com/testrail-api2/reference-statuses

  getStatuses(): Promise<TestRail.Status[]>;

  // http://docs.gurock.com/testrail-api2/reference-suites

  getSuite(suiteId: number): Promise<TestRail.Suite>;

  getSuites(projectId: number): Promise<TestRail.Suite[]>;

  addSuite(projectId: number, data: TestRail.NewSuite): Promise<TestRail.Suite>;

  updateSuite(suiteId: number, data: TestRail.NewSuite): Promise<TestRail.Suite>;

  deleteSuite(suiteId: number): void;

  // http://docs.gurock.com/testrail-api2/reference-templates

  getTemplates(projectId: number): Promise<TestRail.Template[]>;

  // http://docs.gurock.com/testrail-api2/reference-tests

  getTest(testId: number): Promise<TestRail.Test>;

  getTests(runId: number, filters?: TestRail.TestFilters): Promise<TestRail.Test[]>;

  // http://docs.gurock.com/testrail-api2/reference-users

  getUser(userId: number): Promise<TestRail.User>;

  getUserByEmail(email: string): Promise<TestRail.User>;

  getUsers(): Promise<TestRail.User[]>;

  // http://docs.gurock.com/testrail-api2/reference-reports#run_reportreport_template_id

  getReports(projectId): Promise<TestRail.Report[]>;

  runReport(reportTemplateId): Promise<TestRail.ReportUrls>;
}

declare namespace TestRail {
  interface Attachment {
    id: number;
    name: string;
    filename: string;
    size: number;
    created_on: number;
    project_id: number;
    case_id: number;
    user_id: number;
    result_id: number;

    [key: string]: unknown;
  }

  interface AddedAttachment {
    attachment_id: number;
  }

  interface Case {
    id: number;
    title: string;
    section_id: number;
    template_id: number;
    type_id: number;
    priority_id: number;
    milestone_id?: number;
    refs?: string;
    created_by: number;
    created_on: number;
    updated_by: number;
    updated_on: number;
    estimate?: string;
    estimate_forecast?: string;
    suite_id: number;
    displayOrder: number;

    [key: string]: unknown;
  }

  interface CaseField {
    id: number;
    is_active: boolean;
    type_id: number;
    name: string;
    system_name: string;
    label: string;
    description?: string;
    configs: CaseFieldConfig[];
    display_order: number;
    include_all: boolean;
    template_ids: number[];

    [key: string]: unknown;
  }

  interface CaseFieldConfig extends NewCaseFieldConfig {
    id: string;

    [key: string]: unknown;
  }

  interface CaseType {
    id: number;
    name: string;
    is_default: boolean;

    [key: string]: unknown;
  }

  interface Config {
    id: number;
    name: string;
    project_id: number;
    configs: ConfigItem[];

    [key: string]: unknown;
  }

  interface ConfigItem {
    id: number;
    name: string;
    group_id: number;

    [key: string]: unknown;
  }

  interface Milestone {
    id: number;
    name: string;
    description?: string;
    start_on?: number;
    started_on?: number;
    is_started: boolean;
    due_on?: number;
    is_completed: boolean;
    completed_on?: number;
    project_id: number;
    parent_id?: number;
    url: string;
    milestones?: number[];

    [key: string]: unknown;
  }

  interface Plan {
    id: number;
    name: string;
    description?: string;
    milestone_id?: number;
    assignedto_id?: number;
    is_completed: boolean;
    completed_on?: number;
    passed_count: number;
    blocked_count: number;
    untested_count: number;
    retest_count: number;
    failed_count: number;
    custom_status1_count: number;
    custom_status2_count: number;
    custom_status3_count: number;
    custom_status4_count: number;
    custom_status5_count: number;
    custom_status6_count: number;
    custom_status7_count: number;
    project_id: number;
    created_on: number;
    created_by: number;
    url: string;

    [key: string]: unknown;
  }

  interface PlanInfo extends Plan {
    entries: PlanEntry[];
  }

  interface PlanEntry {
    id: string;
    suite_id?: number;
    name: string;
    runs: PlanEntryRun[];

    [key: string]: unknown;
  }

  interface PlanEntryRun {
    entry_id: string;
    entry_index: number;
    id: number;
    suite_id?: number;
    name: string;
    description?: string;
    milestone_id?: number;
    assignedto_id?: number;
    include_all: boolean;
    is_completed: boolean;
    completed_on?: number;
    config?: string;
    config_ids: number[];
    passed_count: number;
    blocked_count: number;
    untested_count: number;
    retest_count: number;
    failed_count: number;
    custom_status1_count: number;
    custom_status2_count: number;
    custom_status3_count: number;
    custom_status4_count: number;
    custom_status5_count: number;
    custom_status6_count: number;
    custom_status7_count: number;
    project_id: number;
    plan_id: number;
    created_on: number;
    created_by: number;
    url: string;

    [key: string]: unknown;
  }

  interface Priority {
    id: number;
    name: string;
    short_name: string;
    is_default: boolean;
    priority: number;

    [key: string]: unknown;
  }

  interface Project {
    id: number;
    name: string;
    announcement?: string;
    show_announcement: boolean;
    is_completed: boolean;
    completed_on?: number;
    suite_mode: number;
    url: string;

    [key: string]: unknown;
  }

  interface Result {
    id: number;
    test_id: number;
    status_id: number;
    created_by: number;
    created_on: number;
    assignedto_id?: number;
    comment?: string;
    version?: string;
    elapsed?: string;
    defects?: string;
    attachment_ids: number[];

    [key: string]: unknown;
  }

  interface ResultField {
    id: number;
    is_active: boolean;
    type_id: number;
    name: string;
    system_name: string;
    label: string;
    description?: string;
    configs: CaseFieldConfig[];
    display_order: number;
    include_all: boolean;
    template_ids: number[];

    [key: string]: unknown;
  }

  interface Run {
    id: number;
    suite_id: number;
    name: string;
    description?: string;
    milestone_id?: number;
    assignedto_id?: number;
    include_all: boolean;
    is_completed: boolean;
    completed_on?: number;
    config?: string;
    config_ids: number[];
    passed_count: number;
    blocked_count: number;
    untested_count: number;
    retest_count: number;
    failed_count: number;
    custom_status1_count: number;
    custom_status2_count: number;
    custom_status3_count: number;
    custom_status4_count: number;
    custom_status5_count: number;
    custom_status6_count: number;
    custom_status7_count: number;
    project_id: number;
    plan_id?: number;
    created_on: number;
    created_by: number;
    url: string;

    [key: string]: unknown;
  }

  interface Section {
    id: number;
    suite_id: number;
    name: string;
    description?: string;
    parent_id?: number;
    display_order: number;
    depth: number;

    [key: string]: unknown;
  }

  interface Status {
    id: number;
    name: string;
    label: string;
    color_dark: number;
    color_medium: number;
    color_bright: number;
    is_system: boolean;
    is_untested: boolean;
    is_final: boolean;

    [key: string]: unknown;
  }

  interface Suite {
    id: number;
    name: string;
    description?: string;
    project_id: number;
    is_master: boolean;
    is_baseline: boolean;
    is_completed: boolean;
    completed_on?: number;
    url: string;

    [key: string]: unknown;
  }

  interface Template {
    id: number;
    name: string;
    is_default: boolean;

    [key: string]: unknown;
  }

  interface Test {
    id: number;
    case_id: number;
    status_id: number;
    assignedto_id?: number;
    run_id: number;
    title: string;
    template_id: number;
    type_id: number;
    priority_id: number;
    estimate?: string;
    estimate_forecast?: string;
    refs?: string;
    milestone_id?: number;

    [key: string]: unknown;
  }

  interface User {
    id: number;
    name: string;
    email: string;
    is_active: boolean;

    [key: string]: unknown;
  }

  interface Report {
    id: number;
    name: string;
    description?: string;
    notify_user: boolean;
    notify_link: boolean;
    notify_link_recipients?: string;
    notify_attachment_recipients?: string;
    notify_attachment_html_format: boolean;
    notifyAttachmentPdfFormat: boolean;

    [key: string]: unknown;
  }

  interface ReportUrls {
    report_url: string;
    report_html: string;
    report_pdf: string;

    [key: string]: unknown;
  }

  interface CaseFilters {
    suite_id?: number;
    section_id?: number;
    filter?: string;
    created_after?: number;
    created_before?: number;
    created_by?: string;
    milestone_id?: string;
    priority_id?: string;
    template_id?: string;
    type_id?: string;
    updated_after?: number;
    updated_before?: number;
    updated_by?: string;
    limit?: number;
    offset?: number;

    [key: string]: unknown;
  }

  interface NewCase {
    title?: string;
    template_id?: number;
    type_id?: number;
    priority_id?: number;
    estimate?: number;
    milestone_id?: number;
    refs?: string;

    [key: string]: unknown;
  }

  interface NewCaseField {
    type?: string;
    name?: string;
    label?: string;
    description?: string;
    include_all?: boolean;
    template_ids?: number[];
    configs?: NewCaseFieldConfig[];

    [key: string]: unknown;
  }

  interface NewCaseFieldConfig {
    context?: {
      is_global?: boolean;
      project_ids?: number[];

      [key: string]: unknown;
    };
    options?: {
      default_value?: string;
      items?: string;
      rows?: string;
      format?: string;
      has_actual?: boolean;
      has_expected?: boolean;
      is_required?: boolean;

      [key: string]: unknown;
    };

    [key: string]: unknown;
  }

  interface NewConfig {
    name?: string;

    [key: string]: unknown;
  }

  interface MilestoneFilter {
    is_completed?: number;
    is_started?: number;

    [key: string]: unknown;
  }

  interface NewMilestone {
    name?: string;
    description?: string;
    due_on?: number;
    parent_id?: number;
    start_on?: number;

    [key: string]: unknown;
  }

  interface UpdateMilestone extends NewMilestone {
    is_completed?: boolean;
    is_started?: boolean;

    [key: string]: unknown;
  }

  interface PlanFilters {
    created_after?: number;
    created_before?: number;
    created_by?: string;
    is_completed?: number;
    limit?: number;
    offset?: number;
    milestone_id?: string;

    [key: string]: unknown;
  }

  interface NewPlan extends UpdatePlan {
    entries?: NewPlanEntry[];

    [key: string]: unknown;
  }

  interface NewPlanEntry extends UpdatePlanEntry {
    suite_id?: number;
    config_ids?: number[];
    runs?: NewRun[];

    [key: string]: unknown;
  }

  interface NewRun {
    suite_id?: number;
    name?: string;
    description?: string;
    milestone_id?: number;
    assignedto_id?: number;
    include_all?: boolean;
    case_ids?: number[];

    [key: string]: unknown;
  }

  interface UpdatePlan {
    name?: string;
    description?: string;
    milestone_id?: number;

    [key: string]: unknown;
  }

  interface UpdatePlanEntry {
    name?: string;
    description?: string;
    assignedto_id?: number;
    include_all?: boolean;
    case_ids?: number[];

    [key: string]: unknown;
  }

  interface ProjectFilters {
    is_completed?: number;

    [key: string]: unknown;
  }

  interface NewProject {
    name?: string;
    announcement?: string;
    show_announcement?: boolean;
    suite_mode?: number;

    [key: string]: unknown;
  }

  interface UpdateProject extends NewProject {
    is_completed?: boolean;

    [key: string]: unknown;
  }

  interface ResultFilters {
    limit?: number;
    offset?: number;
    status_id?: string;

    [key: string]: unknown;
  }

  interface ResultsForRunFilters extends ResultFilters {
    created_after?: number;
    created_before?: number;
    created_by?: number;

    [key: string]: unknown;
  }

  interface NewResult {
    status_id?: number;
    comment?: string;
    version?: string;
    elapsed?: string;
    defects?: string;
    assignedto_id?: number;

    [key: string]: unknown;
  }

  interface NewResultForCase extends NewResult {
    case_id?: number;

    [key: string]: unknown;
  }

  interface RunFilters {
    created_after?: number;
    created_before?: number;
    created_by?: string;
    is_completed?: number;
    limit?: number;
    offset?: number;
    milestone_id?: string;
    suite_id?: string;

    [key: string]: unknown;
  }

  interface NewRun extends UpdateRun {
    suite_id?: number;
    assignedto_id?: number;

    // @ts-ignore
    [key: string]: unknown;
  }

  interface UpdateRun {
    name?: string;
    description?: string;
    milestone_id?: number;
    include_all?: boolean;
    case_ids?: number[];

    [key: string]: unknown;
  }

  interface SectionsFilters {
    suite_id?: number;

    [key: string]: unknown;
  }

  interface NewSection extends UpdateSection {
    suite_id?: number;
    parent_id?: number;

    [key: string]: unknown;
  }

  interface UpdateSection {
    description?: string;
    name?: string;

    [key: string]: unknown;
  }

  interface NewSuite {
    name?: string;
    description?: string;

    [key: string]: unknown;
  }

  interface TestFilters {
    status_id?: string;

    [key: string]: unknown;
  }
}

export = TestRail;
