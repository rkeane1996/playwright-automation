import {  AllureRuntime }  from "allure-js-commons";
import { CucumberJSAllureFormatter } from "allure-cucumberjs";

//AllureRuntime = require('allure-js-commons');
//CucumberJSAllureFormatter = require('allure-cucumberjs');

export default class extends CucumberJSAllureFormatter {
  constructor(options) {
    super(options, new AllureRuntime({ resultsDir: "./reporting/allure/allure-results" }), {
      labels: [
        {
          pattern: [/@feature:(.*)/],
          name: "epic",
        },
        {
          pattern: [/@severity:(.*)/],
          name: "severity",
        },
      ],
      links: [
        {
          pattern: [/@issue=(.*)/],
          type: "issue",
          urlTemplate: "http://localhost:8080/issue/%s",
        },
        {
          pattern: [/@tms=(.*)/],
          type: "tms",
          urlTemplate: "http://localhost:8080/tms/%s",
        },
      ],
    });
  }
}