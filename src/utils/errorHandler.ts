

export class VerifyDocumentError extends Error {
  constructor(message) {
    super(message);
    this.name = 'VerifyDocumentError';
  }
}
