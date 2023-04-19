import fs from 'fs';
import handlebars from 'handlebars';

interface IVariable {
  [key: string]: string | number;
}
interface IParseMailTemplate {
  file: string;
  variables: IVariable;
}

export class HandlebarsMailTemplate {
  public async parse({ file, variables }: IParseMailTemplate): Promise<string> {
    const fileContent = await fs.promises.readFile(file, {
      encoding: 'utf-8',
    });
    const parseTemplate = handlebars.compile(fileContent);

    return parseTemplate(variables);
  }
}
