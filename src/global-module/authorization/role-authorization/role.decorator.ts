import { SetMetadata } from '@nestjs/common';

export const RoleDecorator = (roleSet) => SetMetadata('id_role', roleSet);
