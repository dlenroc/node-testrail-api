declare class TestRail {
    constructor(config: { host: string, user: string, password: string })


    // http://docs.gurock.com/testrail-api2/reference-attachments

    addAttachmentToResult(resultId: number, filePath: String): Promise<TestRail.AddAttachment>

    addAttachmentToResultForCase(resultId: number, caseId: number, filePath: String): Promise<TestRail.AddAttachment>

    getAttachmentsForCase(caseId: number): Promise<TestRail.Attachment>

    getAttachmentsForTest(testId: number): Promise<TestRail.Attachment>

    getAttachment(attachmentId: number): Promise<TestRail.Attachment>

    deleteAttachment(attachmentId: number): Promise<void>


    // http://docs.gurock.com/testrail-api2/reference-cases

    getCase(caseId: number): Promise<TestRail.Case>

    getCases(projectId: number, filters?: TestRail.CaseFilters): Promise<TestRail.Case[]>

    addCase(sectionId: number, data: TestRail.NewCase): Promise<TestRail.Case>

    updateCase(caseId: number, data: TestRail.NewCase): Promise<TestRail.Case>

    deleteCase(caseId: number): void


    // http://docs.gurock.com/testrail-api2/reference-cases-fields

    getCaseFields(): Promise<TestRail.CaseField[]>

    addCaseField(data: TestRail.NewCaseField): Promise<TestRail.CaseField>


    // http://docs.gurock.com/testrail-api2/reference-cases-types

    getCaseTypes(): Promise<TestRail.CaseType[]>


    // http://docs.gurock.com/testrail-api2/reference-configs

    getConfigs(projectId: number): Promise<TestRail.Config[]>

    addConfigGroup(projectId: number, data: TestRail.NewConfig): Promise<TestRail.Config>

    addConfig(configGroupId: number, data: TestRail.NewConfig): Promise<TestRail.ConfigItem>

    updateConfigGroup(configGroupId: number, data: TestRail.NewConfig): Promise<TestRail.Config>

    updateConfig(configId: number, data: TestRail.NewConfig): Promise<TestRail.ConfigItem>

    deleteConfigGroup(configGroupId: number): void

    deleteConfig(configId: number): void


    // http://docs.gurock.com/testrail-api2/reference-milestones

    getMilestone(milestoneId: number): Promise<TestRail.Milestone>

    getMilestones(projectId: number, filters?: TestRail.MilestoneFilter): Promise<TestRail.Milestone[]>

    addMilestone(projectId: number, data: TestRail.NewMilestone): Promise<TestRail.Milestone>

    updateMilestone(milestoneId: number, data: TestRail.UpdateMilestone): Promise<TestRail.Milestone>

    deleteMilestone(milestoneId: number): void


    // http://docs.gurock.com/testrail-api2/reference-plans

    getPlan(planId: number): Promise<TestRail.Plan>

    getPlans(projectId: number, filters?: TestRail.PlanFilters): Promise<TestRail.Plan[]>

    addPlan(projectId: number, data: TestRail.NewPlan): Promise<TestRail.Plan>

    addPlanEntry(planId: number, data: TestRail.NewPlanEntry): Promise<TestRail.PlanEntry>

    updatePlan(planId: number, data: TestRail.UpdatePlan): Promise<TestRail.Plan>

    updatePlanEntry(planId: number, entryId: string, data: TestRail.UpdatePlanEntry): Promise<TestRail.PlanEntry>

    closePlan(planId: number): Promise<TestRail.Plan>

    deletePlan(planId: number): void

    deletePlanEntry(planId: number, entryId: string): void


    // http://docs.gurock.com/testrail-api2/reference-priorities

    getPriorities(): Promise<TestRail.Priority>


    // http://docs.gurock.com/testrail-api2/reference-projects

    getProject(projectId: number): Promise<TestRail.Project>

    getProjects(filters?: TestRail.ProjectFilters): Promise<TestRail.Project[]>

    addProject(data: TestRail.NewProject): Promise<TestRail.Project>

    updateProject(projectId: number, data: TestRail.UpdateProject): Promise<TestRail.Project>

    deleteProject(projectId: number): void


    // http://docs.gurock.com/testrail-api2/reference-results

    getResults(testId: number, filters?: TestRail.ResultFilters): Promise<TestRail.Result[]>

    getResultsForCase(runId: number, caseId, filters?: TestRail.ResultFilters): Promise<TestRail.Result[]>

    getResultsForRun(runId: number, filters?: TestRail.ResultsForRunFilters): Promise<TestRail.Result[]>

    addResult(testId: number, data: TestRail.NewResult): Promise<TestRail.Result>

    addResultForCase(runId: number, caseId: number, data: TestRail.NewResult): Promise<TestRail.Result>

    addResults(runId: number, data: { results: TestRail.NewResult[] }): Promise<TestRail.Result[]>

    addResultsForCases(runId: number, data: TestRail.NewResultForCase): Promise<TestRail.Result[]>


    // http://docs.gurock.com/testrail-api2/reference-results-fields

    getResultFields(): Promise<TestRail.ResultField[]>


    // http://docs.gurock.com/testrail-api2/reference-runs

    getRun(runId: number): Promise<TestRail.Run>

    getRuns(projectId: number, filters?: TestRail.RunFilters): Promise<TestRail.Run[]>

    addRun(projectId: number, data: TestRail.NewRun): Promise<TestRail.Run>

    updateRun(runId: number, data: TestRail.UpdateRun): Promise<TestRail.Run>

    closeRun(runId: number): Promise<TestRail.Run>

    deleteRun(runId: number): void


    // http://docs.gurock.com/testrail-api2/reference-sections

    getSection(sectionId: number): Promise<TestRail.Section>

    getSections(projectId: number, filters?: TestRail.SectionsFilters): Promise<TestRail.Section[]>

    addSection(projectId: number, data: TestRail.NewSection): Promise<TestRail.Section>

    updateSection(sectionId: number, data: TestRail.UpdateSection): Promise<TestRail.Section>

    deleteSection(sectionId: number): void


    // http://docs.gurock.com/testrail-api2/reference-statuses

    getStatuses(): Promise<TestRail.Status[]>


    // http://docs.gurock.com/testrail-api2/reference-suites

    getSuite(suiteId: number): Promise<TestRail.Suite>

    getSuites(projectId: number): Promise<TestRail.Suite[]>

    addSuite(projectId: number, data: TestRail.NewSuite): Promise<TestRail.Suite>

    updateSuite(suiteId: number, data: TestRail.NewSuite): Promise<TestRail.Suite>

    deleteSuite(suiteId: number): void


    // http://docs.gurock.com/testrail-api2/reference-templates

    getTemplates(projectId: number): Promise<TestRail.Template[]>


    // http://docs.gurock.com/testrail-api2/reference-tests

    getTest(testId: number): Promise<TestRail.Test>

    getTests(runId: number, filters?: TestRail.TestFilters): Promise<TestRail.Test[]>


    // http://docs.gurock.com/testrail-api2/reference-users

    getUser(userId: number): Promise<TestRail.User>

    getUserByEmail(email: string): Promise<TestRail.User>

    getUsers(): Promise<TestRail.User[]>


    // http://docs.gurock.com/testrail-api2/reference-reports#run_reportreport_template_id

    getReports(projectId): Promise<TestRail.Report[]>

    runReport(reportTemplateId): Promise<TestRail.ReportUrls>
}

declare namespace TestRail {
    type CustomFieldType = boolean | string | number | number[] | string[] | any[] | undefined

    interface CaseFilters {
        suite_id: number
        section_id: number
        created_after: number
        created_before: number
        created_by: string
        milestone_id: string
        priority_id: string
        template_id: string
        type_id: string
        updated_after: number
        updated_before: number
        updated_by: string
        limit: number
        offset: number
    }

    interface Case {
        id: number
        title: string
        section_id: number
        template_id: number
        type_id: number
        priority_id: number
        milestone_id?: number
        refs?: string
        created_by: number
        created_on: number
        updated_by: number
        updated_on: number
        estimate?: string
        estimate_forecast?: string
        suite_id?: number

        [key: string]: CustomFieldType
    }

    interface NewCase {
        title: string
        template_id: number
        type_id: number
        priority_id: number
        estimate: number
        milestone_id: number
        refs: string

        [key: string]: CustomFieldType
    }

    interface CaseField {
        id: number
        is_active: boolean
        type_id: number
        name: string
        system_name: string
        label: string
        description?: string
        configs: CaseFieldConfig[]
        display_order: number
        include_all: boolean
        template_ids: number[]
    }

    interface NewCaseField {
        type: string
        name: string
        label: string
        description: string
        include_all: boolean
        template_ids: number[]
        configs: NewCaseFieldConfig[]
    }

    interface CaseFieldConfig extends NewCaseFieldConfig {
        id: string
    }

    interface NewCaseFieldConfig {
        context: {
            is_global: boolean
            project_ids: number[]
        }
        options: {
            is_required: boolean
            default_value: string
            format: string
            rows: string
            has_expected: boolean
            items: string
            has_actual: boolean
        }
    }

    interface CaseType {
        id: number
        name: string
        is_default: boolean
    }

    interface Config {
        id: number
        name: string
        project_id: number
        configs: ConfigItem[]
    }

    interface ConfigItem {
        id: number
        group_id: number
        name: string
    }

    interface NewConfig {
        name: string
    }

    interface Milestone {
        id: number
        name?: string
        description?: string
        start_on?: number
        started_on?: number
        is_started: boolean
        due_on?: number
        is_completed: boolean
        completed_on?: number
        project_id: number
        parent_id?: number
        url: string
        milestones: number[]
    }

    interface MilestoneFilter {
        is_completed: boolean
        is_started: boolean
    }

    interface NewMilestone {
        name: string
        description: string
        due_on: number
        parent_id: number
        start_on: number
    }

    interface UpdateMilestone extends NewMilestone {
        is_completed: boolean
        is_started: boolean
    }

    interface Plan {
        id: number
        name: string
        description?: string
        milestone_id?: number
        assignedto_id?: number
        is_completed?: boolean
        completed_on?: number
        passed_count: number
        blocked_count: number
        untested_count: number
        retest_count: number
        failed_count: number
        project_id: number
        created_on: number
        created_by: number
        url: string
        entries: PlanEntry[]
    }

    interface PlanEntry {
        id: string
        suite_id: number
        name: string
        runs: PlanEntryRun[]
    }

    interface PlanEntryRun extends Run {
        entry_index: number
        entry_id: string
    }

    interface Run {
        id: number
        suite_id: number
        name: string
        description: string
        milestone_id: number
        assignedto_id: number
        include_all: boolean
        is_completed: boolean
        completed_on?: number
        passed_count: number
        blocked_count: number
        untested_count: number
        retest_count: number
        failed_count: number
        project_id: number
        plan_id: number
        config?: string
        config_ids: number[]
        created_on: number
        created_by: number
        url: string
    }

    interface PlanFilters {
        created_after: number
        created_before: number
        created_by: string
        is_completed: boolean
        limit: number
        offset: number
        milestone_id: string
    }

    interface NewPlan extends UpdatePlan {
        entries: NewPlanEntry[]
    }

    interface NewPlanEntry extends UpdatePlanEntry {
        suite_id: number
        config_ids: number[]
        runs: NewRun[]
    }

    interface NewRun {
        suite_id: number
        name: string
        description: string
        milestone_id: number
        assignedto_id: number
        include_all: boolean
        case_ids: number[]
    }

    interface UpdatePlan {
        name: string
        description: string
        milestone_id: number
    }

    interface UpdatePlanEntry {
        name: string
        description: string
        assignedto_id: number
        include_all: boolean
        case_ids: number[]
    }

    interface Priority {
        id: number
        name: string
        short_name: string
        priority: number
        is_default: boolean
    }

    interface Project {
        announcement: string
        completed_on: number
        id: number
        is_completed: boolean
        name: string
        show_announcement: boolean
        suite_mode: number
        url: string
    }

    interface ProjectFilters {
        is_completed: boolean
    }

    interface NewProject {
        name: string
        announcement: string
        show_announcement: boolean
        suite_mode: number
    }

    interface UpdateProject extends NewProject {
        is_completed: boolean
    }

    interface Result {
        id: number
        test_id: number
        status_id: number
        created_by: number
        created_on: number
        assignedto_id: number
        comment: string
        version: string
        elapsed: string
        defects: string
        custom_step_results: any | any[]
        attachment_ids: number[]
    }

    interface ResultFilters {
        limit: number
        offset: number
        status_id: string
    }

    interface ResultsForRunFilters extends ResultFilters {
        created_after: number
        created_before: number
        created_by: number
    }

    interface NewResult {
        status_id: number
        comment: string
        version: string
        elapsed: string
        defects: string
        assignedto_id: number
    }

    interface NewResultForCase extends NewResult {
        case_id: number
    }

    interface ResultField {
        configs: CaseFieldConfig[]
        description?: string
        display_order: number
        id: number
        label: string
        name: string
        system_name: string
        type_id: number
    }

    interface RunFilters {
        created_after: number
        created_before: number
        created_by: string
        is_completed: boolean
        limit: number
        offset: number
        milestone_id: string
        suite_id: string
    }

    interface NewRun extends UpdateRun {
        suite_id: number
        assignedto_id: number
    }

    interface UpdateRun {
        name: string
        description: string
        milestone_id: number
        include_all: boolean
        case_ids: number[]
    }

    interface SectionsFilters {
        suite_id: number
    }

    interface Section {
        depth: number
        description: string
        display_order: number
        id: number
        parent_id?: number
        name: string
        suite_id: number
    }

    interface NewSection extends UpdateSection {
        suite_id: number
        parent_id: number
    }

    interface UpdateSection {
        description: string
        name: string
    }

    interface Status {
        color_bright: number
        color_dark: number
        color_medium: number
        id: number
        is_final: boolean
        is_system: boolean
        is_untested: boolean
        label: string
        name: string
    }

    interface Suite {
        completed_on: number
        description: string
        id: number
        is_baseline: boolean
        is_completed: boolean
        is_master: boolean
        name: string
        project_id: number
        url: string
    }

    interface NewSuite {
        name: string
        description: string
    }

    interface Template {
        id: number
        name: string
        is_default: boolean
    }

    interface Test {
        assignedto_id: number
        case_id: number
        estimate: string
        estimate_forecast: string
        id: number
        milestone_id: number
        priority_id: number
        refs: string
        run_id: number
        status_id: number
        title: string
        type_id: number
    }

    interface TestFilters {
        status_id: string
    }

    interface User {
        id: number
        name: string
        email: string
        is_active: boolean
    }

    interface Report {
        id: number
        name: string
        description: string | null
        notify_user: boolean
        notify_link: boolean
        notify_link_recipients: string | null
        notify_attachment: boolean
        notify_attachment_recipients: string | null
        notify_attachment_html_format: boolean
        notify_attachment_pdf_format: boolean
        runs_suites_include: string
        runs_suites_ids: number[] | null
        runs_filters: {
            mode: string,
            filter: object
        }
        runs_include: string
        runs_ids: number[] | null
        runs_limit: number
        activities_daterange: string
        activities_daterange_from: number | null
        activities_daterange_to: number | null
        activities_statuses_include: string
        activities_statuses_ids: number[] | null
        activities_limit: number
        tests_filters: {
            mode: string,
            filter: object
        }
        tests_columns: {
            [key: string]: any
        }
        tests_limit: number
        content_hide_links: boolean
        status_include: boolean
        activities_include: boolean
        progress_include: boolean
        tests_include: boolean
    }

    interface ReportUrls {
        report_url: string
        report_html: string
        report_pdf: string
    }

    interface AddAttachment {
        attachment_id: number
    }

    interface Attachment {
        id: number
        name: string
        filename: string
        size: number
        created_on: number
        project_id: number
        case_id: number
        test_change_id: number
        user_id: number
    }
}

export = TestRail
