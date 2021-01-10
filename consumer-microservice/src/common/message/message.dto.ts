export class MessageDto {
  readonly value: string;
  readonly headers: any;

  constructor(partial: Partial<MessageDto>) {
    Object.assign(this, partial);
  }
}
