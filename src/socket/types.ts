export interface MessageIo {
  id: string;
  content: string;
}

export interface EventIo {
  name: string;
  handler(...args: any[]): any;
}
