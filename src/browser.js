'use strict'

class TestRail {
  constructor(options) {
    this.host = options.host
    this.user = options.user
    this.password = options.password
    this.uri = '/index.php?/api/v2/'
  }

  // https://www.gurock.com/testrail/docs/api/reference/attachments

  async addAttachmentToPlan(planId, attachment) {
    return this._apiCall('POST', `add_attachment_to_plan/${planId}`, null, null, {attachment})
  }

  async addAttachmentToPlanEntry(planId, entryId, attachment) {
    return this._apiCall('POST', `add_attachment_to_plan_entry/${planId}/${entryId}`, null, null, {attachment})
  }

  async addAttachmentToResult(resultId, attachment) {
    return this._apiCall('POST', `add_attachment_to_result/${resultId}`, null, null, {attachment})
  }

  async addAttachmentToRun(runId, attachment) {
    return this._apiCall('POST', `add_attachment_to_run/${runId}`, null, null, {attachment})
  }

  async getAttachmentsForCase(caseId) {
    return this._apiCall('GET', `get_attachments_for_case/${caseId}`)
  }

  async getAttachmentsForPlan(planId) {
    return this._apiCall('GET', `get_attachments_for_plan/${planId}`)
  }

  async getAttachmentsForPlanEntry(planId, entryId) {
    return this._apiCall('GET', `get_attachments_for_plan_entry/${planId}/${entryId}`)
  }

  async getAttachmentsForRun(runId) {
    return this._apiCall('GET', `get_attachments_for_run/${runId}`)
  }

  async getAttachmentsForTest(testId) {
    return this._apiCall('GET', `get_attachments_for_test/${testId}`)
  }

  async getAttachment(attachmentId) {
    return this._apiCall('GET', `get_attachment/${attachmentId}`)
  }

  async deleteAttachment(attachmentId) {
    return this._apiCall('POST', `delete_attachment/${attachmentId}`)
  }

  // https://www.gurock.com/testrail/docs/api/reference/cases

  async getCase(caseId) {
    return this._apiCall('GET', `get_case/${caseId}`)
  }

  async getCases(projectId, filters) {
    return this._apiCall('GET', `get_cases/${projectId}`, filters)
  }

  async addCase(sectionId, data) {
    return this._apiCall('POST', `add_case/${sectionId}`, null, data)
  }

  async updateCase(caseId, data) {
    return this._apiCall('POST', `update_case/${caseId}`, null, data)
  }

  async deleteCase(caseId) {
    return this._apiCall('POST', `delete_case/${caseId}`)
  }

  // https://www.gurock.com/testrail/docs/api/reference/case-fields

  async getCaseFields() {
    return this._apiCall('GET', 'get_case_fields')
  }

  async addCaseField(data) {
    return this._apiCall('POST', 'add_case_field', null, data)
  }

  // https://www.gurock.com/testrail/docs/api/reference/case-types

  async getCaseTypes() {
    return this._apiCall('GET', 'get_case_types')
  }

  // https://www.gurock.com/testrail/docs/api/reference/configurations

  async getConfigs(projectId) {
    return this._apiCall('GET', `get_configs/${projectId}`)
  }

  async addConfigGroup(projectId, data) {
    return this._apiCall('POST', `add_config_group/${projectId}`, null, data)
  }

  async addConfig(configGroupId, data) {
    return this._apiCall('POST', `add_config/${configGroupId}`, null, data)
  }

  async updateConfigGroup(configGroupId, data) {
    return this._apiCall('POST', `update_config_group/${configGroupId}`, null, data)
  }

  async updateConfig(configId, data) {
    return this._apiCall('POST', `update_config/${configId}`, null, data)
  }

  async deleteConfigGroup(configGroupId) {
    return this._apiCall('POST', `delete_config_group/${configGroupId}`)
  }

  async deleteConfig(configId) {
    return this._apiCall('POST', `delete_config/${configId}`)
  }

  // https://www.gurock.com/testrail/docs/api/reference/milestones

  async getMilestone(milestoneId) {
    return this._apiCall('GET', `get_milestone/${milestoneId}`)
  }

  async getMilestones(projectId, filters) {
    return this._apiCall('GET', `get_milestones/${projectId}`, filters)
  }

  async addMilestone(projectId, data) {
    return this._apiCall('POST', `add_milestone/${projectId}`, null, data)
  }

  async updateMilestone(milestoneId, data) {
    return this._apiCall('POST', `update_milestone/${milestoneId}`, null, data)
  }

  async deleteMilestone(milestoneId) {
    return this._apiCall('POST', `delete_milestone/${milestoneId}`)
  }

  // https://www.gurock.com/testrail/docs/api/reference/plans

  async getPlan(planId) {
    return this._apiCall('GET', `get_plan/${planId}`)
  }

  async getPlans(projectId, filters) {
    return this._apiCall('GET', `get_plans/${projectId}`, filters)
  }

  async addPlan(projectId, data) {
    return this._apiCall('POST', `add_plan/${projectId}`, null, data)
  }

  async addPlanEntry(planId, data) {
    return this._apiCall('POST', `add_plan_entry/${planId}`, null, data)
  }

  async updatePlan(planId, data) {
    return this._apiCall('POST', `update_plan/${planId}`, null, data)
  }

  async updatePlanEntry(planId, entryId, data) {
    return this._apiCall('POST', `update_plan_entry/${planId}/${entryId}`, null, data)
  }

  async closePlan(planId) {
    return this._apiCall('POST', `close_plan/${planId}`)
  }

  async deletePlan(planId) {
    return this._apiCall('POST', `delete_plan/${planId}`)
  }

  async deletePlanEntry(planId, entryId) {
    return this._apiCall('POST', `delete_plan_entry/${planId}/${entryId}`)
  }

  // https://www.gurock.com/testrail/docs/api/reference/priorities

  async getPriorities() {
    return this._apiCall('GET', 'get_priorities')
  }

  // https://www.gurock.com/testrail/docs/api/reference/projects

  async getProject(projectId) {
    return this._apiCall('GET', `get_project/${projectId}`)
  }

  async getProjects(filters) {
    return this._apiCall('GET', 'get_projects', filters)
  }

  async addProject(data) {
    return this._apiCall('POST', 'add_project', null, data)
  }

  async updateProject(projectId, data) {
    return this._apiCall('POST', `update_project/${projectId}`, null, data)
  }

  async deleteProject(projectId) {
    return this._apiCall('POST', `delete_project/${projectId}`)
  }

  // https://www.gurock.com/testrail/docs/api/reference/results

  async getResults(testId, filters) {
    return this._apiCall('GET', `get_results/${testId}`, filters)
  }

  async getResultsForCase(runId, caseId, filters) {
    return this._apiCall('GET', `get_results_for_case/${runId}/${caseId}`, filters)
  }

  async getResultsForRun(runId, filters) {
    return this._apiCall('GET', `get_results_for_run/${runId}`, filters)
  }

  async addResult(testId, data) {
    return this._apiCall('POST', `add_result/${testId}`, null, data)
  }

  async addResultForCase(runId, caseId, data) {
    return this._apiCall('POST', 'add_result_for_case/' + runId + '/' + caseId, null, data)
  }

  async addResults(runId, data) {
    return this._apiCall('POST', `add_results/${runId}`, null, data)
  }

  async addResultsForCases(runId, data) {
    return this._apiCall('POST', `add_results_for_cases/${runId}`, null, data)
  }

  // https://www.gurock.com/testrail/docs/api/reference/result-fields

  async getResultFields() {
    return this._apiCall('GET', 'get_result_fields')
  }

  // https://www.gurock.com/testrail/docs/api/reference/runs

  async getRun(runId) {
    return this._apiCall('GET', `get_run/${runId}`)
  }

  async getRuns(projectId, filters) {
    return this._apiCall('GET', `get_runs/${projectId}`, filters)
  }

  async addRun(projectId, data) {
    return this._apiCall('POST', `add_run/${projectId}`, null, data)
  }

  async updateRun(runId, data) {
    return this._apiCall('POST', `update_run/${runId}`, null, data)
  }

  async closeRun(runId) {
    return this._apiCall('POST', `close_run/${runId}`)
  }

  async deleteRun(runId) {
    return this._apiCall('POST', `delete_run/${runId}`)
  }

  // https://www.gurock.com/testrail/docs/api/reference/sections

  async getSection(sectionId) {
    return this._apiCall('GET', `get_section/${sectionId}`)
  }

  async getSections(projectId, filters) {
    return this._apiCall('GET', `get_sections/${projectId}`, filters)
  }

  async addSection(projectId, data) {
    return this._apiCall('POST', `add_section/${projectId}`, null, data)
  }

  async updateSection(sectionId, data) {
    return this._apiCall('POST', `update_section/${sectionId}`, null, data)
  }

  async deleteSection(sectionId) {
    return this._apiCall('POST', `delete_section/${sectionId}`)
  }

  // https://www.gurock.com/testrail/docs/api/reference/statuses

  async getStatuses() {
    return this._apiCall('GET', 'get_statuses')
  }

  // https://www.gurock.com/testrail/docs/api/reference/suites

  async getSuite(suiteId) {
    return this._apiCall('GET', `get_suite/${suiteId}`)
  }

  async getSuites(projectId) {
    return this._apiCall('GET', `get_suites/${projectId}`)
  }

  async addSuite(projectId, data) {
    return this._apiCall('POST', `add_suite/${projectId}`, null, data)
  }

  async updateSuite(suiteId, data) {
    return this._apiCall('POST', `update_suite/${suiteId}`, null, data)
  }

  async deleteSuite(suiteId) {
    return this._apiCall('POST', `delete_suite/${suiteId}`)
  }

  // https://www.gurock.com/testrail/docs/api/reference/templates

  async getTemplates(projectId) {
    return this._apiCall('GET', `get_templates/${projectId}`)
  }

  // https://www.gurock.com/testrail/docs/api/reference/tests

  async getTest(testId) {
    return this._apiCall('GET', `get_test/${testId}`)
  }

  async getTests(runId, filters) {
    return this._apiCall('GET', `get_tests/${runId}`, filters)
  }

  // https://www.gurock.com/testrail/docs/api/reference/users

  async getUser(userId) {
    return this._apiCall('GET', `get_user/${userId}`)
  }

  async getUserByEmail(email) {
    return this._apiCall('GET', 'get_user_by_email', {email: email})
  }

  async getUsers() {
    return this._apiCall('GET', 'get_users')
  }

  // https://www.gurock.com/testrail/docs/api/reference/reports

  async getReports(projectId) {
    return this._apiCall('GET', `get_reports/${projectId}`)
  }

  async runReport(reportTemplateId) {
    return this._apiCall('GET', `run_report/${reportTemplateId}`)
  }

  /**
   * Perform request to API
   *
   * @param {string} method
   * @param {string} path
   * @param {object?} query
   * @param {object?} params
   * @param {object?} formData
   * @returns {Promise<*|void>}
   * @private
   */
  async _apiCall(method, path, query, params, formData) {
    const url = this.host + this.uri + path + qs(query)

    const headers = {}

    if (this.user && this.password) {
      headers.Authorization = `Basic ${btoa(`${this.user}:${this.password}`)}`
    }

    if (!formData) {
      headers['Content-Type'] = 'application/json'
    }

    let body = null

    if (params) {
      body = JSON.stringify(params)
    }

    if (formData) {
      body = new FormData()
      for (const [key, value] of Object.entries(formData)) {
        if (value.name && value.value) {
          let data = value.value instanceof Blob
            ? value.value
            : new Blob([value.value])

          body.append(key, data, value.name)
        } else {
          body.append(key, value)
        }
      }
    }

    while (true) {
      const response = await fetch(url, {method, body, headers})

      // Repeat on 429 Too Many Requests
      if (response.status === 429) {
        await sleep((parseInt(response.headers['Retry-After']) || 1) * 1000)
        continue
      }

      // Repeat on 500-599 Server Error
      if (response.status >= 500 && response.status <= 599) {
        await sleep(10000)
        continue
      }

      // Repeat if TestRail is currently in maintenance
      if (~response.statusText.toLowerCase().indexOf('maintenance')) {
        await sleep(10000)
        continue
      }

      const json = await response.json()

      if (response.status === 200) {
        return json
      } else {
        throw new TestRail.Error(json.error || 'No additional error message received')
      }
    }
  }
}

TestRail.Error = class extends Error {
  constructor(message) {
    super(message)
    this.name = 'TestRailError'
  }
}

function qs(data) {
  return data ? '&' + new URLSearchParams(data).toString() : ''
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

module.exports = TestRail
