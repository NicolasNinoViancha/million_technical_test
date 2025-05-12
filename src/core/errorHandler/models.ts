export namespace ErrorHandlerModels {
  type Source = string;
  type Description = string;
  export enum Type {
    CORE = 'core',
    SCREEN = 'screen',
    HOOK = 'hook',
    UTIL = 'util',
    USE_CASE = 'use_case',
    REPOSITORY = 'repository',
  }
  export type Log = `[${Type}-${Source}]: ${Description}`;
}
