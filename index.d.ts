import {Readable} from "stream"

declare class TestRail {
  constructor(config: {
    host: string
    user: string
    password: string
  })

  // https://www.gurock.com/testrail/docs/api/reference/attachments

  addAttachmentToPlan(planId: number, attachment: TestRail.NewAttachment): Promise<TestRail.AddedAttachment>

  addAttachmentToPlanEntry(planId: number, entryId: number, attachment: TestRail.NewAttachment): Promise<TestRail.AddedAttachment>

  addAttachmentToResult(resultId: number, attachment: TestRail.NewAttachment): Promise<TestRail.AddedAttachment>

  addAttachmentToRun(runId: number, attachment: TestRail.NewAttachment): Promise<TestRail.AddedAttachment>

  getAttachmentsForCase(caseId: number): Promise<TestRail.Attachment>

  getAttachmentsForPlan(planId: number): Promise<TestRail.Attachment>

  getAttachmentsForPlanEntry(planId: number, entryId: number): Promise<TestRail.Attachment>

  getAttachmentsForRun(runId: number): Promise<TestRail.Attachment>

  getAttachmentsForTest(testId: number): Promise<TestRail.Attachment>

  getAttachment(attachmentId: number): Promise<string>

  deleteAttachment(attachmentId: number): Promise<void>

  // https://www.gurock.com/testrail/docs/api/reference/cases

  getCase(caseId: number): Promise<TestRail.Case>

  getCases(projectId: number, filters?: TestRail.CaseFilters): Promise<TestRail.Case[]>

  addCase(sectionId: number, data: TestRail.NewCase): Promise<TestRail.Case>

  updateCase(caseId: number, data: TestRail.NewCase): Promise<TestRail.Case>

  deleteCase(caseId: number): void

  // https://www.gurock.com/testrail/docs/api/reference/case-fields

  getCaseFields(): Promise<TestRail.CaseField[]>

  addCaseField(data: TestRail.NewCaseField): Promise<TestRail.CaseField>

  // https://www.gurock.com/testrail/docs/api/reference/case-types

  getCaseTypes(): Promise<TestRail.CaseType[]>

  // https://www.gurock.com/testrail/docs/api/reference/configurations

  getConfigs(projectId: number): Promise<TestRail.Config[]>

  addConfigGroup(projectId: number, data: TestRail.NewConfig): Promise<TestRail.Config>

  addConfig(configGroupId: number, data: TestRail.NewConfig): Promise<TestRail.ConfigItem>

  updateConfigGroup(configGroupId: number, data: TestRail.NewConfig): Promise<TestRail.Config>

  updateConfig(configId: number, data: TestRail.NewConfig): Promise<TestRail.ConfigItem>

  deleteConfigGroup(configGroupId: number): void

  deleteConfig(configId: number): void

  // https://www.gurock.com/testrail/docs/api/reference/milestones

  getMilestone(milestoneId: number): Promise<TestRail.Milestone>

  getMilestones(projectId: number, filters?: TestRail.MilestoneFilter): Promise<TestRail.Milestone[]>

  addMilestone(projectId: number, data: TestRail.NewMilestone): Promise<TestRail.Milestone>

  updateMilestone(milestoneId: number, data: TestRail.UpdateMilestone): Promise<TestRail.Milestone>

  deleteMilestone(milestoneId: number): void

  // https://www.gurock.com/testrail/docs/api/reference/plans

  getPlan(planId: number): Promise<TestRail.PlanInfo>

  getPlans(projectId: number, filters?: TestRail.PlanFilters): Promise<TestRail.Plan[]>

  addPlan(projectId: number, data: TestRail.NewPlan): Promise<TestRail.PlanInfo>

  addPlanEntry(planId: number, data: TestRail.NewPlanEntry): Promise<TestRail.PlanEntry>

  updatePlan(planId: number, data: TestRail.UpdatePlan): Promise<TestRail.PlanInfo>

  updatePlanEntry(planId: number, entryId: string, data: TestRail.UpdatePlanEntry): Promise<TestRail.PlanEntry>

  closePlan(planId: number): Promise<TestRail.PlanInfo>

  deletePlan(planId: number): void

  deletePlanEntry(planId: number, entryId: string): void

  // https://www.gurock.com/testrail/docs/api/reference/priorities

  getPriorities(): Promise<TestRail.Priority[]>

  // https://www.gurock.com/testrail/docs/api/reference/projects

  getProject(projectId: number): Promise<TestRail.Project>

  getProjects(filters?: TestRail.ProjectFilters): Promise<TestRail.Project[]>

  addProject(data: TestRail.NewProject): Promise<TestRail.Project>

  updateProject(projectId: number, data: TestRail.UpdateProject): Promise<TestRail.Project>

  deleteProject(projectId: number): void

  // https://www.gurock.com/testrail/docs/api/reference/results

  getResults(testId: number, filters?: TestRail.ResultFilters): Promise<TestRail.Result[]>

  getResultsForCase(runId: number, caseId: number, filters?: TestRail.ResultFilters): Promise<TestRail.Result[]>

  getResultsForRun(runId: number, filters?: TestRail.ResultsForRunFilters): Promise<TestRail.Result[]>

  addResult(testId: number, data: TestRail.NewResult): Promise<TestRail.Result>

  addResultForCase(runId: number, caseId: number, data: TestRail.NewResult): Promise<TestRail.Result>

  addResults(runId: number, data: { results: TestRail.NewResult[] }): Promise<TestRail.Result[]>

  addResultsForCases(runId: number, data: TestRail.NewResultForCase): Promise<TestRail.Result[]>

  // https://www.gurock.com/testrail/docs/api/reference/result-fields

  getResultFields(): Promise<TestRail.ResultField[]>

  // https://www.gurock.com/testrail/docs/api/reference/runs

  getRun(runId: number): Promise<TestRail.Run>

  getRuns(projectId: number, filters?: TestRail.RunFilters): Promise<TestRail.Run[]>

  addRun(projectId: number, data: TestRail.NewRun): Promise<TestRail.Run>

  updateRun(runId: number, data: TestRail.UpdateRun): Promise<TestRail.Run>

  closeRun(runId: number): Promise<TestRail.Run>

  deleteRun(runId: number): void

  // https://www.gurock.com/testrail/docs/api/reference/sections

  getSection(sectionId: number): Promise<TestRail.Section>

  getSections(projectId: number, filters?: TestRail.SectionsFilters): Promise<TestRail.Section[]>

  addSection(projectId: number, data: TestRail.NewSection): Promise<TestRail.Section>

  updateSection(sectionId: number, data: TestRail.UpdateSection): Promise<TestRail.Section>

  deleteSection(sectionId: number): void

  // https://www.gurock.com/testrail/docs/api/reference/statuses

  getStatuses(): Promise<TestRail.Status[]>

  // https://www.gurock.com/testrail/docs/api/reference/suites

  getSuite(suiteId: number): Promise<TestRail.Suite>

  getSuites(projectId: number): Promise<TestRail.Suite[]>

  addSuite(projectId: number, data: TestRail.NewSuite): Promise<TestRail.Suite>

  updateSuite(suiteId: number, data: TestRail.NewSuite): Promise<TestRail.Suite>

  deleteSuite(suiteId: number): void

  // https://www.gurock.com/testrail/docs/api/reference/templates

  getTemplates(projectId: number): Promise<TestRail.Template[]>

  // https://www.gurock.com/testrail/docs/api/reference/tests

  getTest(testId: number): Promise<TestRail.Test>

  getTests(runId: number, filters?: TestRail.TestFilters): Promise<TestRail.Test[]>

  // https://www.gurock.com/testrail/docs/api/reference/users

  getUser(userId: number): Promise<TestRail.User>

  getUserByEmail(email: string): Promise<TestRail.User>

  getUsers(): Promise<TestRail.User[]>

  // https://www.gurock.com/testrail/docs/api/reference/reports

  getReports(projectId: number): Promise<TestRail.Report[]>

  runReport(reportTemplateId: number): Promise<TestRail.ReportUrls>
}

declare namespace TestRail {
  type NewAttachment = File | Readable | {
    name: String
    value: string | Blob | Readable
  }

  interface Attachment {
    id: number
    case_id: number
    created_on: number
    filename: string
    name: string
    project_id: number
    result_id?: number
    size: number
    user_id: number

    [key: string]: unknown
  }

  interface AddedAttachment {
    attachment_id: number
  }

  interface Case {
    id: number
    created_by: number
    created_on: number
    display_order: number
    estimate?: string
    estimate_forecast?: string
    milestone_id?: number
    priority_id: number
    refs?: string
    section_id: number
    suite_id: number
    template_id: number
    title: string
    type_id: number
    updated_by: number
    updated_on: number

    [key: string]: unknown
  }

  interface CaseField {
    id: number
    configs: CaseFieldConfig[]
    description?: string
    display_order: number
    include_all: boolean
    is_active: boolean
    label: string
    name: string
    system_name: string
    template_ids: Number[]
    type_id: number

    [key: string]: unknown
  }

  interface CaseFieldConfig {
    id: string
    context: Context
    options: Options

    [key: string]: unknown
  }

  interface Context {
    is_global: boolean
    project_ids?: Number[]

    [key: string]: unknown
  }

  interface Options {
    default_value?: string
    format?: string
    has_actual?: boolean
    has_expected?: boolean
    is_required: boolean
    items?: string
    rows?: string

    [key: string]: unknown
  }

  interface CaseType {
    id: number
    is_default: boolean
    name: string

    [key: string]: unknown
  }

  interface Config {
    id: number
    configs: ConfigItem[]
    name: string
    project_id: number

    [key: string]: unknown
  }

  interface ConfigItem {
    id: number
    group_id: number
    name: string

    [key: string]: unknown
  }

  interface Milestone {
    id: number
    completed_on?: number
    description?: string
    due_on?: number
    is_completed: boolean
    is_started: boolean
    milestones?: Milestone[]
    name: string
    parent_id?: number
    project_id: number
    start_on?: number
    started_on?: number
    url: string

    [key: string]: unknown
  }

  interface Plan {
    id: number
    assignedto_id?: number
    blocked_count: number
    completed_on?: number
    created_by: number
    created_on: number
    custom_status1_count: number
    custom_status2_count: number
    custom_status3_count: number
    custom_status4_count: number
    custom_status5_count: number
    custom_status6_count: number
    custom_status7_count: number
    description?: string
    failed_count: number
    is_completed: boolean
    milestone_id?: number
    name: string
    passed_count: number
    project_id: number
    retest_count: number
    untested_count: number
    url: string

    [key: string]: unknown
  }

  interface PlanInfo extends Plan {
    entries: PlanEntry[]
  }

  interface PlanEntry {
    id: string
    name: string
    runs: PlanEntryRun[]
    suite_id: number

    [key: string]: unknown
  }

  interface PlanEntryRun {
    id: number
    assignedto_id?: number
    blocked_count: number
    completed_on?: number
    config?: string
    config_ids: Number[]
    created_by: number
    created_on: number
    custom_status1_count: number
    custom_status2_count: number
    custom_status3_count: number
    custom_status4_count: number
    custom_status5_count: number
    custom_status6_count: number
    custom_status7_count: number
    description?: string
    entry_id: string
    entry_index: number
    failed_count: number
    include_all: boolean
    is_completed: boolean
    milestone_id?: number
    name: string
    passed_count: number
    plan_id: number
    project_id: number
    retest_count: number
    suite_id: number
    untested_count: number
    url: string

    [key: string]: unknown
  }

  interface Priority {
    id: number
    is_default: boolean
    name: string
    priority: number
    short_name: string

    [key: string]: unknown
  }

  interface Project {
    id: number
    announcement?: string
    completed_on?: number
    is_completed: boolean
    name: string
    show_announcement: boolean
    suite_mode: number
    url: string

    [key: string]: unknown
  }

  interface Result {
    id: number
    assignedto_id?: number
    attachment_ids: Number[]
    comment?: string
    created_by: number
    created_on: number
    defects?: string
    elapsed?: string
    status_id?: number
    test_id: number
    version?: string

    [key: string]: unknown
  }

  interface ResultField {
    id: number
    configs: CaseFieldConfig[]
    description?: string
    display_order: number
    include_all: boolean
    is_active: boolean
    label: string
    name: string
    system_name: string
    template_ids: Number[]
    type_id: number

    [key: string]: unknown
  }

  interface Run {
    id: number
    assignedto_id?: number
    blocked_count: number
    completed_on?: number
    config?: string
    config_ids: Number[]
    created_by: number
    created_on: number
    custom_status1_count: number
    custom_status2_count: number
    custom_status3_count: number
    custom_status4_count: number
    custom_status5_count: number
    custom_status6_count: number
    custom_status7_count: number
    description?: string
    failed_count: number
    include_all: boolean
    is_completed: boolean
    milestone_id?: number
    name: string
    passed_count: number
    plan_id?: number
    project_id: number
    refs?: string
    retest_count: number
    suite_id: number
    untested_count: number
    url: string

    [key: string]: unknown
  }

  interface Section {
    id: number
    depth: number
    description?: string
    display_order: number
    name: string
    parent_id?: number
    suite_id: number

    [key: string]: unknown
  }

  interface Status {
    id: number
    color_bright: number
    color_dark: number
    color_medium: number
    is_final: boolean
    is_system: boolean
    is_untested: boolean
    label: string
    name: string

    [key: string]: unknown
  }

  interface Suite {
    id: number
    completed_on?: number
    description?: string
    is_baseline: boolean
    is_completed: boolean
    is_master: boolean
    name: string
    project_id: number
    url: string

    [key: string]: unknown
  }

  interface Template {
    id: number
    is_default: boolean
    name: string

    [key: string]: unknown
  }

  interface Test {
    id: number
    assignedto_id?: number
    case_id: number
    estimate?: string
    estimate_forecast?: string
    milestone_id?: number
    priority_id: number
    refs?: string
    run_id: number
    status_id: number
    template_id: number
    title: string
    type_id: number

    [key: string]: unknown
  }

  interface User {
    id: number
    email: string
    is_active: boolean
    name: string

    [key: string]: unknown
  }

  interface Report {
    id: number
    activities_daterange?: string
    activities_daterange_from?: string
    activities_daterange_to?: string
    activities_include?: boolean
    activities_limit?: number
    activities_statuses_ids?: Number[]
    activities_statuses_include?: string
    cases_columns: {
      [key: string]: number
    }
    cases_filters?: string
    cases_groupby?: string
    cases_include_comparison?: boolean
    cases_include_coverage?: boolean
    cases_include_details?: boolean
    cases_include_new?: boolean
    cases_include_norefs?: boolean
    cases_include_refs?: boolean
    cases_include_summary?: boolean
    cases_include_updated?: boolean
    cases_limit?: number
    changes_daterange?: string
    changes_daterange_from?: string
    changes_daterange_to?: string
    content_hide_links: boolean
    custom_automation_type?: number
    defects_ids?: string
    defects_include?: string
    description?: string
    history_daterange?: string
    history_daterange_from?: string
    history_daterange_to?: string
    history_include?: boolean
    history_limit?: number
    milestones_active_include?: boolean
    milestones_completed_include?: boolean
    milestones_completed_limit?: number
    milestones_id?: number
    name: string
    notify_attachment: string
    notify_attachment_html_format: boolean
    notify_attachment_pdf_format: boolean
    notify_attachment_recipients: string
    notify_link: boolean
    notify_link_recipients?: string
    notify_user: boolean
    plans_id?: number
    progress_include?: boolean
    references_ids?: string
    references_include?: string
    results_include?: string
    runs_active_include?: boolean
    runs_completed_include?: boolean
    runs_completed_limit?: number
    runs_filters?: {
      [key: string]: any
    }
    runs_ids?: Number[]
    runs_include?: string
    runs_limit?: number
    runs_sections_ids?: Number[]
    runs_sections_include?: string
    runs_suites_id?: string
    runs_suites_ids?: string
    runs_suites_include?: string
    sections_ids?: string
    sections_include?: string
    status_include?: boolean
    statuses_ids?: Number[]
    statuses_include?: string
    suites_ids?: string
    suites_include?: string
    tests_columns?: {
      [key: string]: number
    }
    tests_filters?: string
    tests_groupby?: string
    tests_include?: boolean
    tests_include_details?: boolean
    tests_include_summary?: string
    tests_limit?: number

    [key: string]: unknown
  }

  interface ReportUrls {
    report_html: string
    report_url: string
    report_pdf: string

    [key: string]: unknown
  }

  interface CaseFilters {
    suite_id?: number
    section_id?: number
    filter?: string
    created_after?: number
    created_before?: number
    created_by?: string
    milestone_id?: string
    priority_id?: string
    template_id?: string
    type_id?: string
    updated_after?: number
    updated_before?: number
    updated_by?: string
    limit?: number
    offset?: number

    [key: string]: unknown
  }

  interface NewCase {
    title?: string
    template_id?: number
    type_id?: number
    priority_id?: number
    estimate?: string
    milestone_id?: number
    refs?: string

    [key: string]: unknown
  }

  interface NewCaseField {
    type?: string
    name?: string
    label?: string
    description?: string
    include_all?: boolean
    template_ids?: number[]
    configs?: NewCaseFieldConfig[]

    [key: string]: unknown
  }

  interface NewCaseFieldConfig {
    context?: {
      is_global?: boolean
      project_ids?: number[]

      [key: string]: unknown
    }
    options?: {
      default_value?: string
      items?: string
      rows?: string
      format?: string
      has_actual?: boolean
      has_expected?: boolean
      is_required?: boolean

      [key: string]: unknown
    }

    [key: string]: unknown
  }

  interface NewConfig {
    name?: string

    [key: string]: unknown
  }

  interface MilestoneFilter {
    is_completed?: number
    is_started?: number

    [key: string]: unknown
  }

  interface NewMilestone {
    name?: string
    description?: string
    due_on?: number
    parent_id?: number
    start_on?: number

    [key: string]: unknown
  }

  interface UpdateMilestone extends NewMilestone {
    is_completed?: boolean
    is_started?: boolean

    [key: string]: unknown
  }

  interface PlanFilters {
    created_after?: number
    created_before?: number
    created_by?: string
    is_completed?: number
    limit?: number
    offset?: number
    milestone_id?: string

    [key: string]: unknown
  }

  interface NewPlan extends UpdatePlan {
    entries?: NewPlanEntry[]

    [key: string]: unknown
  }

  interface NewPlanEntry extends UpdatePlanEntry {
    suite_id?: number
    config_ids?: number[]
    runs?: NewRun[]

    [key: string]: unknown
  }

  interface NewRun {
    suite_id?: number
    name?: string
    description?: string
    milestone_id?: number
    assignedto_id?: number
    include_all?: boolean
    case_ids?: number[]

    [key: string]: unknown
  }

  interface UpdatePlan {
    name?: string
    description?: string
    milestone_id?: number

    [key: string]: unknown
  }

  interface UpdatePlanEntry {
    name?: string
    description?: string
    assignedto_id?: number
    include_all?: boolean
    case_ids?: number[]

    [key: string]: unknown
  }

  interface ProjectFilters {
    is_completed?: number

    [key: string]: unknown
  }

  interface NewProject {
    name?: string
    announcement?: string
    show_announcement?: boolean
    suite_mode?: number

    [key: string]: unknown
  }

  interface UpdateProject extends NewProject {
    is_completed?: boolean

    [key: string]: unknown
  }

  interface ResultFilters {
    limit?: number
    offset?: number
    status_id?: string

    [key: string]: unknown
  }

  interface ResultsForRunFilters extends ResultFilters {
    created_after?: number
    created_before?: number
    created_by?: number

    [key: string]: unknown
  }

  interface NewResult {
    status_id?: number
    comment?: string
    version?: string
    elapsed?: string
    defects?: string
    assignedto_id?: number

    [key: string]: unknown
  }

  interface NewResultForCase extends NewResult {
    case_id?: number

    [key: string]: unknown
  }

  interface RunFilters {
    created_after?: number
    created_before?: number
    created_by?: string
    is_completed?: number
    limit?: number
    offset?: number
    milestone_id?: string
    suite_id?: string

    [key: string]: unknown
  }

  interface NewRun extends UpdateRun {
    suite_id?: number
    assignedto_id?: number

    // @ts-ignore
    [key: string]: unknown
  }

  interface UpdateRun {
    name?: string
    description?: string
    milestone_id?: number
    include_all?: boolean
    case_ids?: number[]

    [key: string]: unknown
  }

  interface SectionsFilters {
    suite_id?: number

    [key: string]: unknown
  }

  interface NewSection extends UpdateSection {
    suite_id?: number
    parent_id?: number

    [key: string]: unknown
  }

  interface UpdateSection {
    description?: string
    name?: string

    [key: string]: unknown
  }

  interface NewSuite {
    name?: string
    description?: string

    [key: string]: unknown
  }

  interface TestFilters {
    status_id?: string

    [key: string]: unknown
  }
}

export = TestRail
