import { AllowedActions, AllowedPayload } from '../types.js'

export const message = <K extends AllowedActions>(action: K, payload?: AllowedPayload<K>): string =>
  JSON.stringify([action, { ...payload }])
