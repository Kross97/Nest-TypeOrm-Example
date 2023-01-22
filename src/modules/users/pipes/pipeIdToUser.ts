import { PipeTransform, Injectable, ArgumentMetadata } from "@nestjs/common";

@Injectable()
export class PipeIdToUser implements PipeTransform<string, { name: string }> {
    transform(value: string, metadata: ArgumentMetadata): any {
        console.log("PIPE USERS VALUE:", value);
        console.log('PIPE METADATA USERS:', metadata);
        return { name: 'pipe_user_to_id'};
    }
}