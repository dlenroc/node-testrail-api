'use strict';

const fs = require('fs');
const qs = require('qs');
const request = require('request');

class TestRail {
  constructor(options) {
    this.host = options.host;
    this.user = options.user;
    this.password = options.password;
    this.uri = '/index.php?/api/v2/';
  }

  // http://docs.gurock.com/testrail-api2/reference-attachments

  async addAttachmentToResult(resultId, filePath) {
    return await this._apiCall('POST', 'add_attachment_to_result/' + resultId, null, null, {attachment: fs.createReadStream(filePath)});
  }

  async addAttachmentToResultForCase(resultId, caseId, filePath) {
    return await this._apiCall('POST', 'add_attachment_to_result_for_case/' + resultId + '/' + caseId, null, null, {attachment: fs.createReadStream(filePath)});
  }

  async getAttachmentsForCase(caseId) {
    return await this._apiCall('GET', 'get_attachments_for_case/' + caseId);
  }

  async getAttachmentsForTest(testId) {
    return await this._apiCall('GET', 'get_attachments_for_test/' + testId);
  }

  async getAttachment(attachmentId) {
    return await this._apiCall('GET', 'get_attachment/' + attachmentId);
  }

  async deleteAttachment(attachmentId) {
    return await this._apiCall('POST', 'delete_attachment/' + attachmentId);
  }

  // http://docs.gurock.com/testrail-api2/reference-cases

  async getCase(caseId) {
    return await this._apiCall('GET', 'get_case/' + caseId);
  }

  async getCases(projectId, filters) {
    return await this._apiCall('GET', 'get_cases/' + projectId, filters);
  }

  async addCase(sectionId, data) {
    return await this._apiCall('POST', 'add_case/' + sectionId, null, data);
  }

  async updateCase(caseId, data) {
    return await this._apiCall('POST', 'update_case/' + caseId, null, data);
  }

  async deleteCase(caseId) {
    return await this._apiCall('POST', 'delete_case/' + caseId);
  }

  // http://docs.gurock.com/testrail-api2/reference-cases-fields

  async getCaseFields() {
    return await this._apiCall('GET', 'get_case_fields');
  }

  async addCaseField(data) {
    return await this._apiCall('POST', 'add_case_field', null, data);
  }

  // http://docs.gurock.com/testrail-api2/reference-cases-types

  async getCaseTypes() {
    return await this._apiCall('GET', 'get_case_types');
  }

  // http://docs.gurock.com/testrail-api2/reference-configs

  async getConfigs(projectId) {
    return await this._apiCall('GET', 'get_configs/' + projectId);
  }

  async addConfigGroup(projectId, data) {
    return await this._apiCall('POST', 'add_config_group/' + projectId, null, data);
  }

  async addConfig(configGroupId, data) {
    return await this._apiCall('POST', 'add_config/' + configGroupId, null, data);
  }

  async updateConfigGroup(configGroupId, data) {
    return await this._apiCall('POST', 'update_config_group/' + configGroupId, null, data);
  }

  async updateConfig(configId, data) {
    return await this._apiCall('POST', 'update_config/' + configId, null, data);
  }

  async deleteConfigGroup(configGroupId) {
    return await this._apiCall('POST', 'delete_config_group/' + configGroupId);
  }

  async deleteConfig(configId) {
    return await this._apiCall('POST', 'delete_config/' + configId);
  }

  // http://docs.gurock.com/testrail-api2/reference-milestones

  async getMilestone(milestoneId) {
    return await this._apiCall('GET', 'get_milestone/' + milestoneId);
  }

  async getMilestones(projectId, filters) {
    return await this._apiCall('GET', 'get_milestones/' + projectId, filters);
  }

  async addMilestone(projectId, data) {
    return await this._apiCall('POST', 'add_milestone/' + projectId, null, data);
  }

  async updateMilestone(milestoneId, data) {
    return await this._apiCall('POST', 'update_milestone/' + milestoneId, null, data);
  }

  async deleteMilestone(milestoneId) {
    return await this._apiCall('POST', 'delete_milestone/' + milestoneId);
  }

  // http://docs.gurock.com/testrail-api2/reference-plans

  async getPlan(planId) {
    return await this._apiCall('GET', 'get_plan/' + planId);
  }

  async getPlans(projectId, filters) {
    return await this._apiCall('GET', 'get_plans/' + projectId, filters);
  }

  async addPlan(projectId, data) {
    return await this._apiCall('POST', 'add_plan/' + projectId, null, data);
  }

  async addPlanEntry(planId, data) {
    return await this._apiCall('POST', 'add_plan_entry/' + planId, null, data);
  }

  async updatePlan(planId, data) {
    return await this._apiCall('POST', 'update_plan/' + planId, null, data);
  }

  async updatePlanEntry(planId, entryId, data) {
    return await this._apiCall('POST', 'update_plan_entry/' + planId + '/' + entryId, null, data);
  }

  async closePlan(planId) {
    return await this._apiCall('POST', 'close_plan/' + planId);
  }

  async deletePlan(planId) {
    return await this._apiCall('POST', 'delete_plan/' + planId);
  }

  async deletePlanEntry(planId, entryId) {
    return await this._apiCall('POST', 'delete_plan_entry/' + planId + '/' + entryId);
  }

  // http://docs.gurock.com/testrail-api2/reference-priorities

  async getPriorities() {
    return await this._apiCall('GET', 'get_priorities');
  }

  // http://docs.gurock.com/testrail-api2/reference-projects

  async getProject(projectId) {
    return await this._apiCall('GET', 'get_project/' + projectId);
  }

  async getProjects(filters) {
    return await this._apiCall('GET', 'get_projects', filters);
  }

  async addProject(data) {
    return await this._apiCall('POST', 'add_project', null, data);
  }

  async updateProject(projectId, data) {
    return await this._apiCall('POST', 'update_project/' + projectId, null, data);
  }

  async deleteProject(projectId) {
    return await this._apiCall('POST', 'delete_project/' + projectId);
  }

  // http://docs.gurock.com/testrail-api2/reference-results

  async getResults(testId, filters) {
    return await this._apiCall('GET', 'get_results/' + testId, filters);
  }

  async getResultsForCase(runId, caseId, filters) {
    return await this._apiCall('GET', 'get_results_for_case/' + runId + '/' + caseId, filters);
  }

  async getResultsForRun(runId, filters) {
    return await this._apiCall('GET', 'get_results_for_run/' + runId, filters);
  }

  async addResult(testId, data) {
    return await this._apiCall('POST', 'add_result/' + testId, null, data);
  }

  async addResultForCase(runId, caseId, data) {
    return await this._apiCall('POST', 'add_result_for_case/' + runId + '/' + caseId, null, data);
  }

  async addResults(runId, data) {
    return await this._apiCall('POST', 'add_results/' + runId, null, data);
  }

  async addResultsForCases(runId, data) {
    return await this._apiCall('POST', 'add_results_for_cases/' + runId, null, data);
  }

  // http://docs.gurock.com/testrail-api2/reference-results-fields

  async getResultFields() {
    return await this._apiCall('GET', 'get_result_fields');
  }

  // http://docs.gurock.com/testrail-api2/reference-runs

  async getRun(runId) {
    return await this._apiCall('GET', 'get_run/' + runId);
  }

  async getRuns(projectId, filters) {
    return await this._apiCall('GET', 'get_runs/' + projectId, filters);
  }

  async addRun(projectId, data) {
    return await this._apiCall('POST', 'add_run/' + projectId, null, data);
  }

  async updateRun(runId, data) {
    return await this._apiCall('POST', 'update_run/' + runId, null, data);
  }

  async closeRun(runId) {
    return await this._apiCall('POST', 'close_run/' + runId);
  }

  async deleteRun(runId) {
    return await this._apiCall('POST', 'delete_run/' + runId);
  }

  // http://docs.gurock.com/testrail-api2/reference-sections

  async getSection(sectionId) {
    return await this._apiCall('GET', 'get_section/' + sectionId);
  }

  async getSections(projectId, filters) {
    return await this._apiCall('GET', 'get_sections/' + projectId, filters);
  }

  async addSection(projectId, data) {
    return await this._apiCall('POST', 'add_section/' + projectId, null, data);
  }

  async updateSection(sectionId, data) {
    return await this._apiCall('POST', 'update_section/' + sectionId, null, data);
  }

  async deleteSection(sectionId) {
    return await this._apiCall('POST', 'delete_section/' + sectionId);
  }

  // http://docs.gurock.com/testrail-api2/reference-statuses

  async getStatuses() {
    return await this._apiCall('GET', 'get_statuses');
  }

  // http://docs.gurock.com/testrail-api2/reference-suites

  async getSuite(suiteId) {
    return await this._apiCall('GET', 'get_suite/' + suiteId);
  }

  async getSuites(projectId) {
    return await this._apiCall('GET', 'get_suites/' + projectId);
  }

  async addSuite(projectId, data) {
    return await this._apiCall('POST', 'add_suite/' + projectId, null, data);
  }

  async updateSuite(suiteId, data) {
    return await this._apiCall('POST', 'update_suite/' + suiteId, null, data);
  }

  async deleteSuite(suiteId) {
    return await this._apiCall('POST', 'delete_suite/' + suiteId);
  }

  // http://docs.gurock.com/testrail-api2/reference-templates

  async getTemplates(projectId) {
    return await this._apiCall('GET', 'get_templates/' + projectId);
  }

  // http://docs.gurock.com/testrail-api2/reference-tests

  async getTest(testId) {
    return await this._apiCall('GET', 'get_test/' + testId);
  }

  async getTests(runId, filters) {
    return await this._apiCall('GET', 'get_tests/' + runId, filters);
  }

  // http://docs.gurock.com/testrail-api2/reference-users

  async getUser(userId) {
    return await this._apiCall('GET', 'get_user/' + userId);
  }

  async getUserByEmail(email) {
    return await this._apiCall('GET', 'get_user_by_email', {email: email});
  }

  async getUsers() {
    return await this._apiCall('GET', 'get_users');
  }

  // http://docs.gurock.com/testrail-api2/reference-reports#run_reportreport_template_id

  async getReports(projectId) {
    return await this._apiCall('GET', 'get_reports/' + projectId);
  }

  async runReport(reportTemplateId) {
    return await this._apiCall('GET', 'run_report/' + reportTemplateId);
  }

  /**
   * Perform request to API
   *
   * @param {string} method
   * @param {string} path
   * @param {object=} query
   * @param {object=} params
   * @param {object=} formData
   * @returns {Promise<*|void>}
   * @private
   */
  async _apiCall(method, path, query, params, formData) {
    while (true) {
      let response = await this._request({
        method: method,
        uri: this.host + this.uri + path + (query ? '&' + qs.stringify(query) : ''),
        headers: {
          'accept': 'application/json',
          'content-type': 'application/json'
        },
        auth: {
          user: this.user,
          pass: this.password
        },
        ...(params && {body: JSON.stringify(params)}),
        ...(formData && {formData: formData})
      });

      // Repeat if we get 429 Too Many Requests
      if (response.statusCode === 429) {
        await sleep((parseInt(response.headers['Retry-After']) || 1) * 1000);
        continue;
      }

      // Repeat if TestRail is currently in maintenance or return 500-599 status code
      if ((response.statusCode >= 500 && response.statusCode <= 599) || ~response.statusMessage.toLowerCase().indexOf('maintenance')) {
        await sleep(10000);
        continue;
      }

      let json = parseJSON(response.body);

      if (response.statusCode === 200)
        return json;
      else
        throw json.error || 'No additional error message received';
    }
  }

  /**
   * Promise based request
   *
   * @param options
   * @returns {Promise<*>}
   * @private
   */
  async _request(options) {
    let self = this;
    return new Promise(function (resolve, reject) {
      request(options, function (error, response) {
        // Re-run if there is a problem with connection
        if (error)
          if (~['ENETUNREACH', 'ECONNRESET', 'ENOTFOUND', 'ESOCKETTIMEDOUT', 'ETIMEDOUT', 'ECONNREFUSED', 'EHOSTUNREACH', 'EPIPE', 'EAI_AGAIN'].indexOf(error.code))
            return setTimeout(function () {
              self._request(options).then(resolve).catch(reject);
            });
          else
            return reject(error);

        return resolve(response);
      });
    });
  }
}

module.exports = TestRail;

function parseJSON(string) {
  try {
    return JSON.parse(string);
  } catch (e) {
    return {};
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
