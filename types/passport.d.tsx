declare module 'passport' {
    import { AuthenticateOptions } from 'passport';
    import { Request } from 'express';
    import { Profile } from 'passport-github';
  
    type DoneFunction = (error: any, user?: any, info?: any) => void;
  
    interface AuthenticateFunction {
      (req: Request, options?: AuthenticateOptions, callback?: DoneFunction): void;
      (req: Request, callback: DoneFunction): void;
    }
  
    interface PassportStatic {
      authenticate: AuthenticateFunction;
    }
  
    export const Passport: PassportStatic;
    export const Authenticator: typeof Passport.Authenticator;
    export const PassportBase: typeof Passport.PassportBase;
    export const PassportStatic: PassportStatic;
    export const Strategy: typeof import('passport-github').Strategy;
    export const PassportError: typeof import('passport/lib/errors/passporterror');
    export const HttpError: typeof import('passport/lib/errors/httperror');
    export const TokenError: typeof import('passport/lib/errors/tokenerror');
    export const InternalOAuthError: typeof import('passport/lib/errors/internaloautherror');
    export const AuthorizationError: typeof import('passport/lib/errors/authorizationerror');
  }
  