import axios from 'axios'

export const patchSettings = (settings) => {
  axios(
    {
      method: 'patch',
      url: './settings',
      data: Object.keys(settings).map((v, i, a) => {
        return {op: 'replace', path: '/' + v, value: settings[v]}
      })
    }
  ).then(response => {
    // TODO: Properly update store
  }).catch(err => {
    // TODO: Properly handle roleback on failure
  });

  // TODO: Move this to an optimistic action.
  return {
    type: 'PATCH',
    settings
  }
}
