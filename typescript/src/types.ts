export type Location = {
  x: number
  y: number
}

export type Rotation = 0 | 45 | 90 | 135 | 180 | 225 | 270 | 315

export type Player = {
  position: Location
  rotation: Rotation
}

export interface NoWayOutState {
  player: Player
  moves: number
  timer: number
  start: Location
  startRotation: Rotation
  target: Location
  rows: number
  columns: number
  square: number
}

export type Action =
  | {
      action: 'move' | 'reset'
    }
  | {
      action: 'rotate'
      rotation: Rotation
    }

export interface GameInstance {
  gameState: string
  owner: string
  status: string
  createdAt: Date
  gameType: string
  entityId: string
}

export type ErrType = 'Forbidden' | 'Internal Server Error' | 'Bad Request'

export interface Messages {
  'sub-game': {
    id: string
  }
  'game-instance': {
    gameState: string
    status: string
    reason: string
    createdAt: Date
    gameType: string
    entityId: string
  }
  'run-command': {
    gameId: string
    payload: Action
  }
  success: {
    message: string
  }
  failure: {
    reason: ErrType
    desc?: string
  }
}

export type AllowedActions = keyof Messages
export type AllowedPayload<K extends AllowedActions> = Messages[K]
export type Message<K extends AllowedActions> = K extends AllowedActions ? [K, AllowedPayload<K>] : never
export type AnyMessage = Message<AllowedActions>
