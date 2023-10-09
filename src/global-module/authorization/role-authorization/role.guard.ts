import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Roles } from '../../../libs/enums';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}
  // CanActive debe devolver true o false, que indica si continua el flujo o no.
  canActivate(context: ExecutionContext): boolean {
    // Obtengo los datos del token, del request
    const requiredRoles = this.reflector.getAllAndOverride<Roles[]>('id_role', [
      context.getHandler(),
      context.getClass(),
    ]);
    // Obtengo los scopes permitidos que como parametros desde el decorador ScopeAuthorization
    // Chequeamos que entre los scopes con permisos se encuentre el del usuario
    if (!requiredRoles) {
      return true;
    }
    const { user } = context.switchToHttp().getRequest();
    return user.id_role === requiredRoles;
  }
}
