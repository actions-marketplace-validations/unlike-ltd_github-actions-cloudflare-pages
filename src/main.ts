import {getInput, setFailed, setOutput} from '@actions/core'
import {context} from '@actions/github'

/**
 * https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action
 */
export function run(): void {
  try {
    const nameToGreet = getInput('who-to-greet')
    console.log(`Hello ${nameToGreet}!`)
    const time = new Date().toTimeString()
    setOutput('time', time)
    // // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`)
  } catch (error) {
    if (error instanceof Error) setFailed(error.message)
  }
}
