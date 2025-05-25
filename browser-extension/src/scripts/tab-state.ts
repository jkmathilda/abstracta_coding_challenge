import { Agent } from "../scripts/agent"

export class TabState {
  sidebarSize: number
  displaying: boolean
  agent?: Agent
  messages: ChatMessage[]

  constructor(sidebarSize: number, displaying: boolean, messages: ChatMessage[], agent?: Agent) {
    this.sidebarSize = sidebarSize
    this.displaying = displaying
    this.agent = agent
    this.messages = messages
  }

  public static fromJsonObject(obj: any): TabState {
    return new TabState(obj.sidebarSize, obj.displaying, obj.messages.map((m: any) => ChatMessage.fromJsonObject(m)), obj.agent ? Agent.fromJsonObject(obj.agent) : undefined)
  }
}

export class ChatMessage {
  text: string
  file: Record<string, string>
  isUser: boolean
  isComplete: boolean
  isSuccess: boolean
  steps?: string[]

  constructor(text: string, file: Record<string, string>, isUser: boolean, isComplete: boolean, isSuccess: boolean, steps?: string[]) {
    this.text = text
    this.file = file    
    this.isUser = isUser
    this.isComplete = isComplete
    this.isSuccess = isSuccess
    this.steps = steps
  }

  public static userMessage(text: string, file: Record<string, string>): ChatMessage {
    return new ChatMessage(text, file, true, true, true)
  }

  public static agentMessage(text?: string, steps?: string[]): ChatMessage {
    const isComplete = (text !== undefined && text.length > 0) || (steps && steps.length > 0)
    return new ChatMessage(text || '', {}, false, isComplete, true, steps)
  }

  public static agentErrorMessage(text: string): ChatMessage {
    return new ChatMessage(text || '', {}, false, true, false)
  }

  public static fromJsonObject(obj: any): ChatMessage {
    return new ChatMessage(obj.text, obj.file, obj.isUser, obj.isComplete, obj.isSuccess, obj.steps)
  }
}
