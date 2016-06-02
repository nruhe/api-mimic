import React, { Component, PropTypes } from 'react';
const SettingsForm = ({ update, toggle, data }) => (
  <form>
    <ul>
      <li>
        <label htmlFor="captureURL">Capture URL</label>
        <input
          type="text"
          name="captureURL"
          value={data.captureURL}
          onChange={update}/>
      </li>
      <li>
        <label htmlFor="sourceURL">Source URL</label>
        <input
          type="text"
          name="sourceURL"
          value={data.sourceURL}
          onChange={update}/>
      </li>
      <li>
        <label htmlFor="enableAPIMocking">
          <input
            type="checkbox"
            name="enableAPIMocking"
            checked={data.enableAPIMocking}
            onChange={toggle}/>
          Enable API Mocking
        </label>
      </li>
      <li>
        <label htmlFor="enableLatency">
          <input
            type="checkbox"
            name="enableLatency"
            checked={data.enableLatency}
            onChange={toggle}/>
          Simulate Latency
        </label>
        <ul>
          <li>
            <label htmlFor="latency">
              <input
                type="text"
                name="latency"
                value={data.latency}
                onChange={update}/>
              seconds
            </label>
          </li>
        </ul>
      </li>
    </ul>
  </form>
)

SettingsForm.propTypes = {
  update: PropTypes.func,
  toggle: PropTypes.func,
  data: PropTypes.shape({
    captureURL: PropTypes.string,
    sourceURL: PropTypes.string,
    enableAPIMocking: PropTypes.bool,
    enableLatency: PropTypes.bool,
    latency: PropTypes.number
  })
}

export default SettingsForm
