export interface BasicResponseTemplateParameters {
  success: boolean;
  code?: number;
  message: {
    status?: string;
    title?: string;
    text: string;
    icon?: string;
    content?: string;
    content_description?: string;
  };
  data?: {};
  error?: {};
}

export class BasicResponseTemplate {
  success!: boolean;
  code?: number;
  message!: {
    status?: string;
    title?: string;
    text: string;
    icon?: string;
    content?: string;
    content_description?: string;
  };
  data?: {};
  error?: {};

  constructor({
    success,
    code,
    message,
    data,
    error,
  }: BasicResponseTemplateParameters) {
    this.success = success;
    this.code = code;
    this.message = message;
    this.data = data;
    this.error = error;
  }
}
