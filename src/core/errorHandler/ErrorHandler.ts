import {ZodError} from 'zod';
import {ErrorHandlerModels} from './models';

export class ErrorHandler {
  static ZodError(error: ZodError, source: string): ErrorHandlerModels.Log {
    const messages = error.issues.map(e => e.message).join();
    return `[${ErrorHandlerModels.Type.USE_CASE}-${source}]: ${messages}`;
  }
}
